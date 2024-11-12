import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase/mainfirebase.init';

export default function Register() {
    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email,password);
        // Create user using email and password
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(email,password,'Signed Up');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
          });
    }
  return (
    <div className='min-h-screen mx-auto'>
        <h3 className='text-center text-5xl font-bold'>Register</h3>
        <div className="w-2/3 mx-auto">
            <form className="card-body" onSubmit={handleRegister}>
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
  )
}
