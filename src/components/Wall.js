import React from 'react'
import Indivpost from './Indivpost'
import s from "../styles/Wall.css"
import Newpost from './Newpost'
const Wall = ({posts,onDelete, testID}) => {
  return (
    <div className='wall'>
        
        {posts.map((post) => <Indivpost testID={testID} key={post.id} id={post.id} userid={post.title} content={post.body} tag={post.tag} onDelete={onDelete}/>)}
    </div>

  )
}

export default Wall