import react from "react";
import './regis.css'
import React,{ useState, useEffect } from "react";
import axios from 'axios'
import {useHistory, NavLink} from 'react-router-dom'


const Register = () => {
  const history=useHistory();
  const [user, setUser]= useState({
    email: "",
    phone: ""
  });


  const handleInput=(e)=>{
    const {name, value}=e.target
    setUser({...user,[name]:value})
  }

  const addRegister=async()=>{
    try{
      const {email, phone}= user; 
      console.log("aijajkhkan",email, phone)
      if(!email || !phone){
        window.alert("Please fill input form")
      }
      else{
          const api=await axios.post('/register', user)
          console.log("api", api)
          // const res= await fetch('/register', config)
          // console.log("res--", res)
          // fetch('/register', config)
          // .then(response => response.json())
          // .then(data => {
          //   console.log("data", data)
          // }).catch((err)=>{console.log(err.message)})
          
          // if(!res.status===200 ||!res){
          //   window.alert("Invalid Registration");
          // }
          window.alert("register successfully!")
          history.push('/OtpPage')
        }
    }
    catch(err){
      console.log(err.message)
    }
  }

  useEffect(()=>{
    // addRegister()
  }, [user])

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
          <input type="number" className="form-control w-60" onChange={(e)=>handleInput(e)} id="phone" name="phone" value={user.phone} placeholder=" Enter number..." />
        </label>
        <label className="label"> Email
          <input type="email" className="form-control w-60" onChange={(e)=>handleInput(e)} id="email" name="email" value={user.email} placeholder=" Enter email..." />
          <br/>
          <p>By continueing, I agree to the <p2>Term of Use</p2> &  <p2>Privacy Policy</p2></p>
        </label>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>addRegister({})} >Send</button>
      </div>
    </>
  );
}

export default Register;