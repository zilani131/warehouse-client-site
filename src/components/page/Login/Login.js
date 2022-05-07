
import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import {Link, useLocation,useNavigate} from "react-router-dom"
import auth from '../../../firebase.init';
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
  let location = useLocation();
  const [user] = useAuthState(auth);

  let from = location?.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
       
      ] = useSignInWithEmailAndPassword(auth);
      const handleLogIn=async (event)=>{
          event.preventDefault()
          const email=event.target.email.value;
          const password=event.target.password.value;
          await signInWithEmailAndPassword(email,password)
          if(user){
            navigate(from, { replace: true });
          }
           event.target.reset()

      }
    return (
        <div>
            <h1>welcome to login</h1>
            <form onSubmit={handleLogIn} >
                <input  type="email" name="email" id="" placeholder='Email'/>
                <br />
                <input  type="password" name="password" id="" placeholder='Password'/>
                <br />
                <input type="submit" value="Login" />
            </form>
            <Link to='/registration'><button>Registration</button></Link>
            <button onClick={()=>signInWithGoogle()} >Login  with Google</button>
        </div>
    );
};

export default Login;