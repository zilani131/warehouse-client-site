import React, { useRef, useState } from "react";
import {  useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {useNavigate,useLocation, Link} from "react-router-dom"
import {  Button } from "react-bootstrap";
import { ToastContainer,toast } from "react-toastify";
import SpinnerLoad from "../../Shared/SpinnerLoad";
const Registration = () => {
        
          const navigate = useNavigate();
          const [error, setError] = useState("");
          // const [agree, setAgree] = useState(false);
          const emailRef = useRef("");
          const passwordRef = useRef("");
          const confirmPwRef = useRef("");
          const nameRef = useRef("");
          //    sign in with google
          const [signInWithGoogle,loading1] = useSignInWithGoogle(auth);
          const [updateProfile,loading2] = useUpdateProfile(auth);
          //   create user and email verification
          const [createUserWithEmailAndPassword, user, loading] =
            useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

          if (loading || loading1 || loading2) {
            return <SpinnerLoad></SpinnerLoad>;
          }
          const handleRegistration = async (e) => {
            e.preventDefault();
            const name = nameRef.current.value;
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            const confirmPw = confirmPwRef.current.value;
        
            if (password.length < 6) {
              setError("Password must have 6 character or more");
              return;
            }
            if (password !== confirmPw) {
              setError("Password don't match");
              return;
            }
        
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            // When sign up navigate the page to home page
          
            navigate("/home");
          };
          console.log(user);
        
         
         
        return (
          <div>
            <h1>welcome to Signup</h1>
            <div className="border  rounded-3xl border-gray-700 w-fit mx-auto py-3 px-3 bg-neutral-200 drop-shadow-xl">
            <form className="formWidth mx-auto border cardParent py-5 px-4 my-5 d-flex flex-column align-items-center  " onSubmit={handleRegistration} >
              <h1 className="text-2xl font-semibold my-3">Sign up</h1>
              <input
               ref={nameRef}
                className="inputFieldStyle"
                type="text"
                name="name"
                id=""
                placeholder="Name"
              />
        
              <input
              ref={emailRef}
                className="inputFieldStyle"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
        
              <input
              ref={passwordRef}
                className="inputFieldStyle"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
      
              <input
              ref={confirmPwRef}
                className="inputFieldStyle"
                type="password"
                name="confirmPw"
                id=""
                placeholder="Confirm password"
              />
               
              <span className="buttonStyle h-auto my-5 ">
          <Button type="submit" className="px-5 " variant="outline-dark">
            sign up
          </Button>
          {error && alert(error)}
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
            <img style={{width:"30px", height:"30px"}} src="https://i.ibb.co/h9c4Fyb/google.webp" alt="" /> Sign up with Google
          </Button>{" "}
        </span>
        <div className="d-flex align-items-center mb-1">
          <p className="fs-6 fw-bold m-0">All ready have an account ?</p>
          <Link to="/login">
            <Button className="fs-6 fw-bold d-block"
            variant="link"
          >Log in</Button>
          </Link>
        </div>
            </form>
           <ToastContainer/>
            
            </div>
          
          </div>
        );
      };

export default Registration;