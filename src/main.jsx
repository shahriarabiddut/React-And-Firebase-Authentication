import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../src/components/ErrorPage/ErrorPage.jsx';
import Home from '../src/components/Home/Home.jsx';
import App from './App.jsx';
import ChangePassword from './components/ChangePassword/ChangePassword.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />
     },{
      path: "/login",
      element: <Login />
   },{
      path: "/register",
      element: <Register />
   },{
    path: "/signup",
    element: <SignUp />
    },
    {
      path: "/changePassword",
      element: <ChangePassword />
    },

    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
