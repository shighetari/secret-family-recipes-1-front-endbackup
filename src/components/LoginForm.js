import React, { useState, useEffect } from "react"; //added use state for form state managment for R1 -fb
import { Link, useHistory } from "react-router-dom";
import "../App.scss";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { loginUser } from "../actions";


//Scehma for login page to meet same reqs as required for signup?
//form state managment
const initialState = {
  username: '',
  password: ''
}
function LoginForm({ loginUser }) {

  const history = useHistory()
  const [formValues, setFormValues] = useState(initialState)
  const [errors, setErrors] = useState(initialState);


  // resets errors whenever user types
  useEffect(() => {
    setErrors(initialState)
  }, [formValues])

  const submitHandler = e => {
    e.preventDefault()
    loginUser(formValues, history, setErrors, errors) //switched to redux
    // axiosWithAuth().post(`/api/auth/login`, formValues) //antonios work
    //   .then((res) => {
    //     console.log(res)
    //     window.localStorage.setItem("token", res.data.token)
    //     history.push("/userdashboard")
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     setErrors({
    //       ...errors,
    //       message: "The Username or Password you entered does not exist. Please try again"
    //     });
    //     debugger
    //   })
    //   .finally(() => {

    //   })

  }

  function changeHandler(e) {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  return (
    <div className="form-container">
      <h1>Log in to access your secret recepies</h1>
      <form className="form" onSubmit={submitHandler}>
        <label className="form-label">
          Type in your username
          <input
            className="form-input"
            type="username"
            name="username"
            onChange={changeHandler}
            value={formValues.username}
          ></input>
        </label>
  
        <label className="form-label">
          And your password
          <input
            className="form-input"
            type="password"
            name="password"
            onChange={changeHandler}
            value={formValues.password}
          ></input>
        </label>
        {errors.message ? (<p className="error">{errors.message}</p>) : null}
        <button className="form-btn" type="submit">
          Log In
        </button>
      </form>
      <Link to="/signup">Don´t have an account yet? Register here</Link>
    </div>
  );
}

// const MapStateToProps = state => {
//   return {

//   }
// }

export default connect(null, { loginUser })(LoginForm)