import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContextProvider';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    
    const {user, loader} = useContext(AuthContext)
    if(loader){
        return <div>loading...</div>
    }
    if(user){
        return children
    }
    return <Navigate to={'/signin'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;