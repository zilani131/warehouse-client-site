import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsCard = () => {
  // const [reload,setReload]=useState(true)
  const { id } = useParams();
  
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((datum) => setDetail(datum));
  }, []);
  const { name, description, supplierName, price, quantity, img, _id } = detail;

  const handleDeliver = () => {
    const url = `http://localhost:5000/inventory/${id}`;
    // console.log(url);
    window.location.reload(true);
    let newQuantity = quantity - 1;

    let newItem = { newQuantity };
    // console.log(newItem);

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then(res => res.json())
      .then(data => console.log(data));
    //   setReload(!reload)
    //   console.log(reload)
  };
  const handleRestock=e=>{
    e.preventDefault();
    const url = `http://localhost:5000/inventory/${id}`;
    console.log(parseInt(e.target.number.value))
     if(parseInt(e.target.number.value)<=0){
       
       alert("number must be greater than 0")
       return;
     }
   let newQuantity=parseInt(e.target.number.value) +quantity
    let updatedQuantity={newQuantity}
    fetch(url,{
      method:'PUT',
      headers:{
          'Content-Type':'application/json',
      },
      body:JSON.stringify(updatedQuantity)
  })
  .then(res=>res.json())
  .then(data=>{console.log(data)
  e.target.reset()
 
  })
  
  window.location.reload(true);
  }
  // console.log(quantity);
  return (
    <div>
      <div>
        <img style={{ width: "100px" }} src={img} alt="" />
      </div>
      <h1>
        Model:{name} id:{_id}
      </h1>
      <h3>{description}</h3>
      <h4>Manufacturer:{supplierName}</h4>
      <h4>Price:{price}</h4>
      <h4>Quantity: {quantity}</h4>
      <button onClick={handleDeliver}>Delivered</button>
      <form onSubmit={handleRestock} >
        <input type="number" name="number" id="" />
        <br />
        <input type="submit" value="restock" />
      </form>
      <Link to={"/manageInventory"}><button>Manage inventory</button></Link>
    </div>
  );
};

export default DetailsCard;
