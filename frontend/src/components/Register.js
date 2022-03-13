import react, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './regis.css'

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const loggedIn = false;
  const submitForm= async (e)=>{
    e.preventDefault()
    try{
      if (username.email === '' || username.phone === '') {
        alert("please fill all fields!")
      };
      const loginapi= await fetch('/register', {
        method: "Post",
        body: JSON.stringify({
          name: username.name,
          email: username.email,
          phone: username.phone
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: "include"
      })
      console.log("loginapi", loginapi)
      const result= await loginapi.json()
      console.log("result", result)
      if(result){
        localStorage.setItem("mytime", JSON.stringify(result))
        history.push('/otp')
      }
    }
    catch(err){
      console.log("err.message")
    }
    
  }


  return (
    <>
      <div className="signDiv">
        <div className="img">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/10/16/c3f9ae89-8072-41e1-9fed-6eb9bb699fe91634323933951-500_hamburger.png" width="420px" height="200px"></img>
        </div>
        <div style={{textAlign:"center", padding: "15px"}}>
          <h3><strong>Signup</strong> or <strong>Login</strong></h3>
        </div>
        <div>
          <form onSubmit={submitForm}>
            <div className="mb-3">
            <label className="label">
                <input className="form-control"
                  type="text"
                  name="name"
                  onChange={(e) => setUsername({...username,[e.target.name]:e.target.value})}
                  value={username.name}
                  placeholder=" UserName..."
                />
              </label>
              <label className="label">
                <input className="form-control "
                  type="Number"
                  name="phone"
                  value={username.phone}
                  onChange={(e) => setUsername({...username,[e.target.name]:e.target.value})}
                  placeholder=" +91  |  Mobile Number..."
                />
              </label>
              <label className="label">
                <input className="form-control"
                  type="text"
                  name="email"
                  onChange={(e) => setUsername({...username,[e.target.name]:e.target.value})}
                  value={username.email}
                  placeholder=" Email..."
                />
                <br />
                <p>By continueing, I agree to the <p2>Term of Use</p2> &  <p2>Privacy Policy</p2></p>
              </label>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default Register;