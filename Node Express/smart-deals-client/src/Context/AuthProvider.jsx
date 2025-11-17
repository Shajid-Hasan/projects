import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [ loading, setLoading] = useState()

    const updateProfileFunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }

    const createUserWithEmailAndPasswordFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmailFunc = () => {
        return signInWithPopup(auth, provider)
    }

    const signOutFunc = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailFunc,
        signOutFunc,
        updateProfileFunc,
        loading,
        setLoading

    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe
        };
    }, []);

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;