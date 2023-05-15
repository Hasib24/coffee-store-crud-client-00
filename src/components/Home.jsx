import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContextProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className="flex justify-center items-center bg-[url(https://i.ibb.co/TwJwWsv/3.png)] bg-center bg-cover h-[85vh] ">
            <h1 className='text-6xl font-bold '>Coffee House</h1>
        </div>
    );
};

export default Home;