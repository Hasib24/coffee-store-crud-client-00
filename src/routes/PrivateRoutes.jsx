import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
    const {user, loader} = useContext(AuthContext)
    if(loader){
        return <div>loading...</div>
    }
    if(user){
        return children
    }
    return <Navigate to={'/signin'}></Navigate>
};

export default PrivateRoutes;