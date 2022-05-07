import React from "react";
import {  useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {useNavigate,useLocation, Link} from "react-router-dom"
const Registration = () => {
        // let location = useLocation();
        // let from = location?.state?.from?.pathname || "/";
        let navigate = useNavigate();
        const [user]=useAuthState(auth)
        const [updateProfile] = useUpdateProfile(auth);
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
            <form onSubmit={handleSubmit} >
              <h1 className="text-2xl font-semibold my-3">Sign up</h1>
              <input
                className="border border-2 border-gray-900 px-2 py-1 my-2 rounded-md"
                type="text"
                name="name"
                id=""
                placeholder="Name"
              />
              <br />
              <input
                className="border border-2 border-gray-900 px-2 py-1 my-2 rounded-md"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
              <br />
              <input
                className="border border-2 border-gray-900 px-2 py-1 my-2 rounded-md"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
              <br />
              <input
                className="border border-2 border-gray-900 px-2 py-1 my-2 rounded-md"
                type="password"
                name="confirmPw"
                id=""
                placeholder="Confirm password"
              />
              <br />
              <input
                className="border border-2 bg-slate-600 text-white border-gray-900 px-2 py-1 my-2 hover:rounded-md"
                type="submit"
                value="Sign Up"
              />
              <div className="flex items-center justify-center">
                <div className="w-5/12 h-1  bg-black border  border-black rounded-xl"></div>
                <h1 className="text-lg px-2">or</h1>
                <div className="w-5/12  h-1 bg-black border  border-black rounded-xl"></div>
              </div>
              
            </form>
            <button onClick={()=>signInWithGoogle()} className="border border-2 bg-slate-600 text-white border-gray-900 px-2 py-1 my-2 hover:rounded-md">Sign with Google</button>
            
            </div>
          
          </div>
        );
      };

export default Registration;