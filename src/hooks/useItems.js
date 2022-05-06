import React, { useEffect, useState } from 'react';

const useItems = () => {
    const url=`http://localhost:5000/`
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    return items;
};

export default useItems;