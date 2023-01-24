import React from 'react'
import s from "../styles/Indivpost.css"
import { useState } from 'react'
import Dropdownmenu from './Dropdownmenu'
import { Select } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
const Newpost = ({addPost,testID}) => {
  
    const onPost = () =>{
      //console.log(tag)
        addPost({title,body,tag})
        setContent('')
    }
    const [title, setUserID] = useState(testID)
    const [body, setContent] = useState('')
    const [tag, setTag] = useState('')

  return (
    <div className="newpost">
      <form>
        <div className="postheader">
          <div className="posttext">
            <div className="testID"> {testID} </div> is spilling...

          </div>
          <div className='select'>
          <Select 
            className='select'
            icon={<ChevronDownIcon />} 
            placeholder="select" 
            onChange={(e) => {
              setTag(e.target.value)
              console.log(e.target.value)

            }}
            >
              <option value="tea">tea</option>
              <option value="rant">rant</option>
              <option value="fluff">fluff</option>
            </Select>
          <button className="postbutton" type="button" onClick={onPost}>
            Post!
          </button>
          </div>
        </div>
        <input
          className="prompt"
          type="text"
          placeholder="Whats the tea today babe ?"
          value={body}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Newpost