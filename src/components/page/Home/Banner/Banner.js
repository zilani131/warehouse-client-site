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
            src="https://i.ibb.co/mD5YLgx/honda-cb150r.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Don’t limit your challenges. Challenge your limits</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 h-25"
            src="https://i.ibb.co/mD5YLgx/honda-cb150r.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The body achieves what the mind believes.</h3>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{maxHeight:"700px"}}
            className="d-block w-100 h-25"
            src="https://i.ibb.co/mD5YLgx/honda-cb150r.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Good things come to those who sweat.</h3>
       
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    );
};

export default Banner;