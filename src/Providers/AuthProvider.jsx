// import React from 'react';
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser)
            // console.log('object', currentUser);
            setLoading(false)
            // token
            if (currentUser) {
                axios.post('https://assignment-eleven-server-beta.vercel.app/jwt', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('token response', res.data)
                    })
            }
            else {
                axios.post('https://assignment-eleven-server-beta.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                })
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, loading, createUser, signInUser, logOut, signInWithGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}