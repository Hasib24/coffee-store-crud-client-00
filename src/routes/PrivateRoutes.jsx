import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to={'/signin'}></Navigate>
};

export default PrivateRoutes;