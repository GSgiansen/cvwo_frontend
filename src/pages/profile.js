import React from 'react'
import s from "../styles/profile.css"
import Navbar from "../components/Navbar.js"
import Profiledisplay from '../components/Profiledisplay'
import { NavLink, Link,useLocation } from "react-router-dom";
const profile = () => {
  
  return (
    <div className='container'>
      <div className='header'>
      <Navbar />
      
      </div>
      <Profiledisplay/>
      

    </div>
  )
}

export default profile