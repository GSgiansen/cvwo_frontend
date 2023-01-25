import Navbar from "../components/Navbar"
import Profiledisplay from "../components/Profiledisplay"
import Login from "../components/Login"
import Logo from "../components/Logo"
import Signupform from "../components/Signupform"
import { Link } from "react-router-dom"
const signup = () =>{
    
    return (
      <div className="container-2">
        <Logo className="logo" />
        <div className="loginheader">
          New to teapartea ?<p></p>
          Sign up below to join us!
          <div className="prompt">
            <div className="login-small">I'm a </div>
            <Link className="login-small-here" to="/signin">
              {" "}
              user
            </Link>
          </div>
        </div>
        <Signupform />
      </div>
    );

}

export default signup