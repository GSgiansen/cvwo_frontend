import s from "../styles/Navbar.css"
import React from 'react'
import Login from './Login'
import Sidebar from "./Sidebar"
import Logo from "./Logo"
const Navbar = () => {


  return (
    <div className="header">
      <Sidebar/>
      <Logo/>
      <div/>
    </div>

  )
}

export default Navbar