import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//setting up redux incase I have time to play with new things like dynamic username displaying on nav + misc
import { connect } from 'react-redux'
import { loginUser } from "../actions/index"


const Navbar = ({users}) => {
const [isloggedin, setIsLoggedin] = useState(false)

useEffect(() => {
    if (localStorage.getItem("token")){
        setIsLoggedin(true)
    } 
},[users])
   

    const logout = () => {
        const token = window.localStorage.getItem("token")
    
        if (token) {
          window.localStorage.removeItem("token")
          setIsLoggedin(false)
          alert('You have been logged out')
        } 
        
      }

    return (

        <nav>
            <h1> Secret Family Recipes </h1>
            <Link to="/" onClick={logout} >{isloggedin ? "Logout" : "Login"}</Link>
            {/* <Link to="/">Login</Link> */}
            <br/>
            <Link to="/userdashboard"> UserDashboard</Link>
        { isloggedin &&  <div> Welcome back, {users.username}</div>}
        {/* I'll try to use localStorage to store the value incase user causes component to rerender/refresh */}
            

        </nav>
    )
}

const mapStateToProps = state => {
    return {
        //setting up component to be ready to take in state
        users: state.users
    }
}

export default connect(mapStateToProps, {loginUser})(Navbar)