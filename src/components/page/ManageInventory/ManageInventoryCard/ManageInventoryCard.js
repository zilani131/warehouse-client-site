import React from "react";
import { Button } from "react-bootstrap";

const ManageInventoryCard = ({ item, handleDlt }) => {
  //   passing the handleDlt as props to dlt single item

  const { name, img, _id, description, supplierName, price, quantity, type } =
    item;

  return (
    <tr>
  
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}k</td>
      <td>{supplierName}</td>
      <td><img style={{maxWidth:"70px"}} src={img} alt="" /></td>
      <td>
        <span className="buttonStyle"><Button variant="outline-dark"  onClick={() => handleDlt(_id)}>Delete</Button>{" "}</span>
      </td>
    </tr>
   
  );
};

export default ManageInventoryCard;
