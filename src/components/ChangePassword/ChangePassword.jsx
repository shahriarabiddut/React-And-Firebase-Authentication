import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import auth from '../../firebase/mainfirebase.init';

export default function ChangePassword() {
    const [error,setError] = useState([]);
    const [success,setSuccess] = useState(false);
    const emailRef = useRef();
    const handleChangePassword = (e)=>{
        e.preventDefault();
        setError([]);
        setSuccess(false);
        // console.log(emailRef.current.value);
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth,email)
        .then(() => {
            console.log('Email Sent',email);
            setSuccess(true);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setError([errorMessage]);
            setSuccess(false);
        });
    }
  return (
    <div className='min-h-screen mx-auto'>
            <div className="w-2/3 mx-auto my-4">

                    <h3 className='text-center text-5xl font-bold'>Change Password</h3>
                <div className="mx-auto">
                {
                    error && error.length > 0 && (<div className='bg-red-500 text-center rounded-xl p-3 mt-5 grid gap-1 text-white'>
                    { error.map((e,i) => <p key={i}>{e}</p>)}
                    </div>)
                }
                {
                    success && <div className='bg-green-500 text-center rounded-xl p-3 mt-5 text-white'>Successfully Change Password Email Sent!</div>
                }
                    <form className="card-body shadow-lg rounded-lg" onSubmit={handleChangePassword}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control my-6">
                        <button className="btn btn-primary">Send Change Password Email</button>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">New to this website? <NavLink className='text-blue-600 font-bold hover:text-purple-800' to='/signup'>Create an Account</NavLink> </span>
                        </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
