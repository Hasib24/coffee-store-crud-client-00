import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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

    

    //observe user auth state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
         //stop observing while unmounting
        return unsubscribe
    }, [])


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