import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import * as Yup from "yup";
import './App.css';
//components
// import AddRecipeForm from './components/AddRecipeForm';
// import EditRecipe from './components/EditRecipe'
// importing components
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
// import Loader from "react-loader-spinner"; // saving this for the login for isLoading animation
//importing signup form schema
import signupSchema from './components/signupSchema';



function App() {

  // Entire app state
  const [newUser, setNewUser] = useState({
    email: '',
    password: ''
  })

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(true)


  //sigup button validation
  useEffect(() => {
    signupSchema.isValid(formValues).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);



  return (

    <div className="App">
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
      {/* <EditRecipe />
      <AddRecipeForm /> */}
      <Switch>
        <Route path='/home'>
          <div>
            <h1>{newUser.email} Family Recepies</h1>
          </div>
        </Route>
        <Route path='/login'>
          <LoginForm
            formValues={formValues}
            setFormValues={setFormValues} />
        </Route>
        <Route path='/signup'>
          <SignupForm
            setNewUser={setNewUser}
            formValues={formValues}
            setFormValues={setFormValues}
            buttonDisabled={buttonDisabled}
            errors={errors}
            setErrors={setErrors} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
