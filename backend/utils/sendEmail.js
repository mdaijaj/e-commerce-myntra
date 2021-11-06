const nodeMailer= require('nodemailer')

const sendEmail= async(options)=>{
    console.log("options", options)
    const transporter= nodeMailer.createTransport({
        host: "smpt.gmail.com",
        port: 465,
        service: "gmail",
        auth: {
            user:"aijaj18@navgurukul.org",
            pass: "aijaj@#123"
        }
    })
    
    const mailOptions={
        from: "aijaj18@navgurukul.org",
        to: options.email,
        subject: "E-commerce",
        text: JSON.stringify(options)
    }
    await transporter.sendMail(mailOptions);
}

module.exports= sendEmail;