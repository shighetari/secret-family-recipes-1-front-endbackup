import React, { useState } from "react"; //added use state for form state managment for R1 -fb
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//Scehma for login page to meet same reqs as required for signup?
//form state managment
const initialState = {
  username: '',
  password:''
}
function LoginForm() { 
  const history = useHistory()
  const [formValues, setFormValues] = useState(initialState) 

  // Form Handlers

  // I will end up moving your usehistory hook into the axioswithauth .then path but for now, good job!
  // let history = useHistory();
  // function submitHandler(e) {
  //   e.preventDefault();
  //   console.log("Logged In");
  //   history.push("/home");
  // }
//FB WORK START:
const submitHandler = e => {
  e.preventDefault()
  axiosWithAuth().post(`/api/auth/login`, formValues)
  .then((res) => {
    console.log(res)
    window.localStorage.setItem("token" , res.data.token)
    history.push("/home")
  })
  .catch((err) => {
    console.log(err)
    debugger
  })
  .finally(()=> {

  })

}
//FB WORK END\\


  function changeHandler(e) {
    const { name, value } = e.target;

    setFormValues({
     ...formValues,
     [name]:value
    });
  }

  return (
    <div className="form-container">
      <h1>Log in to access your secret recepies</h1>
      <form className="form" onSubmit={submitHandler}>
        <label className="form-label">
          {" "}
          Type in your username
          <input
            className="form-input"
            type="username"
            name="username"
            onChange={changeHandler} 
            value={formValues.username} //change values from local state
          ></input>
        </label>
        <label className="form-label">
          {" "}
          And your password
          <input
            className="form-input"
            type="password"
            name="password"
            onChange={changeHandler}
            value={formValues.password} //change values from local state
          ></input>
        </label>
        <button className="form-btn" type="submit">
          Log In
        </button>
      </form>
      <Link to="/signup">Don´t have an account yet? Register here</Link>
    </div>
  );
}

export default LoginForm;
