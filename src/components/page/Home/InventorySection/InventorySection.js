import React, { useEffect, useState } from 'react';

import InventoryCard from './InventorySectionCard/InventoryCard';

const InventorySection = () => {
    const url=`http://localhost:5000/`
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

    console.log(items)
    return (
        <div>
            {items.map(item => <InventoryCard key={item._id} item={item}></InventoryCard>)}
        </div>
    );
};

export default InventorySection;