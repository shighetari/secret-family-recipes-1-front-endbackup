import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.scss";

function LoginForm(props) {
  const { newUser, setNewUser, formValues, setFormValues } = props;

  // Form Handlers

  let history = useHistory();
  function submitHandler(e) {
    e.preventDefault();
    console.log("Logged In");
    history.push("/home");
  }

  function changeHandler(e) {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div className="form-container">
      <h1>Log in to access your secret recepies</h1>
      <form className="form" onSubmit={submitHandler}>
        <label className="form-label">
          {" "}
          Type in your email address
          <input
            className="form-input"
            type="email"
            name="email"
            onChange={changeHandler}
            value={formValues.email}
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
            value={formValues.password}
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
