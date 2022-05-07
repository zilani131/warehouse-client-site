import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryCard = (props) => {
    
    console.log(props)
    const {name,img,_id,description,supplierName,price,quantity,type}=props.item;
    return (
        <div>
            <div><img style={{width:"100px"}} src={img} alt="" /></div>
            <h1>Model:{name}</h1>
            <h3>{description}</h3>
            <h4>Manufacturer:{supplierName}</h4>
            <h4>Price:{price}</h4>
            <h4>Quantity: {quantity}</h4>
           <Link to={`/inventory/${_id}`}><button>Update</button></Link> 
            <br />
        </div>
    );
};

export default InventoryCard;