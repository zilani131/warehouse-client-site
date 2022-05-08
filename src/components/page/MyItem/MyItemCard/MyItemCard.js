import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyItemCard = ({product,handleDlt}) => {
//   passing the handleDlt as props to dlt single item 
    
    const {name,img,_id,description,supplierName,price,quantity,type}=product;
    
    
    return (
        <Col>
        <div class="cardParent">
          
          <div ><Card.Img variant="top" src={img} /></div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {/* navigate handle */}
            <span className="tableButton"><Button variant="outline-dark"  onClick={() => handleDlt(_id)}>Delete</Button>{" "}</span>
          </Card.Body>
      
        </div>
      </Col>
    );
};

export default MyItemCard;