const User= require('../models/user_schema')
const Bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

//register user
const register= async(req, res)=>{
    try{
        const {
            name,
            email,
            phone,
            password,
        }= req.body;

        console.log(req.body)
        const userExits= await User.find({email: email}).exec()
        if(userExits){
            console.log("userExits", userExits)
            // res.send("email is already exits in your db...")
        }
        const userData= await User.create(req.body)
        return res.status(200).send({message:"user resitered save data", data: userData})
    }
    catch(err){
        console.log(err.message)
        res.send(err.message)
    }   
}

const login= async (req,res)=>{
    try{
        const {email, password}=req.body;
        const mail= await User.findOne({email: email})
        console.log("mail", mail)
        if(mail){
            const isMatch=await Bcrypt.compare(password, mail.password);
            console.log("encrypted password match success!")
             // save user token
            // let token= await mail.generateAuthToken();
            const token = jwt.sign({mail: mail},"aijajkhan",{expiresIn: "2h",});
            console.log("token.....", token)

             

            // res.cookie('token', token, {
            //     expires: new Date(Date.now() + 300000000),
            //     secure: false, // set to true if your using https
            //     httpOnly: true,
            //   });

            res.cookie("jwtToken", token, {
                expires: new Date(Date.now()+ 300000000),
                httpOnly: true
            });
            if(!isMatch){
                res.status(400).send({error: "Invalid Credentials"})
            }else{
                res.send({
                    token: token,
                    user_detail: mail,
                    message: "login Success"
                })
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



module.exports= {
    register,
    login
}
