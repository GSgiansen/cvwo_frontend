import React from 'react'
import Profilepic from './Profilepic'
import Wall from './Wall'
import s from "../styles/Profilepic.css"
import PersonalWall from './PersonalWall'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
const Profiledisplay = () => {
  const {state}= useLocation();

  const userID = state;
  console.log(userID)
  const postsURL="http://localhost:3000/api/v1/posts"
  const [posts,setPosts]=useState([])
  const fetchPostList  = () => {
      console.log("posts fetched")
      fetch(postsURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPosts(data.filter((post) => post.title == userID ))
        })
    }  
    const delPost = (id) =>{
      fetch(postsURL+ `/${id}` ,{
        method:"DELETE"
      }
        ).then(() => setPosts(posts.filter((post) => post.id !== id)))
  
    }
    useEffect(() => {
      fetchPostList()},[]
    )
  return (
    <div className="display">
      <Profilepic userID={userID} length={posts.length}/>
      <div>
        <PersonalWall posts={posts} delPost={delPost}/>
      </div>

    </div>
  )
}

export default Profiledisplay