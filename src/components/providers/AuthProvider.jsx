import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/mainfirebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    let [name,setName] = useState('guest');
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // Create Account using email and password
    const createUser = (email,password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // Login Account using email and password
    const signInUser = (email,password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password);
    }
     // Log-Out from Account 
     const signOutUser = () => {
        setLoading(false);
        signOut(auth)
        setUser(null);
        setName('guest');
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setName('logged');
                // console.log(currentUser,name,' user Logged In!');
            } else{
                setUser(null);setName('guest');
                console.log('No user Logged In!');
            }
          });
          setLoading(false);
        //   Component Unmount
        return () => {
            unSubscribe();
        }
    },[]);
    

    // const authInfo = {
    //     name : 'guest',
    // }
    // Useful Way to declare object
    // console.log(user,name,' user Logged In!');
    const authInfo = {
        name, createUser, signInUser, user,setUser,signOutUser,loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {/* The Page Wrapped between AuthProvider Shows inside Context as children */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// 1. Create Context null as default
// 2. Create Provider
// 3. Set a Default value like authInfo and send as value in myNew.Prvoder fragment
// 4. Router was Wrapped between AuthProvider and Here recieved as children!
// 5. Export theCreatedContext and Import where you want to use
//  use const varName = useContext(theCreatedContext); in that page ,
// Use related datas or functions and create,read,update or delete!
