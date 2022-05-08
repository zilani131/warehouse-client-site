import React from 'react';

const Vehicle = (props) => {
 const {name,img,description}=props.Transport;
    return (
        <div>
            {name}
        </div>
    );
};

export default Vehicle;