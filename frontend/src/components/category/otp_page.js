import react from "react";

// export default OtpPage;


const OtpPage = () => {
  
  const otpVerify=(e)=>{
    console.log("api is working...")
  }

    return (
      <>
        {/* <center><h2>Register User</h2></center> */}
        <div className="signDiv">
          <div className="img">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/10/16/c3f9ae89-8072-41e1-9fed-6eb9bb699fe91634323933951-500_hamburger.png" width="420px" height="200px" alt="image not found"/>
          </div>
        <br/>
        <h5><strong>Signup</strong> or <strong>Login</strong></h5>
          <label className="label">  <br/>
            <input type="Number" className="form-control w-60"  id="phone" placeholder=" Enter OTP..." />
            <br/>
            <p>check your phone <p2>Term of Use</p2> &  <p2>Privacy Policy</p2></p>
          </label>
          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={otpVerify}  >Continue</button>
        </div>
      </>
    );
}
  
  
  export default OtpPage;
