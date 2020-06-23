import React from 'react';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import './App.css';
// importing components
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import UserDashboard from "./components/UserDashboard"
import PrivateRoute from './components/PrivateRoute'
// import Loader from "react-loader-spinner"; // saving this for the login for isLoading animation


function App() {

  const logout = () => {
    const token = window.localStorage.getItem("token")

    if (token) {
      window.localStorage.removeItem("token")
    } else {
      alert('you are not logged in anymore')
    }
  }


  return (
    <div className="App">
      {/* will use navbar to avoid these links */}
     <Link to= "/login" onClick = {logout} >Logout</Link> 
     <Link to= "/login" >Login</Link> 
      <Switch>

        <Route path='/login' >
        <LoginForm />
        </Route>

        <Route path='/signup'>
          <SignupForm/>
        </Route>

        {/* start of private routes */}
        <PrivateRoute path='/userdashboard' component={UserDashboard}/>

      </Switch>
    </div>
  );
}

export default App;