import react, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import './regis.css'

const Register = () => {
  const history = useHistory();
  const {email,setEmail}= useState({email: ""})
  const {phoneNo,setPhoneNo}= useState({ phoneNo: ""});

  const loggedIn=false;

  // setUsername(state)
  const submitForm= async(e)=>{
    e.prevendDefault();
    const {name, email, phoneNo}= username
    const loginapi= await fetch('/register', {
      method: "Post",
      body: JSON.stringify(name, email, phoneNo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include"
    })
    const result= await loginapi.json()
    console.log(result)
    localStorage.setItem(JSON.stringify(result))
    history.push('/otp')
  }

  // const eventHandling=(e)=>{
  //   const {name, value}=e.target;
  //   console.log("e.target.name", e.target.name, e.target.value)
  //   setUsername({ [name]: value })
  // }


  return (
    <>

    <h2>{username}</h2>
      {/* <center><h2>Register User</h2></center> */}
      <div className="signDiv">
        <div className="img">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/10/16/c3f9ae89-8072-41e1-9fed-6eb9bb699fe91634323933951-500_hamburger.png" width="420px" height="200px"></img>
        </div>
        <br />
        <h5><strong>Signup</strong> or <strong>Login</strong></h5>

        <form onSubmit={submitForm}>
          <label className="label"> <br />
            <input className="form-control" 
              type="Number"
              name="phoneNo"
              value={phoneNo}
              onChange={(e)=>setPhoneNo(e.target.value)}
              placeholder=" +91  |  Mobile Number..." 
              />
          </label>
          <label className="label">
            <input className="form-control w-60" 
              type="text"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              placeholder=" Email..." 
              />
            <br />
            <p>By continueing, I agree to the <p2>Term of Use</p2> &  <p2>Privacy Policy</p2></p>
          </label>
        </form>

        <button type="button" class="btn btn-primary btn-lg btn-block">Continue</button>
      </div>
    </>
  );
}

export default Register;