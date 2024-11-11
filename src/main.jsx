import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../src/components/ErrorPage/ErrorPage.jsx';
import Home from '../src/components/Home/Home.jsx';
import App from './App.jsx';
import Login from './components/Login/Login.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => {
      const response = fetch('/data/alldata.json');
      return response; 
    },
    children: [
      {
        path: "/",
        element: <Home />
     },{
      path: "/login",
      element: <Login />
   },

    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
