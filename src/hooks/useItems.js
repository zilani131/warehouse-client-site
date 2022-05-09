import React, { useEffect, useState } from 'react';

const useItems = () => {
    const url=`https://warm-plains-66387.herokuapp.com/`
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    return items;
};

export default useItems;