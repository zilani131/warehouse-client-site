import React from 'react';
import Banner from './Banner/Banner';
import GreenCar from './GreenCar/GreenCar';

import InventorySection from './InventorySection/InventorySection';
import TypesOfVehicle from './TypesOfVehicle/TypesOfVehicle';

const Home = () => {
    return (
        <div style={{paddingTop:"55px"}}>
            <Banner></Banner>
            <TypesOfVehicle></TypesOfVehicle>
            <InventorySection></InventorySection>
          <GreenCar></GreenCar>
        </div>
    );
};

export default Home;