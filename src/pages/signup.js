import Navbar from "../components/Navbar"
import Profiledisplay from "../components/Profiledisplay"
import Login from "../components/Login"
import Logo from "../components/Logo"
import Signupform from "../components/Signupform"
const signup = () =>{
    
    return (
        <div className='container-2'>
            <Logo className="logo" />
        <div className="loginheader">New to teapartea ? </div>
        <Signupform/>
      </div>
    )

}

export default signup