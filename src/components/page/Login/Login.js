import React, { useRef } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const [user] = useAuthState(auth);

  let from = location?.state?.from?.pathname || "/";
  // sign in with email and password
  const [signInWithEmailAndPassword, loading, error] =useSignInWithEmailAndPassword(auth);
    //   password reset email
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
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
      return <p>Loading...</p>;
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
    <div>
      <h1>welcome to login</h1>
      <form onSubmit={handleLogIn}>
        <input ref={emailRef} type="email" name="email" id="" placeholder="Email" />
        <br />
        <input ref={passwordRef} type="password" name="password" id="" placeholder="Password" />
        <br />
        {/* conditional rendering to show the error */}
        {showError && (
          <div className="text-center text-danger my-3 fw-bold">
            {showError[1]}
          </div>
        )}
        <input type="submit" value="Login" />
      </form>
      <Link to="/registration">
        <button>Registration</button>
      </Link>
      <button onClick={resetPassword}>Forget Password</button>
      <button onChange={() => signInWithGoogle()}>Login with Google</button>
      
    </div>
  );
};

export default Login;
