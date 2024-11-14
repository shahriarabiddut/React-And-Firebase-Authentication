import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

export default function Header() {
  const authInfo = useContext(AuthContext);
  const {name,user,signOutUser} = authInfo;
  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
        console.log('Signed Out!');
    })
    .catch((error)=>{console.log(error);})
    }
  const links = <> <li><NavLink to="/">Home</NavLink></li>
            {(name=='guest') ?
            <div className='flex'><li><NavLink to="/profile">Login</NavLink></li>  
              <li><NavLink to="/register">Register</NavLink></li> 
              <li><NavLink to="/signup">Sign UP</NavLink></li> </div>
            : 
            <div className='flex gap-3'>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li> 
              <li><NavLink to="/profile">{user?.displayName}</NavLink></li>
              <span className='flex items-center text-white font-bold text-xl rounded-2xl cursor-pointer bg-orange-600  px-3'  onClick={handleSignOut}>Sign Out</span>
            </div>
            }
            
             </>
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ReactFirebase</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
</div>
    </div>
  )
}
