import React from 'react';

const Service = (props) => {
    const{id,name,description,img,price,subtitle}=props.service
    return (
        <div>
           <h1>{name}</h1>
            <img src= {img}/>
            <h1>{description}</h1>
            <h1>{price}</h1>
        </div>
    );
};

export default Service;