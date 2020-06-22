import React from "react";
import { Link, useHistory } from 'react-router-dom'
import * as Yup from "yup";
import '../App.css'

//importing signup form schema
import signupSchema from './signupSchema';

function SignupForm(props) {
  const {
    setNewUser,
    formValues,
    setFormValues,
    buttonDisabled,
    errors,
    setErrors
  } = props;

  // Form Handlers
  const history = useHistory()

  function submitHandler(e) {
    e.preventDefault();
    console.log("New user created");
    setNewUser(formValues);
    setFormValues({
      email: "",
      password: "",
    });

    history.push('/home')
  }

  function changeHandler(e) {
    const { name, value } = e.target;

    Yup
    .reach(signupSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [name]: ""
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0]
      });
    });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div className='form-container'>
      <h1>Please create an account so we can save your secret recepies</h1>
      <form
      className='form' 
      onSubmit={submitHandler}>
        <label className='form-label'>
          What´s your email address
          <input
            className='form-input'
            type="email"
            name="email"
            onChange={changeHandler}
            value={formValues.email}
          ></input>
          {errors.email? (<p className="error">{errors.email}</p>) : null}
        </label>
        <label className='form-label'>
          Set your Password
          <input
            className='form-input'
            type="password"
            name="password"
            onChange={changeHandler}
            value={formValues.password}
          ></input>
          {errors.password ? (<p className="error">{errors.password}</p>) : null}
        </label>
        <button 
          className='form-btn'
         type="submit" 
         disabled={buttonDisabled}>
          Create Account
        </button>
      </form>
      <Link to='/login'>Already have an account? Log In</Link>
    </div>
  );
}

export default SignupForm;
