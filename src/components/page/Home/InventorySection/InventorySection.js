import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import InventoryCard from "./InventorySectionCard/InventoryCard";

const InventorySection = () => {
  const url = `https://warm-plains-66387.herokuapp.com/home`;
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);
  return (
    <div>
      <h4 className="text-decoration-underline py-1">Trending Vehicles</h4>
      <Row className="g-5 row-cols-1 row-cols-md-3 mx-auto w-75 my-5 ">
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
