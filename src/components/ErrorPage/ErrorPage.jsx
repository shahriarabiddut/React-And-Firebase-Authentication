import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    
  return (
    <>
        {/* <Navbar/> */}
    <div className='w-11/12 md:w-10/12 mx-auto'>
        <div className="flex flex-col items-center justify-center h-screen bg-base-200 rounded-3xl text-base-content">
        <h1 className="text-9xl font-bold text-primary mb-8">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">
            Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
            Home
        </Link>
        </div>
    </div>
        {/* <Footer/> */}
        </>
  );
};

export default ErrorPage;
