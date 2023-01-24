import React from 'react'
import s from "../styles/Indivpost.css"
import {FaTimes} from 'react-icons/fa'
const Indivpost = ({id, userid,content,tag, onDelete}) => {
  return (
    
    <div className='post'>

        <div className='userid'>
          <div className='userid'>
          {userid}
          <div className='tag'
          style={{
            backgroundColor: tag == "tea" ? "black" : (tag =="fluff" ? "blue" :"teal")
          }}
          >{tag}</div>
          </div>
          <FaTimes onClick={()=> onDelete(id)}/>
        </div>
        <p></p>
        <div className='content'>{content}</div>
    </div>
  )
}

export default Indivpost