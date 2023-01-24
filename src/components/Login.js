import s from "../styles/Login.css";
import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import { NavLink, Link, redirect, Route, Navigate, useNavigate } from "react-router-dom";
import App from "../App";
const Login = () => {
  const [username, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const usersURL = "http://localhost:3000/users"
  const navigate = useNavigate();


  const onLogin = () => {
      fetch(usersURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify()
      }).then((response) => response.json())
      .then((data) => {
        //console.log(username)
        let res = checkIfpresent(data)[0]
        //console.log(res)
        let check = (res !== null)
        if (check) {
          //console.log("user found")
          if (res.password == password){
            //console.log("correct password")
            navigate("/",{state:username})
          }
          else{
            alert("incorrect password or username")
          }
          
        }
        else{
          console.log("USER NOT FOUND")
          return false
        }
      })
    }
  const checkIfpresent = (arr) => {
    //takes in array of objects
    const check = arr.filter((obj) => obj.username == username)
    console.log(check.length)
    return check

  }

  return (
    <>
      
      <form className="login">
  
        <div className="text-control">
          <label>Username</label>
          <input
            type="text"
            placeholder="John Cena"
            value={username}
            onChange={(e) => {
              setUserID(e.target.value)}
            }
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
            //<Link 
            //to={"/"}
            //state={username}>
    
              <button className="btn" type="button" onClick={onLogin}>
                Login
              </button>
            //</Link>
          )
          :
          <div className="text-control">Fill in username!</div>

        }
      </form>
    </>
  );
};

export default Login;
