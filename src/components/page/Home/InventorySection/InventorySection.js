import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpinnerLoad from "../../../Shared/SpinnerLoad";

import InventoryCard from "./InventorySectionCard/InventoryCard";

const InventorySection = () => {
  const url = `https://warm-plains-66387.herokuapp.com/home`;
  const [load,setLoad]=useState(false)
  const [items, setItems] = useState([]);
  useEffect(() => {
    setLoad(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {setItems(data)
      setLoad(false)
      });

  }, []);

  console.log(items);
  return (
    <div>
      {load&&<SpinnerLoad></SpinnerLoad>}
      <h4 className="text-decoration-underline py-1">Trending Vehicles</h4>
      <Row className="g-5 row-cols-1 row-cols-md-3 mx-auto w-75 my-5 ">
        {items.slice(0,6).map((item) => (
          <InventoryCard key={item._id} item={item}></InventoryCard>
        ))}
      </Row>

      <Link to={"/manageInventory"}>
        <span className="buttonStyle"><Button className="text-decoration-underline" variant="outline-dark">Manage Vehicles</Button></span>
      </Link>
    </div>
  );
};

export default InventorySection;
