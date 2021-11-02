import react from "react";
import './regis.css'
const Register = () => {

  return (
    <>
      {/* <center><h2>Register User</h2></center> */}
      <div className="signDiv">
        <div className="img">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/10/16/c3f9ae89-8072-41e1-9fed-6eb9bb699fe91634323933951-500_hamburger.png" width="420px" height="200px"></img>
        </div>
      <br/>
      <h5><strong>Signup</strong> or <strong>Login</strong></h5>
        <label className="label">  <br/>
          <input className="form-control w-60" type="Number" 
            placeholder=" +91  |  Mobile Number..." />
          <br/>
          <p>By continueing, I agree to the <p2>Term of Use</p2> &  <p2>Privacy Policy</p2></p>
        </label>
        <button type="button" class="btn btn-primary btn-lg btn-block">Continue</button>
      </div>
    </>
  );
}

export default Register;