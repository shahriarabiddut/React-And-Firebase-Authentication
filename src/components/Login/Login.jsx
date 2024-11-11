import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.init';

export default function Login() {
    const [user,setUser ] = useState(null);
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();
    const handleSignIn = ()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch((error)=>{
            console.log(error);
            setUser(null);
        })
    }
    const handleSignIn2 = ()=>{
        signInWithPopup(auth,provider2)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch((error)=>{
            console.log(error);
            setUser(null);
        })
    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            console.log('Signed Out!');
            setUser(null);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className='min-h-screen mx-auto'>
        {
            user ?
            <div className='flex border border-blue-500 p-3 gap-3 m-3 justify-start'>
                <div className="col"><img src={user.photoURL} className='' alt="" /></div>
                <div className="grid gap-3 py-1">
                    <h4> {user.displayName} [{user.email}]</h4>
                    <button className='btn btn-warning p-3' onClick={handleSignOut}>Sign Out</button>
                </div>
                
                
            </div> 
        :
            <div className="flex justify-center gap-4">
                <button className='btn btn-success' onClick={handleSignIn}>Sign with Google</button>
                <button className='btn btn-info' onClick={handleSignIn2}>Sign with Github</button>
            </div>
        }
        </div>
  )
}
