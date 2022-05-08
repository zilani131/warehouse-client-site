import React from 'react';
import Banner from './Banner/Banner';
import InventorySection from './InventorySection/InventorySection';
import TypesOfVehicle from './TypesOfVehicle/TypesOfVehicle';

const Home = () => {
    return (
        <div style={{paddingTop:"55px"}}>
            <Banner></Banner>
            <TypesOfVehicle></TypesOfVehicle>
            <InventorySection></InventorySection>
        </div>
    );
};

export default Home;