import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase/mainfirebase.init';
import { AuthContext } from '../providers/AuthProvider';

// Sign IN Using Context ApI
export default function Login() {
    const [error,setError] = useState([]);
    const [success,setSuccess] = useState(false);
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();
    const {signInUser,user,setUser,signOutUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignIn = ()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            setUser(result.user);
        })
        .catch((error)=>{
            setUser(null);
        })
    }
    const handleSignIn2 = ()=>{
        signInWithPopup(auth,provider2)
        .then((result)=>{
            setUser(result.user);
        })
        .catch((error)=>{
            setUser(null);
        })
    }
    const handleLogin = (e)=>{
        e.preventDefault();
        setError([]);
        setSuccess(false);
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        e.target.reset();
        signInUser(email,password)
        .then((result) => {
            if(1 || result.user.emailVerified){
                // setSuccess(true);
                setUser(result.user);
                navigate('/dashboard')
                // setTimeout(setUser(result.user),2000); -> Calls Immediately
            }else{
                setError(['Email Not Verified!']);
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError([errorMessage]);
            setSuccess(false);
        });
    }
    useEffect(()=>{
        if(user){
            navigate('/dashboard')
        }
    },[]);
  return (
    <div className='min-h-screen mx-auto'>
        {
            !user &&
        <>
            <div className="flex justify-center gap-4 my-4">
                <button className='btn btn-success' onClick={handleSignIn}>Sign with Google</button>
                <button className='btn btn-info' onClick={handleSignIn2}>Sign with Github</button>
            </div>
            <hr />
            <div className="w-2/3 mx-auto my-4">

                    <h3 className='text-center text-5xl font-bold'>Login With Email</h3>
                <div className="mx-auto">
                {
                    error && error.length > 0 && (<div className='bg-red-500 text-center rounded-xl p-3 mt-5 grid gap-1 text-white'>
                    { error.map((e,i) => <p key={i}>{e}</p>)}
                    </div>)
                }
                {
                    success && <div className='bg-green-500 text-center rounded-xl p-3 mt-5 text-white'>Successfully Signed In!</div>
                }
                    <form className="card-body shadow-lg rounded-lg" onSubmit={handleLogin}>
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
                        <div className="form-control my-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control flex flex-row gap-3">
                        <label className="label">
                            <span className="label-text">New to this website? <NavLink className='text-blue-600 font-bold hover:text-purple-800' to='/signup'>Create an Account</NavLink> </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Forgot Password? <NavLink className='text-purple-600 font-bold hover:text-blue-800' to='/changePassword'>Change Password</NavLink> </span>
                        </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
        }
        </div>
  )
}
