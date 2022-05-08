import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import InventoryCard from "../Home/InventorySection/InventorySectionCard/InventoryCard";
import ManageInventoryCard from "./ManageInventoryCard/ManageInventoryCard";

const ManageInventory = () => {
  const url = `http://localhost:5000/home`;
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // passing the handleDlt as props to dlt one item
  const handleDlt = (id) => {
    // sending a warning message to confirm delete
    const proceed = window.confirm("wants to delete item");
    if (proceed) {
      console.log(id);
      const url = `http://localhost:5000/home/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) console.log(data);
          const remaining = items.filter((user) => user._id !== id);
          console.log(remaining);
          setItems(remaining);
        });
    }
  };
  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>MangeInventory</h1>
      <Table striped bordered hover className="w-75 mx-auto">
        <thead>
          <tr>
            <th>Model name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Supplier Name</th>
            <th>Product Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{items.map((item) => (
          <ManageInventoryCard
            handleDlt={handleDlt}
            key={item._id}
            item={item}
          ></ManageInventoryCard>
        ))}</tbody>
        
        <Link to={"/addNewItem"}>
          <button>Add new item</button>
        </Link>
      </Table>
    </div>
  );
};

export default ManageInventory;
