const jwt= require('jsonwebtoken');
const User= require('../models/user_schema');


//login after some minutes
const authenticate= async(req,res,next)=>{
    const token=req.cookies.token;
    // console.log("token", token)
    try{
        const decodeData= jwt.verify(token, "aijajkhan");
        req.user= await User.findById({_id: decodeData.id})
        // console.log("req.user", req.user)
        next();
    }catch(err){
        console.log(err.message) 
        res.status(401).send("Unauthorized: Please login to access")
    }
}

const authorizeRoles= (...roles)=>{
    return(req,res,next)=>{
        // console.log("req.user", req.user)
        if(!roles.include== req.user.roll){
            return res.status(401).send(`Roles: ${req.user.roll} is not allowed...`)
        }
        next()
    }
}

module.exports={
    authenticate,
    authorizeRoles
}