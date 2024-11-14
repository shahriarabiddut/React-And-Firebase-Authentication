import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../src/components/ErrorPage/ErrorPage.jsx';
import Home from '../src/components/Home/Home.jsx';
import App from './App.jsx';
import ChangePassword from './components/ChangePassword/ChangePassword.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
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
      path: "/profile",
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
    {
      path: "/dashboard",
      element: <PrivateRoute> <Dashboard /></PrivateRoute>
    },

    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
