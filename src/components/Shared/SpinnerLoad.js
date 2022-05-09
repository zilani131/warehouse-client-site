import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerLoad = () => {
    return (
        <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center w-100'>
            <Spinner  animation="grow" size='lg' />
        </div>
    );
};

export default SpinnerLoad;