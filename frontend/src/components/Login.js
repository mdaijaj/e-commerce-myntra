import react from "react";

const Login = () => {



    return (
        <>
            <h2 style={{textAlign: "center"}}> This is Login components</h2><hr/>
            <form onSubmit="" style={{textAlign: "center"}}>
                <div class="with">
                    <label for="number">Confirm OTP :  </label>
                    <input type="number" class="form-control-w-500" id="number" aria-describedby="emailHelp" placeholder="Enter OTP..." />
                    <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Login;
