const nodeMailer= require('nodemailer')

const sendEmail= async(options)=>{
    console.log("options", options)
    const transporter= nodeMailer.createTransport({
        host: "smpt.gmail.com",
        port: 465,
        service: "gmail",
        auth: {
            user: process.env.User
            pass: process.env.Password
        }
    })
    
    const mailOptions={ 
        from: "aijaj18@navgurukul.org",
        to: options.email,
        subject: "E-commerce",
        text: JSON.stringify(options)
    }
    const usermail=await transporter.sendMail(mailOptions);
    return usermail;
}

module.exports= sendEmail;
