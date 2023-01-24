import React from 'react'
import Indivpost from './Indivpost'
import s from "../styles/Wall.css"
import Newpost from './Newpost'
const Wall = ({posts,onDelete}) => {
  return (
    <div className='wall'>
        
        {posts.map((post) => <Indivpost key={post.id} id={post.id} userid={post.title} content={post.body} tag={post.tag} onDelete={onDelete}/>)}
    </div>

  )
}

export default Wall