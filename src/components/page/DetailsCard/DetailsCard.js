import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const DetailsCard = () => {
  // const [reload,setReload]=useState(true)
  const { id } = useParams();
  const [update,setUpdate]=useState(100)
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((datum) => setDetail(datum));
  }, [update]);
  const { name, description, supplierName, price, quantity, img, _id } = detail;

  const handleDeliver = () => {
   
   
    const url = `http://localhost:5000/inventory/${id}`;
    // console.log(url);
    // window.location.reload(false);
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
      .then(data => {
        let number=update+1;
        setUpdate(number)
        console.log(update)
        console.log(data)});
  
    //   setReload(!reload)
    //   console.log(reload)
  };
  const handleRestock=e=>{
    e.preventDefault();
    const url = `http://localhost:5000/inventory/${id}`;

     if(parseInt(e.target.number.value)<=0){
       
       alert("number must be greater than 0")
       e.target.reset()
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
    let number=update+1;
    setUpdate(number)
    console.log(update)
  e.target.reset()
 
  })
  

  }
  // console.log(quantity);
  return (
    <div className="d-flex align-items-center justify-content-evenly" style={{paddingTop:"100px"}}>
      <div class="cardParent w-25">
          
          <div ><Card.Img variant="top" src={img} /></div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{quantity}</Card.Text>
            {/* navigate handle */}
            <span className="buttonStyle h-auto my-4 "><Button className="px-5 " variant="outline-dark" onClick={handleDeliver}>Delivered</Button></span>
          </Card.Body>
      
        </div>
      
      <form  className="formWidth w-25  border cardParent py-5 px-4 my-5 d-flex flex-column align-items-center  " onSubmit={handleRestock} >
        
        <input  className="inputFieldStyle" type="number" name="number" id="" required/>
        <div >
        <span className="buttonStyle h-auto my-4 mx-3 ">
          <Button type="submit" className="px-5 " variant="outline-dark">
            Restock
          </Button>
        </span>
        <Link  to={"/manageInventory"}><span className="buttonStyle"><Button variant="outline-dark">Manage inventory</Button></span></Link>
        </div>
      </form>
      
    </div>
  );
};

export default DetailsCard;
