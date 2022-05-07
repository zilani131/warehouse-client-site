import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user]=useAuthState(auth);
    const email=user?.email
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myitem?email=${email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyItem;