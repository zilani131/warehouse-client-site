import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import Vehicle from "./Vehicle/Vehicle";

const TypesOfVehicle = () => {
    const Transports=[
        {name:'Car',img:"https://i.ibb.co/hDJL4rG/Kawasaki-z125.png",description:"best truc",id:1},
        {name:'Truck',img:"https://i.ibb.co/hDJL4rG/Kawasaki-z125.png",description:"best truc",id:2},
        {name:'Motorcycle',img:"https://i.ibb.co/hDJL4rG/Kawasaki-z125.png",description:"best truc",id:3},
        {name:'Bicycle',img:"https://i.ibb.co/hDJL4rG/Kawasaki-z125.png",description:"best truc",id:4},
    ]
  return (
    <div className="w-75 mx-auto my-5">
        {
           Transports.map(Transport=><Vehicle key={Transport.id} Transport={Transport}></Vehicle>)
        }
      {/* <CardGroup className=" mb-3">
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/hDJL4rG/Kawasaki-z125.png" />
          <Card.Body>
            <Card.Title>Car</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/hDJL4rG/Kawasaki-z125.png" />
          <Card.Body>
            <Card.Title>Truck</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/hDJL4rG/Kawasaki-z125.png" />
          <Card.Body>
            <Card.Title>Motorcycle</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/hDJL4rG/Kawasaki-z125.png" />
          <Card.Body>
            <Card.Title>Bicycle</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup> */}
    </div>
  );
};

export default TypesOfVehicle;
