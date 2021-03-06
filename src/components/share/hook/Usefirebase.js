import React, { useEffect, useState } from 'react';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../../../firebase/Firebase.init';

initializeAuthentication();


const Usefirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    //  signInWithRedirect(auth, provider);
    const GoogleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user);
            })
            .finally(() => setIsLoading(false))

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    return {
        user,
        isLoading,
        logOut,
        GoogleSignIn
    }

};

export default Usefirebase;