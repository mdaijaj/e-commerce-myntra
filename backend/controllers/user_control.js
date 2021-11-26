const User= require('../models/user_schema')
const Bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const sendToken= require('../utils/jwtToken')
const sendEmail=require('../utils/sendEmail')
const crypto= require('crypto')

//register user
const registered= async(req, res)=>{
    try{
        const {
            name,
            email,
            phone,
            password,
        }= req.body;

        const userExits= await User.findOne({phone: phone})
        console.log("userExits",userExits )
        if(userExits){
            res.send("email is already exits in your db...")
        }else{
            const userData= await User.create(req.body)
            sendToken(userData, 201, res)
            const token=await userData.generateAuthToken()
            console.log("token", token)
            return res.status(200).send({message:"user resitered save data", token: token, data: userData})
        }
    }
    catch(err){
        console.log(err.message)
        res.send(err.message)
    }   
}

//register
const register= async(req, res)=>{
    try{
        const {email, phone}= req.body;
        console.log("email", req.body)
        const userExits= await User.findOne({email: email})
        console.log("userExits",userExits )
        if(userExits){
            res.send("email is already exits in your db...")
        }else{
            const otp=Math.floor(Math.random() * 9999);
            const userData= await User.create(req.body)
            console.log(userData, "kingnnnn")
            sendToken(userData, 201, res)
            const token=await userData.generateAuthToken()
            console.log("token", token)
            // await sendEmail({
            //     email: email,
            //     subject: `E-commerce Reset Password..!`,
            //     message: "how are you",
            //     token: token,
            //     otp: otp
            // })
            console.log({message:"user resitered save data", token: token, data: userData})
            return res.send({message:"user resitered save data", token: token, data: userData})
        }
    }
    catch(err){
        console.log(err.message)
        res.send(err.message)
    }   
}




//login user
const login= async (req,res)=>{
    try{
        const {email, password}=req.body;
        const mail= await User.findOne({email: email})
        console.log("mail", mail)
        if(mail){
            const isMatch=await Bcrypt.compare(password, mail.password);
            console.log("encrypted password match success!")
            //save token in cookies
            // res.cookie("jwtToken", token, {
            //     expires: new Date(Date.now()+ 300000000),
            //     httpOnly: true
            // });
            if(!isMatch){
                res.status(401).send({error: "username or email is Invalid"})
            }else{
                sendToken(mail,200,res)
                // res.send({token: token,user_detail: mail,message: "login Success"})
            } 
        }else{
            res.status(400).send({error: "email not found"})
        }     
    }
    catch(err){
        console.log(err.message)
        res.send("there is problem to login...")
    } 
}


//about user details
const about= async(req,res)=>{
    const user=await User.findById(req.user.id)
    console.log("about page open");
    return res.send(user)
}

//logout user
const loggedOut=(req,res)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });
    res.status(200).send({success: true, message: "logged out Success"})
}

//forget password
const forgetPassword= async (req, res, next)=>{
    const user=await User.findOne({email: req.body.email})
    console.log("user..", user)
    if(!user){
        console.log("not found user")
    }
        //getResetpassword
    const resetToken= await user.getResetPasswordToken();
    // console.log("resetToken", resetToken)
    await user.save({validateBeforeSave: false})
    
    const resetPasswordUrl=`${req.protocole}://${req.get("host")}/resetPassword/${resetToken}`;
    const message= `your password reset token is:- \n \n ${resetPasswordUrl} if you have not requested this mail then ignored this.`
    try{
        await sendEmail({
            email: user.email,
            subject: `E-commerce Reset Password..!`,
            message: message,
        })
        //     res.status(200).send({
        //     success: true, 
        //     message:  `Email sent to ${user.email} Successfully!`
        // })
    }
    catch(err){
        user.resetPasswordToken= undefined;
        user.resetPaswordExpire= undefined;
        await user.save({validateBeforeSave: false})
        return res.send(err.message)
    }
}


//reset password
const resetPassword= async(req,res, next)=>{
    // this.resetPasswordToken=crypto.createHash('sha256').update(req.params.token).digest('base64');
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('base64');
    console.log("resetPasswordToken", resetPasswordToken)

    // const userInf= await User.findOne({
    //     resetPasswordToken, 
    //     resetPaswordExpire: {$gt: Date.now()},
    // });
    // console.log("userInf", userInf)
    // if(!userInf){
    //     return next("Reset password token  invalid or Expired", 400)
    // }

    if(resetPasswordToken==req.body.resetPasswordToken){
        if(req.body.password === req.body.confirmPassword){
            return res.send("password change successfully!")
        }
    }
    
    // userInf.password= req.body.password
    // userInf.resetPasswordToken= undefined
    // userInf.resetPasswordToken= undefined
    // await userInf.save();
    // sendToken(userInf, 200, res)
}


//update password
const updatePassword= async(req,res, next)=>{
    const user= await User.findById(req.user.id)
    console.log("user", user)
    const isPasswordMatched=await Bcrypt.compare(req.body.oldPassword, user.password);
    // const isPasswordMatched=await Bcrypt.comparePassword(req.body.oldPassword, user.password);
    console.log("isPasswordMatched", isPasswordMatched)
    if(!isPasswordMatched){
        return res.status(400).send("old password is invalid ")
    }
    if(!req.body.newPassword==req.body.confirmPassword){
        return res.status(400).send("password does not match.... ")
    }
    user.password=req.body.newPassword
    await user.save()
    sendToken(user, 200, res)
}


//update profile  doubt   
const updateProfile= async(req, res)=>{
    console.log("api is working.........")
    const userInf={
        // name: req.body.name,
        email: req.body.email
    }
    const user= await User.findByIdAndUpdate(req.user.id, userInf, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    console.log(user)
    res.status(200).json("update successfully!")
}


//get all users;
const allUsers= async(req,res)=>{
    const allusers=await User.find()
    console.log(allusers)
    res.status(200).send(allusers)
}

//get single user
const singleUser= async(req,res)=>{
    console.log("api is working....")
    const singleData=await User.findById({_id: req.params._id})
    console.log("singleData", singleData)
    return res.status(200).send({message: "get data successfully!", data: singleData})
}

// delete product
const deleteUser= async(req,res)=>{
    console.log("req", req.params.id)
    try{
        const deleteInf=await User.findByIdAndRemove({_id: req.params.id});
        console.log("delete successfully!", deleteInf)
        res.send({message: "delete successfully!", status: "success"})
        return deleteInf
    }
    catch(err){
        console.log(err.message)
    }
}


module.exports= {
    register,
    login,
    about,
    loggedOut,
    forgetPassword,
    resetPassword,
    updatePassword,
    updateProfile,
    allUsers,
    singleUser,
    deleteUser,
    registered
}

 