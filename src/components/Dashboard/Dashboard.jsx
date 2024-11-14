import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export default function Dashboard() {
    
  const authInfo = useContext(AuthContext);
  const {user,signOutUser} = authInfo;
  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
        console.log('Signed Out!');
    })
    .catch((error)=>{console.log(error);})
    }
  return (
    <div className='min-h-screen mx-auto'>
        <h3>Private Dashboard</h3>
        <p>Secured Page for only logged in users</p>
        <div className='flex border border-blue-500 p-3 gap-3 m-3 justify-start'>
                <div className="col"><img src={user.photoURL || 'https://lh3.googleusercontent.com/ogw/AF2bZyjYiLMMtT6dYL-GHBUPEaIJYutLyunYAAGhXnU87ghJTjD1=s32-c-mo'} className='' alt="" /></div>
                <div className="grid gap-3 py-1">
                    <h4> {user.displayName || 'N/A'} [{user.email}]</h4>
                    <button className='btn btn-warning p-3' onClick={handleSignOut}>Sign Out</button>
                </div>
                
                
            </div> 
    </div>
  )
}
