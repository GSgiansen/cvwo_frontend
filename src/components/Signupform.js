import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signupform = () => {
    const [username, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const usersURL = "http://localhost:3000/users"
    const navigate = useNavigate();

    const createUser  = () => {
        console.log("creating new user")

        fetch(usersURL,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "GET",
              body: JSON.stringify()
            })
            .then((response) => response.json())
            .then((data) => {
                let res = data.filter((user) => user.username === username)
                console.log(res)
                if (res.length >=1){
                    alert("Username is already taken!")

                }
                else{
                    fetch(usersURL,{
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          method: "POST",
                          body: JSON.stringify({username, password})
                        })
                    navigate("/",{state:username})
                }


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
    
              <button className="btn" type="button" onClick={createUser}>
                Login
              </button>
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