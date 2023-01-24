import React from 'react'
import s from "../styles/Profilepic.css"
import { NavLink, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Profilepic = ({userID,length}) => {
  return (
    <div className="dp">
        <img className="pic" src='./profilepiccat.jpeg'></img>
        <div className='bio'>
            <div className='name'>{userID}</div>
            <div className="description">Loving turtles</div>
            <div className="description">Num of posts: {length}</div>
            <br></br>
        </div>
    </div>
  )
}

export default Profilepic