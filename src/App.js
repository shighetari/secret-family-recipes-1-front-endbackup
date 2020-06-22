import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

// importing components
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>

      <Switch>
        <Route path='/login'>
        <LoginForm />
        </Route>
        <Route path='/signup'>
          <SignupForm />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
