import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Vehicle.css'
const Vehicle = ({Transport}) => {
    const {type,img,description}=Transport;

    return (
        <Col>
        <div style={{height:"100%"}} className="vehicleCardStyle py-4" >
          
          <div ><Card.Img style={{width:"60%"}} variant="top" src={img} /></div>
          <Card.Body>
            <Card.Title className='text-white'>{type}</Card.Title>
            <Card.Text className='text-white'>{description}</Card.Text>
            {/* navigate handle */}
            <span className="tableButton"><Button variant="outline-light"  >See more</Button>{" "}</span>
          </Card.Body>
      
        </div>
      </Col>
    );
};

export default Vehicle;