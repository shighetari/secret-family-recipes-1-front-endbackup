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

  const [formValues, setFormValues] = useState({
    email: '',
    password:''
  })

  


  return (
    <div className="App">
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>

      <Switch>
        <Route path='/login'>
        <LoginForm 
          formValues={formValues}
          setFormValues={setFormValues}/>
        </Route>
        <Route path='/signup'>
          <SignupForm
            newUser={newUser}
            setNewUser={setNewUser} 
            formValues={formValues}
            setFormValues={setFormValues}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
