import React, { createContext, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)


const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const signInUser = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;