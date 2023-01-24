import s from "../styles/Login.css";
import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import App from "../App";
const Login = () => {
  const onLogin = () => {
    setUserID("");
  };
  const [userID, setUserID] = useState("");

  return (
    <>
      <Logo className="logo" />
      <form className="login">
        <div className="loginheader">New to TeaParTea ?</div>
        <div className="text-control">
          <label>Username</label>
          <input
            type="text"
            placeholder="John Cena"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div className="text-control">
          <label>Password</label>
          <input type="text" />
        </div>

        <Link 
        to={"/"}
        state={userID}>

          <button className="btn" type="button" onClick={onLogin}>
            Login
          </button>
        </Link>
      </form>
    </>
  );
};

export default Login;
