import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signupform = () => {
    const [username, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const usersURL = "http://localhost:3000/users"

    const createUser  = () => {
        console.log("creating new user")
        fetch(usersURL,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({username, password})
            })

        
      }

    
  return (
    <div>
    <>
      
      <form className="login">
  
        <div className="text-control">
          <label>Username</label>
          <input
            type="text"
            placeholder="John Cena"
            value={username}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div className="text-control">
          <label>Password</label>
          <input type="text" 
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}          
          />
        </div>
        {
          username !== "" 
          ?(
            <Link 
            to={"/"}
            state={username}>
    
              <button className="btn" type="button" onClick={createUser}>
                Login
              </button>
            </Link>
          )
          :
          <div className="text-control">Fill in username!</div>

        }
      </form>
    </>

    </div>
  )
}

export default Signupform