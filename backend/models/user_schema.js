const mongoose= require('../database/db');
const Bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const validator= require('validator')
const Schema = mongoose.Schema;

var user_schema=  new Schema({
    name: {
        type: String,
        required: [true, "please enter your name"],
        maxlength: [30, "Name cannot exceed 30 charactor"],
        min: [4, "name should be more than 4 charactor"]
     },
     email: {
         type: String,
         required: [true, "please enter your email"],
         unique: true,
         validate: [validator.isEmail, "please enter valid email id"]
     },
     phone: {
         type: Number,
         required: true
     },
     password: {
      type: String,
      required: [true, "please enter your email"],
    //   select: false
    },
    profile: {
        public_id: {
        type: String,
        },
        url: {
            type: String,
        }
    },
    roll: {
        type: String,
        default: "user",
    },
    resetPasswordToken: {
        type: String
    },
    resetPaswordExpire: {
        type: Date
    }
});

//hashing password
user_schema.pre("save", async function (next){
    console.log("Hi i am pre password using...")
    if(this.isModified('password')){
        console.log("password modified...")
        this.password= await Bcrypt.hash(this.password, 12)
    }
    next()
})

user_schema.methods.generateAuthToken= async function(){
    try{
        let token=jwt.sign({_id: this._id}, "aijajkhan");
        console.log("token", token)
        this.tokens= this.tokens.concat({token: token});
        // console.log("token", this.tokens)
        await this.save();
        return token;
    }
    catch(err){
        console.log("not token verify", err.message)
    }
}
const User=mongoose.model('User', user_schema);
module.exports= User;