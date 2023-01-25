import React, { useState } from 'react'
import s from "../styles/Indivpost.css"
import {FaTimes,FaPenAlt} from 'react-icons/fa'
const Indivpost = ({testID, id, userid,content,tag, onDelete}) => {

  const postsURL="https://cvwo-backend-7cq1.onrender.com/api/v1/posts"
  const cors = require("cors")
  const [editContent, setContent] = useState("")
  const [isShown, setIsShown] = useState(false);
  const [actContent, setActContent] = useState(content)


  const editpost = () => {
    console.log("editing post")
    fetch(postsURL+ `/${id}` , {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({title:userid,body:editContent,tag:tag})
    
  })
  .then((response) => {
    setIsShown(false)
    setActContent(editContent)

    setContent("")

    response.json()}
    )

}
const popUptext = () => {
  setIsShown(!isShown)





}

const editButtonPressed = () => {
  console.log("Edit button clicked")
  editpost()
  

}
  return (
    <div className="post">
      <div className="userid">
        <div className="userid">
          {userid}
          <div
            className="tag"
            style={{
              backgroundColor:
                tag == "tea" ? "black" : tag == "fluff" ? "blue" : "teal",
            }}
          >
            {tag}
          </div>
        </div>
        {testID == userid ? (
          <div className="icons">
            <FaPenAlt onClick={() => popUptext()}></FaPenAlt>
            <FaTimes onClick={() => onDelete(id)} />
          </div>
        ) : (
          ""
        )}
      </div>
      <p></p>
      {!isShown && <div className="content">{content}</div>}
      {isShown && (
        <form className='content'>
          <button className='btn' type="button" onClick={() => editButtonPressed()}>Confirm Edit</button>
          <input
            type="text"
            placeholder={content}
            value={editContent}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </form>
      )}
    </div>
  );
}

export default Indivpost