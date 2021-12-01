import react from "react";
import './regis.css'
import React,{ useState } from "react";
import axios from 'axios'
import {useHistory, NavLink} from 'react-router-dom'


const Register = () => {
  const history=useHistory();
  const [regis, setRegis]= useState({
    email: "",
    phone: ""
  });
  let name, value;
  const handleInput=(e)=>{
    const newData= {...regis}
    newData[e.target.name]= e.target.value
    setRegis(newData)
    console.log(newData)
  }

  const addRegister=async(e)=>{
    console.log("api is working...")
      e.preventDefault()
      const {email, phone}= regis;
      console.log(email, phone)
      const config={
        method: "Post",
        "Content-Type": "application/Json",
        body:JSON.stringify({email: regis.email,  phone: regis.phone})
      }
      const res= await fetch('/register', config)
      console.log("res", res)
      if(!res.status===200 ||!res){
        window.alert("Invalid Registration");
      }else{
        window.alert("Story add is successfully!")
        history.push('/OtpPage')
      }
  }

  return (
    <>
      {/* <center><h2>Register User</h2></center> */}
      <div className="signDiv">
        <div className="img">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/10/16/c3f9ae89-8072-41e1-9fed-6eb9bb699fe91634323933951-500_hamburger.png" width="420px" height="200px"></img>
        </div>
        <br/>
        <h5><strong>Signup</strong> or <strong>Login</strong></h5>

        <label>Phone No.
          <input type="number" className="form-control w-60" onChange={(e)=>(handleInput)} id="number" name="number" placeholder=" Enter number..." />
        </label>
        <label className="label"> Email
          <input type="email" className="form-control w-60" onChange={(e)=>(handleInput)} id="email" name="email" placeholder=" Enter email..." />
          <br/>
          <p>By continueing, I agree to the <p2>Term of Use</p2> &  <p2>Privacy Policy</p2></p>
        </label>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={addRegister} >Send</button>
      </div>
    </>
  );
}

export default Register;