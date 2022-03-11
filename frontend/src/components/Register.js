import react, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './regis.css'
import axios from 'axios'

const Register = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState({
    name: "",
    email: "",
    phoneNo: "",
  })
  const loggedIn = false;

  const handleChange=(e)=>{
    const {name, value}= e.target
    setUsername(preState =>({
      ...preState, [name]: value
    }))
  }

  const submitForm = (e) => {
    e.preventDefault()
    // const {name, email, phoneNo}= username
    // console.log("item", item)
    console.log("aaaa")
    if(username.email.length){
      const payload={
        "name": username.name,
        "email": username.email,
        "phoneNo": username.phoneNo
      }

      axios.post('/register', payload)
      .then((response)=>{
        console.log("response", response)
        if(response.status=='200'){
          setUsername(preState =>({
            ...preState, "successMessage": "Registration is Sucessfully!"
          }))
          console.log("response", response)
          localStorage.setItem(JSON.stringify(username))
          history.push('/otp')
        }
        else{
          props.showError("Some error ocurred");
        }   
      })
      .catch((err)=>{
        console.log(err.mesage)
      })

    }
    else{
      props.showError('Please enter valid username and password')  
    }
    const requestOption={
      method: "Post",
      headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: username.name,
        email: username.email,
        phoneNo: username.phoneNo
      })
    }
    
    // const result = await fetch('/register', requestOption )
    // console.log("result", result)
    // const userInf = await result.json()
    // console.log("result", userInf)
    // localStorage.setItem(JSON.stringify(userInf))
    // history.push('/otp')
    // e.prevendDefault();
    // const {name, email, phoneNo}= username
    // const loginapi= await fetch('/register', {
    //   method: "Post",
    //   body: JSON.stringify(name, email, phoneNo),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   credentials: "include"
    // })
    // const result= await loginapi.json()
    // const result={
    //   name: name,
    //   email: email,
    //   phoneNo: phoneNo,
    // }
    // console.log("result", result)
    // localStorage.setItem(JSON.stringify(result))
    // history.push('/otp')
  }

  // const eventHandling=(e)=>{
  //   // const {name, value}=e.target
  //   console.log("e.target.value", e)
  //   const name= e.target.name
  //   const value= e.target.value
  //   // console.log("e.target.name", e.target.name, e.target.value)
  //   // setUsername(value)
  // }


  return (
    <>
      <h2>{username.phoneNo}</h2>
      <div className="signDiv">
        <div className="img">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/10/16/c3f9ae89-8072-41e1-9fed-6eb9bb699fe91634323933951-500_hamburger.png" width="420px" height="200px"></img>
        </div>
        <br />
        <h5><strong>Signup</strong> or <strong>Login</strong></h5>
        <div>
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label className="label"> <br />
                <input className="form-control"
                  type="Number"
                  name="phoneNo"
                  value={username.phoneNo}
                  onChange={handleChange}
                  placeholder=" +91  |  Mobile Number..."
                />
              </label>
              <label className="label">
                <input className="form-control w-60"
                  type="text"
                  name="email"
                  onChange={handleChange}
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