import React, { useEffect, useState } from 'react';

const MyItemCard = ({product,handleDlt}) => {
//   passing the handleDlt as props to dlt single item 
    
    const {name,img,_id,description,supplierName,price,quantity,type}=product;
    
    
    return (
        <div>
            <div><img style={{width:"100px"}} src={img} alt="" /></div>
            <h1>Model:{name}</h1>
            <h3>{description}</h3>
            <h4>Manufacturer:{supplierName}</h4>
            <h4>Price:{price}</h4>
            <h4>Quantity: {quantity}</h4>
        <button onClick={()=>handleDlt(_id)}>Delete</button> 
            <br />
        </div>
    );
};

export default MyItemCard;