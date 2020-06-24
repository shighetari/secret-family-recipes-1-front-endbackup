import React, {useState} from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.scss';
// importing components
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import UserDashboard from "./components/UserDashboard"
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
// import Loader from "react-loader-spinner"; // saving this for the login for isLoading animation

function App() {

  const [showModal, setShowModal] = useState(false);
  /*****************************************************************\
                        squeeky clean
  \*****************************************************************/

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} title='You have been logged out'/>
      <Navbar setShowModal={setShowModal} />
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