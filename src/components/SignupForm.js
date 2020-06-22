import React from "react";
import { Link, useHistory } from 'react-router-dom'
import * as Yup from "yup";

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
    //we can then run validate using the value
    .validate(value)
    // if the validation is successful, we can clear the error message
    .then(valid => {
      setErrors({
        ...errors,
        [name]: ""
      });
    })
    /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
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
    <div>
      <h1>This is the Signup Form</h1>
      <form onSubmit={submitHandler}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={changeHandler}
            value={formValues.email}
          ></input>
          {errors.email? (<p className="error">{errors.email}</p>) : null}
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Your password"
            onChange={changeHandler}
            value={formValues.password}
          ></input>
          {errors.password ? (<p className="error">{errors.password}</p>) : null}
        </label>
        <button type="submit" disabled={buttonDisabled}>
          Create Account
        </button>
      </form>
      <Link to='/login'>Already have an account? Log In</Link>
    </div>
  );
}

export default SignupForm;
