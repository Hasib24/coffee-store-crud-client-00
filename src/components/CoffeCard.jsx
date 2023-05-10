import React from 'react';

const CoffeCard = ({coffee}) => {
    
    return (
        <div className='border p-10'>
            <div className='flex justify-between px-5'>
                <h1>Name : {coffee.name}</h1>
                <h1>Chef : {coffee.chef}</h1>
            </div>
            <div className='flex justify-between px-5'>
                <h1>Suplier : {coffee.suplier}</h1>
                <h1>Test : {coffee.test}</h1>
            </div>
            <div className="btn-group btn-group-horizontal">
                <button className="btn mx-1">Button</button>
                <button className="btn mx-1">Edit</button>
                <button className="btn mx-1">Delete</button>
            </div>
        </div>
    );
};

export default CoffeCard;