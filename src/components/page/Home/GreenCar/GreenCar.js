import React from 'react';
import './GreenCar.css'
const GreenCar = () => {
    return (
        <div className='greenCarBody'>
            <h1 className='text-decoration-underline fs-5 fw-bold mt-5 text-white'>Check Our latest Electric Car</h1>
            <div className='greenCarContainer'>
                <div className='greenCarChild'>
                    <img style={{width:"90%"}} src="https://i.ibb.co/tP5cGF8/tesla-model-3.png" alt="" />
                   
                </div>
                <div  className='greenCarChild'>
                    <h4 className='text-center text-decoration-underline text-white'>Tesla Model 3</h4>
                    <p className='text-start text-white text-wrap w-full'>The Model 3 merits consideration as a compact luxury sedan and electric car. Although a sparse interior layout won't appeal to everyone ,solid dynamics and range make it a great choice  </p>
                </div>
            </div>
        </div>
    );
};

export default GreenCar;