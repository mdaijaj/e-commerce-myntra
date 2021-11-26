

// create token and store token in cookies
const sendToken= async(userData,statusCode,res)=>{
    console.log("userData......", userData)
    const token= await userData.generateAuthToken();
    console.log("token", token)
    //option of cookies
    const options={
        expires: new Date(Date.now() + 5*24*60*60*1000),
        httpOnly: true,
    }
    // res.status(statusCode).cookie("token", token, options).send({
    //     success: true,
    //     userData,
    //     token
    // });
}

module.exports= sendToken;