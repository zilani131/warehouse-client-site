import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SpinnerLoad from '../../Shared/SpinnerLoad';
import Banner from './Banner/Banner';
import GreenCar from './GreenCar/GreenCar';

import InventorySection from './InventorySection/InventorySection';
import TypesOfVehicle from './TypesOfVehicle/TypesOfVehicle';

const Home = () => {
    const [user, loading] = useAuthState(auth);
    if(loading){
      return <SpinnerLoad></SpinnerLoad>
    }
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