import react, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [newotp,setNewotp]= useState(null)

    const submitForm=(e)=>{
        e.preventDefault()
        console.log("newotp", newotp)
        let getLocalstore = localStorage.getItem("mytime");
        let localOtp= JSON.parse(getLocalstore).otp
        let oneTimepsd=parseInt(newotp)
        if(oneTimepsd===localOtp){
            console.log("login sucuss")
            history.push('/')
        }
        else{
            alert("otp is invalid")
        }
    }

    const inputHandle=(e)=>{
        console.log("king", e.target.value)
        setNewotp(e.target.value)
    }


    return (
        <>
            <h2 style={{textAlign: "center"}}> This is Login components</h2><hr/>
            <form onSubmit={submitForm} style={{textAlign: "center"}}>
                <div class="with">
                    <label for="number">Confirm OTP :  </label>
                    <input type="number" 
                        class="form-control-w-500" 
                        name="number" 
                        onChange={inputHandle}
                        value={newotp}
                        placeholder="Enter OTP..." 
                    />
                    <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Login;
