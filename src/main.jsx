import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client';
import Cources from './components/cources/Cources'
import Home from './home/Home'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Signup from './components/Signup';


const router = createBrowserRouter([
  
  {
    path: "/",
    element: (
    <div className='dark:bg-black dark:text-white'>
    <Home />
    </div>
  ),   
      },
  {
    path: "/cource",
    element: (
      <div className='dark:bg-black dark:text-white'>
    <Cources />
  </div>
  ),       
  },
  {
    path: "/signup",
    element: (
      <div className=''>
    <Signup />
  </div>
  ),       
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
    
)
