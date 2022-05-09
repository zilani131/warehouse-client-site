import React, { useRef, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { Alert, Button, Spinner } from "react-bootstrap";
import "./Login.css";
import SpinnerLoad from "../../Shared/SpinnerLoad";
const Login = () => {


let navigate = useNavigate();
let location = useLocation();
let from = location.state?.from?.pathname || "/";
const emailRef = useRef("");
const passwordRef = useRef("");
const [user1, loading2] = useAuthState(auth);
const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
const handleLogIn = async (e) => {
  e.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
 await signInWithEmailAndPassword(email, password);


};
//   password reset email
const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
// sign in with google
const [signInWithGoogle, loading1,] = useSignInWithGoogle(auth);

 
if (user1) {
  navigate(from, { replace: true });
}
let errorMessage;
if (error) {
  console.log(error);
  const x = error.message;
  const y= x.split(":");
  const z= y[1].split("/")
  const a=z[1].split(")")
  errorMessage=a[0].toUpperCase();
  console.log(errorMessage);
}
// loading spinner
if (loading || loading1 || loading2) {
  return <SpinnerLoad></SpinnerLoad>;
}
// reset password email
const resetPassword = async () => {
  if (emailRef.current.value) {
    await sendPasswordResetEmail(emailRef.current.value);
    toast("Sent email to recover password");
  } else {
    toast("Please provide email");
  }
};
  return (
    <div style={{ paddingTop: "150px" }}>
 
      <h1>welcome to login</h1>

      <form
        className="formWidth mx-auto border cardParent py-5 px-4 my-5 d-flex flex-column align-items-center  "
        onSubmit={handleLogIn}
      >
        <input
          className="inputFieldStyle"
          ref={emailRef}
          type="email"
          name="email"
          id=""
          placeholder="Email"
    
        />
        <br />
        <input
          className="inputFieldStyle"
          ref={passwordRef}
          type="password"
          name="password"
          id=""
          placeholder="Password"
    
        />
        <br />
        <div className="d-flex align-items-center mb-1">
          <p className="fs-6 fw-bold m-0">Forget Password ?</p>
          <Button
            className="fs-6 fw-bold d-block"
            variant="link"
            onClick={resetPassword}
          >
            Forget Password
          </Button>
        </div>
        <ToastContainer />
        {/* conditional rendering to show the error */}
        {errorMessage && (
     alert(errorMessage)
        )}
        <span className="buttonStyle h-auto my-4 ">
          <Button type="submit" className="px-5 " variant="outline-dark">
            Log in
          </Button>
          {/* {errorMessage? alert(errorMessage):''
      
          } */}
        </span>

        <div className="d-flex align-items-center justify-content-center my-2 w-100">
          <div style={{ height: "5px" }} className=" lineStyle"></div>
          <div className="mx-2 fw-bold">Or</div>
          <div style={{ height: "5px" }} className="lineStyle"></div>
        </div>
        <span className="buttonStyle h-auto my-4 ">
          <Button
            type="submit"
            className="px-5 "
            variant="outline-dark"
            onClick={() => signInWithGoogle()}
          >
           <img style={{width:"30px", height:"30px"}} src="https://i.ibb.co/h9c4Fyb/google.webp" alt="" /> Login with Google
          </Button>{" "}
        </span>
        <div className="d-flex align-items-center mb-1">
          <p className="fs-6 fw-bold m-0">Not yet Register ?</p>
          <Link to="/registration">
            <Button className="fs-6 fw-bold d-block"
            variant="link"
          >Registration</Button>
          </Link>
        </div>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default Login;
