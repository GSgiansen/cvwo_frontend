import React from 'react'
import Login from '../components/Login'
import Logo from '../components/Logo'
import s from "../styles/signin.css"
import { Link } from 'react-router-dom'
const signin = () => {
  return (
    <div className='container-2'>
      <Logo/>
      <div className="loginheader">
        
      Welcome back! We missed you 

      <div className='prompt'>

      <div className='login-small'>
      If you are a new user click 
      </div>
      <Link className='login-small-here' to="/signup"> here </Link>
      <div className='login-small'> to sign up</div>
      </div>


      </div>
      <Login/>
    </div>
  )
}

export default signin