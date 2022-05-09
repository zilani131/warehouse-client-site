import React, { useEffect, useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import MyItemCard from "./MyItemCard/MyItemCard";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myitem?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [email]);
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
          const remaining = products.filter((user) => user._id !== id);
          console.log(remaining);
          setProducts(remaining);
        });
    }
  };
  console.log(products);
  return (
    <div style={{ paddingTop: "100px" }}>
      {products.length === 0 ? (
        <Modal.Dialog >
          <Modal.Header closeButton>
            <Modal.Title>Please add some Item</Modal.Title>
          </Modal.Header>


          <Modal.Footer>
          <Link to={"/addNewItem"}>
          <span ><Button variant="outline-dark">Add item</Button></span>
        </Link>
          </Modal.Footer>
        </Modal.Dialog>
      ) : (
        ""
      )}
      <Row className="g-5 row-cols-1 row-cols-md-2 mx-auto w-50 my-5 ">
        <div>
          {products.map((product) => (
            <MyItemCard
              handleDlt={handleDlt}
              key={product._id}
              product={product}
            ></MyItemCard>
          ))}
        </div>
      </Row>
    </div>
  );
};

export default MyItem;
