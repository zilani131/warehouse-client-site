import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Banner = () => {
    return (
        <div>
      {/* React-Bootstrap carousel */}
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 "
            src="https://i.ibb.co/LQCNCkp/banner1.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The glorious Speed</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 "
            src="https://i.ibb.co/hYQq5BD/banner3-1-1-80.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Wheels like never before</h3>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 h-25"
            src="https://i.ibb.co/ZJ1cPFL/banner2-3-80.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Affordability at your fingertip.</h3>
       
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    );
};

export default Banner;