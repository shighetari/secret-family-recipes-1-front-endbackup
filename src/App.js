import React, {useState, useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import * as Yup from "yup";
import './App.scss';

// importing components
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { Home } from './components/Home'

//importing signup form schema
import signupSchema from './components/signupSchema';

function App() {

  
  // form values from login and signup
  const [formValues, setFormValues] = useState({
    email: '',
    password:''
  })

  


  return (
    <div className="App">
     
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/login'>
        <LoginForm 
          formValues={formValues}
          setFormValues={setFormValues}/>
        </Route>
        <Route path='/signup'>
          <SignupForm
            formValues={formValues}
            setFormValues={setFormValues}
            />
        </Route>
      </Switch>

    </div>
  );
}

export default App;