import React from 'react';

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
        </div>
    );
};

export default InventoryCard;