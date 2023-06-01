import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import ContactForm from './ContactForm';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './SignUp';
import LogInForm from './LogInForm';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <SignUp />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/loginform",
    element: <LogInForm />
  },
  {
    path: "/contactform",
    element: <ContactForm />
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);