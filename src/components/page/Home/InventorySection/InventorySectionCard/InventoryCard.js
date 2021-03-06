import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './InventoryCard.css'
const InventoryCard = (props) => {
    
    console.log(props)
    const {name,img,_id,description,supplierName,price,quantity,type}=props.item;
    return (
        <Col>
        <div className="cardParent">
          
          <div ><Card.Img className='py-3' style={{maxWidth:"150px"}} variant="top" src={img} /></div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className='text-start fw-bold'>{description}</Card.Text>
            <Card.Text className='text-start fw-bold'>Price:{price}k</Card.Text>
            <Card.Text className='text-start fw-bold'>Quantity:{quantity}</Card.Text>
            <Card.Text className='text-start fw-bold'>Manufacturer:{supplierName}</Card.Text>
            {/* navigate handle */}
            <Link to={`/inventory/${_id}`}><span className='buttonStyle my-4'><Button  variant="outline-dark">
             Update
            </Button></span></Link>
          </Card.Body>
      
        </div>
      </Col>
        // <Link to={`/inventory/${_id}`}><button>Update</button></Link> 
    );
};

export default InventoryCard;