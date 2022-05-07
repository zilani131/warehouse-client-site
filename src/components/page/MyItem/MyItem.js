import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItemCard from './MyItemCard/MyItemCard';

const MyItem = () => {
    const [user]=useAuthState(auth);
    const email=user?.email
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myitem?email=${email}`)
        .then(res=>res.json())
        .then(data=>{setProducts(data)
            
        })
    },[])
    // passing the handleDlt as props to dlt one item
    const handleDlt=id=>{
        // sending a warning message to confirm delete
        const proceed=window.confirm("wants to delete item");
        if(proceed)
        {
            console.log(id)
            const url=`http://localhost:5000/home/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>
                {
                console.log(data)
            if(data.deletedCount>0)
                console.log(data)
                const remaining=products.filter(user=>user._id!==id);
                console.log(remaining)
                setProducts(remaining);
                 } )
            }
    }
    console.log(products)
    return (
        <div>
            {products.length===0?<h1>Your have not select any item</h1>:''}
            <div>
            {products.map(product=><MyItemCard handleDlt={handleDlt} key={product._id} product={product}></MyItemCard>)}
            </div>
        </div>
    );
};

export default MyItem;