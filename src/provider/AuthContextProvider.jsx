import React, { createContext } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)


const AuthContextProvider = ({children}) => {

    const authInfo = {
        user: "hasib"
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;