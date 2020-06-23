import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import * as Yup from "yup";
import '../App.css'
//imported axios with auth - fb
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import Axios from "axios"; //set up axios for R1
import { useLocalStorage } from "../utils/useLocalStorage"; // added local storage

//importing signup form schema
import signupSchema from './signupSchema';



//added init state for form state
const initialState = {
  username: '',
  password: '',
  // email: '' //no value yet on back end as of now
}
function SignupForm(/*props*/) { // we shouldn't need props unless passing in redux state
  const [formValues, setFormValues] = useState(initialState)
  //added username slot since that's what our back end has right now|| NVM just re-assigned value to initstate since it as same properities
  const [formState, setFormState] = useLocalStorage(`formValues`, initialState)

  // you only need one state with the values 'email: password:'
  // const [newUser, setNewUser] = useState({
  //   email: '',
  //   password:''
  // })

  const [errors, setErrors] = useState({ // this can also use init state
    email: "",
    password: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(true)

  // const {
  //   formValues,
  //   setFormValues,
  // } = props;          /* we won't need these props since we're using form state management and not passing through App*/


  //sigup button validation
  useEffect(() => {
    signupSchema.isValid(formValues).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  // Form Handlers
  // const history = useHistory()
  /*
    function submitHandler(e) { //axios callback goes here
      e.preventDefault();
      console.log("New user created");
      setFormValues(formValues);//I think I see what you're trying to do here, clear the values once submitited but you can do this with only one state :)
      setFormValues({
        email: "",
        password: "",
      });
       history.push('/home') // might want to push this to the login page 
    }
  */
  //************Start of FB additions************\\
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

  //made a basic changehandler to test sign up
  function changeHandler(e) {
    const name = e.target.name
    const value = e.target.value

    setFormState({
      ...formState,
      [name]: value
    })

  }

  //************End of FB additions ************\\



  // function changeHandler(e) {
  //   const { name, value } = e.target;

  //   Yup
  //   .reach(signupSchema, name)
  //   .validate(value)
  //   .then(valid => {
  //     setErrors({
  //       ...errors,
  //       [name]: ""
  //     });
  //   })
  //   .catch(err => {
  //     setErrors({
  //       ...errors,
  //       [name]: err.errors[0]
  //     });
  //   });

  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // }

  return (
    <div className='form-container'>
      <h1>Please create an account so we can save your secret recepies</h1>
      <form
        className='form'
        onSubmit={submitHandler}>
        {/* <label className='form-label'>
          What´s your email address
          <input
            className='form-input'
            type="email"
            name="email"
            onChange={changeHandler}
            value={formState.email} // changed to formstate from formValues
          ></input>
          {errors.email ? (<p className="error">{errors.email}</p>) : null}
        </label> */}
        <label className='form-label'>
          Set your username
          <input
            className='form-input'
            type="username"
            name="username"
            onChange={changeHandler}
            value={formState.username} // changed to formstate from formValues
          ></input>
          {errors.password ? (<p className="error">{errors.password}</p>) : null}
        </label>

        <label className='form-label'>
          Set your Password
          <input
            className='form-input'
            type="password"
            name="password"
            onChange={changeHandler}
            value={formState.password} // changed to formstate from formValues
          ></input>
          {errors.password ? (<p className="error">{errors.password}</p>) : null}
        </label>
        <button
          className='form-btn'
          type="submit"
          disabled={buttonDisabled}>
          Create Account
        </button>
        <button>test signup button </button>
      </form>
      <Link to='/login'>Already have an account? Log In</Link>
    </div>
  );
}

export default SignupForm;
