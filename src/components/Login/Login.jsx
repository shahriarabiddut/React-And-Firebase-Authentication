import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/mainfirebase.init';

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
        <>
            <div className="flex justify-center gap-4 my-4">
                <button className='btn btn-success' onClick={handleSignIn}>Sign with Google</button>
                <button className='btn btn-info' onClick={handleSignIn2}>Sign with Github</button>
            </div>
            <hr />
            <div className="w-2/3 mx-auto my-4">

                    <h3 className='text-center text-5xl font-bold'>Login With Email</h3>
                <div className="w-2/3 mx-auto">
                    <form className="card-body" onSubmit="">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        }
        </div>
  )
}
