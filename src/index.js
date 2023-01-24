import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignIn from "./pages/signin"
import About from "./pages/about"
import Profile from './pages/profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  }

]);
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
