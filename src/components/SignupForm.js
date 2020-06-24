import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import * as Yup from "yup";
import "../App.scss";
//imported axios with auth - fb
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import Axios from "axios"; //set up axios for R1
import { useLocalStorage } from "../utils/useLocalStorage"; // added local storage

//importing signup form schema
import formSchema from './formSchema';



//added init state for form state
const initialState = {
  username: '',
  password: '',
}

function SignupForm() {

  // const [formValues, setFormValues] = useState(initialState)
  const [formState, setFormState] = useLocalStorage(`formValues`, initialState)
  const [errors, setErrors] = useState(initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true)

  //sigup button validation
  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  // Form Handlers
  const history = useHistory()

  const postNewUsername = (newUsername) => {
    axiosWithAuth().post('/api/auth/register', newUsername)
      .then((res => {
        console.log(res)
        setFormState(initialState)
        history.push("/login")
      }))
      .catch((err) => {
        console.log(err)
        debugger
      })

  }

  //onSubmit
  const submitHandler = e => {
    e.preventDefault()
    const newUsername = {
      username: formState.username.trim(),
      password: formState.password.trim(),
    }
    //pass in the function for axios call or useEffect
    postNewUsername(newUsername)
  }


  function changeHandler(e) {
    const { name, value } = e.target;

    Yup
    .reach(formSchema, name)
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

    setFormState({
      ...formState,
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
          Set your username
          <input
            className='form-input'
            type="username"
            name="username"
            onChange={changeHandler}
            value={formState.username} 
          ></input>
          {errors.username ? (<p className="error">{errors.username}</p>) : null}
        </label>

        <label className='form-label'>
          Set your password
          <input
            className='form-input'
            type="password"
            name="password"
            onChange={changeHandler}
            value={formState.password} 
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
      <Link to='/'>Already have an account? Log In</Link>
    </div>
  );
}

export default SignupForm;
