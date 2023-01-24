import React from 'react'
import Login from '../components/Login'
import Logo from '../components/Logo'
import s from "../styles/signin.css"
const signin = () => {
  return (
    <div className='container-2'>
      <Logo/>
      <div className="loginheader">Welcome back! We missed you </div>
      <Login/>
    </div>
  )
}

export default signin