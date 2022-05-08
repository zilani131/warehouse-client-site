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
            src="https://i.ibb.co/G95ZxKk/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The glorious Speed</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 h-25"
            src="https://i.ibb.co/0hqz2ZV/banner3.jpg"
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
            src="https://i.ibb.co/3v8DYSq/banner2.jpg"
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