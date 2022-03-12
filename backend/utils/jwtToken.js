

// create token and store token in cookies
const sendToken= async(userData,statusCode,res)=>{
    const token= await userData.generateAuthToken();
    console.log("token", token)
    console.log("userData......", userData)
    userData["token"]= "aijaj"
    console.log("userdata", userData)
    //option of cookies
    const options={
        expires: new Date(Date.now() + 5*24*60*60*1000),
        httpOnly: true,
    }

    
    res.status(statusCode).cookie("token", token, options).send({
        success: true,
        userData,
        token
    });
    // return userData;
}

module.exports= sendToken;