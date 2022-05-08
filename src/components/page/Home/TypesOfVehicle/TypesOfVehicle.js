import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import Vehicle from "./Vehicle/Vehicle";

const TypesOfVehicle = () => {
//   const HandleVehicles=(type)=>{
//     const [vehicles, setVehicles] = useState([]);
//     useEffect(() => {
//       fetch(`http://localhost:5000/vehicle?type=${type}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setVehicles(data);
//         });
//     }, []);
// }

    const Transports=[
        {type:'Car',img:"https://i.ibb.co/2jcMWbR/typeCar.png",description:"The glorious Speed",id:1},
        {type:'Truck',img:"https://i.ibb.co/ZB9Td0Y/type-Truck.png",description:"High-tech Performance at Low-Tech value",id:2},
        {type:'Motorcycle',img:"https://i.ibb.co/SxNZdvS/typeBike.png",description:"King of the V-8 Motorcycles.",id:3},
        {type:'Bicycle',img:"https://i.ibb.co/H2NkN85/type-Cycle.png",description:"Freedom on two wheels",id:4},
    ]
  return (
    <div className="w-full mx-auto my-5 greenCarBody">
        <h4 className="text-decoration-underline py-1">Different types of Vehicles</h4>
         <Row className="g-5 row-cols-1 row-cols-md-2 mx-auto w-100 my-3 ">
     
        {
           Transports.map(Transport=><Vehicle key={Transport.id}  Transport={Transport}></Vehicle>)
        }
     
      </Row>
       
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
