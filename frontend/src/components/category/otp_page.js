import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
// export default OtpPage;

const OtpPage = () => {
  const history = useHistory();
  const [oneTimepsw, setOneTimepsw] = useState({ otp: "" });

  const handleInput = (e) => {
    const newdata = { ...oneTimepsw };
    newdata[e.target.name] = e.target.value;
    setOneTimepsw(newdata);
    console.log("newdata", newdata);
  };

  const submit = async () => {
    const otpdata=oneTimepsw.otp
    console.log("otpdata", otpdata)
    const apidata = await fetch("/otpVerify", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
       body: JSON.stringify({apidata: otpdata})
    });
    const resdata=await apidata.json()
    console.log("resdata", resdata)
    if(resdata.length>0){
      if (resdata[0].otp==otpdata) {
        window.alert("register successfully!");
        history.push("/");
      }
    }
    else {
      window.alert("register otp try again!");
      history.push("/OtpPage");
    }
  };

  return (
    <>
      {/* <center><h2>Register User</h2></center> */}
      <div className="signDiv">
        <div className="img">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/10/16/c3f9ae89-8072-41e1-9fed-6eb9bb699fe91634323933951-500_hamburger.png"
            width="420px"
            height="200px"
            alt="image not found"
          />
        </div>
        <br />
        <h5>
          <strong>Welcome Mail Verification</strong>
        </h5>
        <label className="label">
          {" "}
          <br />
          <input
            type="Number"
            className="form-control w-60"
            onChange={(e) => handleInput(e)}
            name="otp"
            value={oneTimepsw.otp}
            placeholder=" Enter OTP..."
            required
          />
          <br />
          <p>
            check your phone <p2>Term of Use</p2> & <p2>Privacy Policy</p2>
          </p>
        </label>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={submit}
        >
          Continue
        </button>
        <Link to="/login">
          <button type="button" className="btn btn-danger">
            Back
          </button>
        </Link>
      </div>
    </>
  );
}

export default OtpPage;
