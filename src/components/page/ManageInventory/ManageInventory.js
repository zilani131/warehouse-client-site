import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryCard from '../Home/InventorySection/InventorySectionCard/InventoryCard';

const ManageInventory = () => {
    const url=`http://localhost:5000/home`
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <h1>MangeInventory</h1>
           {items.map(item => <InventoryCard key={item._id} item={item}></InventoryCard>)}
           <Link to={'/addNewItem'}><button>Add new item</button></Link>
            
        </div>
    );
};

export default ManageInventory;