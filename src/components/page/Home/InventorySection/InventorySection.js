import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import InventoryCard from "./InventorySectionCard/InventoryCard";

const InventorySection = () => {
  const url = `http://localhost:5000/home`;
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);
  return (
    <div>
      <Row className="g-5 row-cols-1 row-cols-md-2 mx-auto w-50 my-5 ">
        {items.slice(0,6).map((item) => (
          <InventoryCard key={item._id} item={item}></InventoryCard>
        ))}
      </Row>

      <Link to={"/manageInventory"}>
        <span className="buttonStyle"><Button variant="outline-dark">Manage Items</Button></span>
      </Link>
    </div>
  );
};

export default InventorySection;
