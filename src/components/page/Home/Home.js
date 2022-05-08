import React from 'react';
import Banner from './Banner/Banner';
import InventorySection from './InventorySection/InventorySection';

const Home = () => {
    return (
        <div style={{paddingTop:"55px"}}>
            <Banner></Banner>
            <InventorySection></InventorySection>
        </div>
    );
};

export default Home;