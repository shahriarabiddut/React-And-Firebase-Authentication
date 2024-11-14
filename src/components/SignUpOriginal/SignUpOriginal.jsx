import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase/mainfirebase.init';

export default function SignUpOriginal() {
    const [error,setError] = useState([]);
    const [success,setSuccess] = useState(false);
    const [showPass,setShowPass] = useState(false);

    const handleSignUp = (event) => {
        event.preventDefault();
        setError([]);
        setSuccess(false);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;
        // console.log(email,password,terms);
        // return;
        // Password validation
        // if(password.length < 6){
        //     setError('Password should be  longer than 6 char!');
        //     return;
        // }else{
        //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?])[A-Za-z\d!@#$%^&*()_\-+=<>?]{8,}$/;
        //     if(!regex.test(password)){
        //         setError('Password doesnot met requirement!');
        //         return;
        //     }
        // }
        const pass = validatePassword(password);
        if(pass!=1){
            return;
        }
        // Check Terms
        if(!terms){
            setError(['Please Accept Terms!']);
            // setError([...error,'Please Accept Terms!']);
            return;
        }
        // Create user using email and password
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(email,password,'Signed Up');
            setSuccess(true);
            // Send verification EMail
            sendEmailVerification(auth.currentUser)
            .then(() => {
                setError(['Email verification sent!']);
            });
            // Update Profile
            const profile = {
                displayName: name, photoURL: ""
              }
            updateProfile(auth.currentUser,profile )
                .then(() => {
                    console.log('Profile updated!');
                }).catch((error) => {
                    console.log(error);
                });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            setError([errorMessage]);
            setSuccess(false);
          });
    }

    const validatePassword = (password) => {
        const minLength = 8;
        let errors = [];
        if (password.length < minLength) {
            errors.push(`Password must be at least ${minLength} characters long.`);
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Password must contain at least one lowercase letter.');
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain at least one uppercase letter.');
        }
        if (!/\d/.test(password)) {
            errors.push('Password must contain at least one digit.');
        }
        if (!/[!@#$%^&*()_\-+=<>?]/.test(password)) {
            errors.push('Password must contain at least one special character.');
        }

        if (errors.length > 0) {
             errors.join('\n');
            setError(errors);
            return 0;
        } else {
            return 1;
        }
    }
  return (
    <div className='min-h-screen mx-auto'>
        <h3 className='text-center text-5xl font-bold'>SignUp</h3>
        
        <div className="w-2/3 mx-auto">
            {
                error && error.length > 0 && (<div className='bg-red-500 text-center rounded-xl p-3 mt-5 grid gap-1 text-white'>
                   { error.map((e,i) => <p key={i}>{e}</p>)}
                </div>)
            }
            {
                success && <div className='bg-green-500 text-center rounded-xl p-3 mt-5 text-white'>Successfully Signed Up!</div>
            }
            <form className="card-body shadow-lg rounded-lg" onSubmit={handleSignUp}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type={showPass ? 'text':"password"} name='password' placeholder="password" className="input input-bordered" required />
                <button className="btn btn-xs absolute right-4 top-12" onClick={() => setShowPass(!showPass)}>
                    {showPass ? 'Hide':"Show"}
                </button>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label justify-start">
                        <input name='terms' type="checkbox" className="checkbox checkbox-info" />
                        <span className="label-text ml-2">Accept React Firebase Spell</span>
                    </label>
                </div>
                <div className="form-control my-6">
                <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Allready Have An Account? <NavLink className='text-blue-600 font-bold hover:text-purple-800' to='/login'>Sign In</NavLink> </span>
                        </label>
                </div>
            </form>
        </div>
    </div>
  )
}
