import React from 'react'
import s from "../styles/Profilepic.css"
import Indivpost from './Indivpost'
import { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { left } from '@popperjs/core'
const PersonalWall = ({posts,delPost}) => {

  return (
    <div className='ownpost'>
        <div style={{padding:10}}>My own posts</div>
    <div className='personalwall'>
        
        {posts.map((post) => <Indivpost key={post.id} id={post.id} userid={post.title} content={post.body} tag={post.tag} onDelete={delPost}/>)}
    </div>

    </div>
  )
}

export default PersonalWall