import React from 'react'
import { useHistory } from 'react-router-dom'

function LoginForm (props){

    const { newUser, setNewUser, formValues, setFormValues } = props

        // Form Handlers

        let history = useHistory()
        function submitHandler(e){
            e.preventDefault()
            console.log('Logged In');
            history.push('/home')
            
        }
    
        function changeHandler(e){
            const {name, value } = e.target;
    
            setFormValues({
                ...formValues,
                [name]: value
            })
    
        }
    
return(        
        <div>
            <h1>This is the Login Form</h1>
            <form onSubmit={submitHandler}>
                <label> Email:
                    <input 
                    type='email'
                    name='email'
                    placeholder='Your email'
                    onChange={changeHandler}
                    value={formValues.email}
                    >
                    </input>
                </label>
                <label> Password:
                    <input 
                    type='password'
                    name='password'
                    placeholder='Your password'
                    onChange={changeHandler}
                    value={formValues.password}
                    >
                    </input>
                </label>
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}


export default LoginForm;