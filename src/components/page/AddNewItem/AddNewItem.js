
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import './AddNewItem.css'
const AddNewItem = () => {
    const [user]=useAuthState(auth)
  const handleAdding = (e) => {
    e.preventDefault();
    const email=user?.email;
    const name = e.target.name.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const supplierName = e.target.supplierName.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const newItem = {
      name,
      description,
      img,
      supplierName,
      type,
      price,
      quantity,
      email
    };
    console.log(newItem);
    const url=`https://warm-plains-66387.herokuapp.com/home`
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
      e.target.reset();
  };
  return (
    <div style={{paddingTop:"100px"}}>
         
      <form className="formWidth mx-auto border cardParent py-5 px-4 my-5 d-flex flex-column align-items-center  " onSubmit={handleAdding}>
      <h4 className="mb-3">Add New Item</h4>
        <input className="inputFieldStyle" type="text" name="name" id="" placeholder="product name" required />
    
        <textarea className="inputFieldStyle"
          type="text"
          name="description"
          id=""
          placeholder="Description"
          required
        />
        
        <input className="inputFieldStyle" type="text" name="img" placeholder="img url" required/>
   
        <input className="inputFieldStyle"
          type="text"
          name="supplierName"
          id=""
          placeholder="supplierName"
          required
        />
        
        <input className="inputFieldStyle" type="text" name="type" placeholder="vehicle type" required/>
     
        <input className="inputFieldStyle" type="number" name="price" id="" placeholder="price" required/>
     
        <input className="inputFieldStyle"  type="number" name="quantity" id="" placeholder="quantity" required />
        
        <span className="buttonStyle my-5"><Button type="submit" className="px-5"  variant="outline-dark">Add</Button></span>
      </form>
    </div>
  );
};

export default AddNewItem;
