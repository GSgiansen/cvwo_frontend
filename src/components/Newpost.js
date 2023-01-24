import React from 'react'
import s from "../styles/Indivpost.css"
import { useState } from 'react'
import Dropdownmenu from './Dropdownmenu'
import { Select, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const Newpost = ({addPost,testID}) => {
  console.log(testID)
  
    const onPost = () =>{
      if (tag == ''){
        alert("Please choose a tag!")
        return;
      }
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
            <div className="testID"> {!testID? "Someone " :testID} </div> is spilling...

          </div>
          {testID !== null ?
          <div className='select'>
          <Select 
            className='select'
            icon={<ChevronDownIcon />} 
            placeholder="select" 
            onChange={(e) => {
              setTag(e.target.value)
              //console.log(e.target.value)

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
        :
        <Button className='select'>
            <Link to="/signin" className="select">
              Sign In
            </Link>
        </Button>}
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