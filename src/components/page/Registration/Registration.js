import React from "react";
import {  useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {useNavigate,useLocation, Link} from "react-router-dom"
import { Button } from "react-bootstrap";
const Registration = () => {
        // let location = useLocation();
        // let from = location?.state?.from?.pathname || "/";
        let navigate = useNavigate();
        const [user]=useAuthState(auth)
        const [updateProfile] = useUpdateProfile(auth);
        const [sendEmailVerification] = useSendEmailVerification(auth);
          const [
              createUserWithEmailAndPassword
          
            ] = useCreateUserWithEmailAndPassword(auth);
            const [signInWithGoogle] = useSignInWithGoogle(auth);
          const handleSubmit= async (event)=>{
              event.preventDefault();
              const name=event.target.name.value;
              const email=event.target.email.value;
              const pw=event.target.password.value;
              const cPw=event.target.confirmPw.value;
              if(pw.length<6)
              {alert('Please enter at least 6 digit password')
                  return;
              }
              if(pw!==cPw){
                alert('Password does not match');
                return;
              }
              
              await createUserWithEmailAndPassword(email,pw)
              // must be update profile after create user 
              await updateProfile({displayName:name})
              await sendEmailVerification()
              // if(user){
              //   navigate(from, { replace: true });
              // }
              if(user){
                navigate('/home')
              }
            event.target.reset();
          }
         
      
         
        return (
          <div>
            <h1>welcome to Signup</h1>
            <div className="border  rounded-3xl border-gray-700 w-fit mx-auto py-3 px-3 bg-neutral-200 drop-shadow-xl">
            <form className="formWidth mx-auto border cardParent py-5 px-4 my-5 d-flex flex-column align-items-center  " onSubmit={handleSubmit} >
              <h1 className="text-2xl font-semibold my-3">Sign up</h1>
              <input
                className="inputFieldStyle"
                type="text"
                name="name"
                id=""
                placeholder="Name"
              />
        
              <input
                className="inputFieldStyle"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
        
              <input
                className="inputFieldStyle"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
      
              <input
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
            Sign up with Google
          </Button>{" "}
        </span>
            </form>
            
            
            </div>
          
          </div>
        );
      };

export default Registration;