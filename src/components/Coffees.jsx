import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeCard from './CoffeCard'


const Coffees = () => {
    const coffees = useLoaderData();
    return (
        <div>                   
            {coffees.map(coffee =><CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>)}      
        </div>
    );
};

export default Coffees;