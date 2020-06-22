import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

// importing components
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'


function App() {

  // Entire app state
  const [newUser, setNewUser] = useState({
    email: '',
    password:''
  })

  const [signupValues, setSignupValues] = useState({
    email: '',
    password:''
  })

  


  return (
    <div className="App">
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>

      <Switch>
        <Route path='/login'>
        <LoginForm />
        </Route>
        <Route path='/signup'>
          <SignupForm
            newUser={newUser}
            setNewUser={setNewUser} 
            signupValues={signupValues}
            setSignupValues={setSignupValues}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
