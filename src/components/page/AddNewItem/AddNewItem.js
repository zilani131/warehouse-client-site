import React from "react";

const AddNewItem = () => {
  const handleAdding = (e) => {
    e.preventDefault();
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
    };
    console.log(newItem);
    const url=`http://localhost:5000/home`
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
  };
  return (
    <div>
      <form onSubmit={handleAdding}>
        <input type="text" name="name" id="" placeholder="product name" />
        <br />
        <textarea
          type="text"
          name="description"
          id=""
          placeholder="Description"
        />
        <br />
        <input type="text" name="img" placeholder="img url" />
        <br />
        <input
          type="text"
          name="supplierName"
          id=""
          placeholder="supplierName"
        />
        <br />
        <input type="text" name="type" placeholder="vehicle type" />
        <br />
        <input type="number" name="price" id="" placeholder="price" />
        <br />
        <input type="number" name="quantity" id="" placeholder="quantity" />
        <br />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default AddNewItem;
