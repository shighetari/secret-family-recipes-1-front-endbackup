import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.scss';
// importing components
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import UserDashboard from "./components/UserDashboard"
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
// import Loader from "react-loader-spinner"; // saving this for the login for isLoading animation


function App() {


  /*****************************************************************\
                        squeeky clean
  \*****************************************************************/

  return (
    <div>

      {/* will use navbar to avoid these links */}

      <Navbar />
      <Switch>
        <Route exact path='/' >
          <LoginForm />
        </Route>

        <Route path='/signup'>
          <SignupForm />
        </Route>

        {/* start of private routes */}
        <PrivateRoute path='/userdashboard/' component={UserDashboard} />
      </Switch>

    </div>
  );
}

export default App;