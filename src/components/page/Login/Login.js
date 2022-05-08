import React, { useRef } from "react";
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
import { Button, Spinner } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const [user] = useAuthState(auth);

  let from = location?.state?.from?.pathname || "/";
  // sign in with email and password
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //   password reset email
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  // email verification

  const emailRef = useRef("");
  const passwordRef = useRef("");
  let showError;
  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);

    if (error) {
      console.log(error);
      const z = error.message;
      showError = z.split(":");
      console.log(showError);
    }
    if (loading) {
      return <Spinner animation="border" role="status">
    
    </Spinner>;
    }

    if (user) {
      navigate(from, { replace: true });
    }
    event.target.reset();
  };
  // reset password email
  const resetPassword = async () => {
    if (emailRef.current.value) {
      await sendPasswordResetEmail(emailRef.current.value);
      toast("Sent email");
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
          required
        />
        <br />
        <input
          className="inputFieldStyle"
          ref={passwordRef}
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
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
        {/* conditional rendering to show the error */}
        {showError && (
          <div className="text-center text-danger my-3 fw-bold">
            {showError[1]}
          </div>
        )}
        <span className="buttonStyle h-auto my-4 ">
          <Button type="submit" className="px-5 " variant="outline-dark">
            Log in
          </Button>
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
            Login with Google
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
