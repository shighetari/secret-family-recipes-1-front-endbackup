import React, { useState } from 'react'
//redux
import {addRecipe} from "../actions/index"
import {connect} from "react-redux"
import { useHistory } from 'react-router-dom'



const initialState = {
        title: '',
        user:'',
        ingredients: '',
        instructions: '',
        category: '',
        user_id: '',
}

const AddRecipeForm = ({addRecipe}) => {
    const [newRecipe, setNewRecipe] = useState(initialState)

    const handleChange = (event) => {
        setNewRecipe({...newRecipe, [event.target.name]: event.target.value})
    }
    const history = useHistory()
    const handleSubmit = (event) => {
        
        event.preventDefault()
        addRecipe(newRecipe)
        history.push('/userdashboard')
    }

    return (
        <form onSubmit={handleSubmit}>
            <br/><label>Title Of Recipe </label>
            <input 
                onChange={handleChange}
                name='title'
                value={newRecipe.title}
                placeholder='title of recipe'
                // required
            />
            <br/> <label>User: </label>
            <input 
                onChange={handleChange}
                name='user'
                value={newRecipe.user}
                placeholder='title of user'
                // required
            />
                <br/> <label>ingredients: </label>
            <input 
                onChange={handleChange}
                name='ingredients'
                value={newRecipe.ingredients}
                placeholder='list of ingredients'
                // required
            />
                        <br/> <label> instructions: </label>
            <input 
                onChange={handleChange}
                name='instructions'
                value={newRecipe.instructions}
                placeholder='instructions'
                // required
            />
                        <br/> <label>Category: </label>
            <input 
                onChange={handleChange}
                name='category'
                value={newRecipe.category}
                placeholder='category'
                // required
            />
            <br/>
            
            <label>User_id </label>
            <input 
                onChange={handleChange}
                name='user_id'
                value={newRecipe.user_id}
                placeholder='user_id'
                // required
            />
            <br/>
            <button> Add Recipe </button>
        </form>
    )
}

export default connect(null, {addRecipe})(AddRecipeForm)