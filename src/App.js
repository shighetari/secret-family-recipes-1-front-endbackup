import React, {useState, useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import * as Yup from "yup";
import './App.css';

// importing components
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Home from "./components/Home"
// import Loader from "react-loader-spinner"; // saving this for the login for isLoading animation


function App() {

  
  // form values from login and signup
  // const [formValues, setFormValues] = useState({
  //   email: '',
  //   password:''
  // })

  


  return (
    <div className="App">
     
      <Switch>
        <Route path='/home'>
        <Home />
        </Route>
        <Route path='/login'>
        <LoginForm 
          // formValues={formValues} //moving these values into the actual component in stead of prop drilling
          // setFormValues={setFormValues}
          />
        </Route>
        <Route path='/signup'>
          <SignupForm
            // formValues={formValues}
            // setFormValues={setFormValues}
            />
        </Route>
      </Switch>

    </div>
  );
}

export default App;