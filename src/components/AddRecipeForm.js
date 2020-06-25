import React, { useState } from 'react'
//redux
import {addRecipe} from "../actions/index"
import {connect} from "react-redux"
import { useHistory } from 'react-router-dom'

import '../App.scss'

import '../App.scss'

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
        <form 
        className='recipe-form'
        onSubmit={handleSubmit}>
            <br/><label className='recipe-form-label'>Title Of Recipe </label>
            <input 
                className='recipe-form-input'
                onChange={handleChange}
                name='title'
                value={newRecipe.title}
                required
            />
            <br/> <label className='recipe-form-label'>User: </label>
            <input 
                className='recipe-form-input'
                onChange={handleChange}
                name='user'
                value={newRecipe.user}
                required
            />
                <br/> <label className='recipe-form-label'>ingredients: </label>
            <input 
                className='recipe-form-input'
                onChange={handleChange}
                name='ingredients'
                value={newRecipe.ingredients}
                required
            />
                        <br/> <label className='recipe-form-label'> instructions: </label>
            <input 
                className='recipe-form-input'
                onChange={handleChange}
                name='instructions'
                value={newRecipe.instructions}
                required
            />
                        <br/> <label className='recipe-form-label'>Category: </label>
            <input 
                className='recipe-form-input'
                onChange={handleChange}
                name='category'
                value={newRecipe.category}
                required
            />
            
            <br/> <label className='recipe-form-label'>user_id </label>
            <input 
                className='recipe-form-input'
                onChange={handleChange}
                name='user_id'
                value={newRecipe.user_id}
                required
            />
            <br/>
            <button className='form-btn'> Add Recipe </button>
        </form>
    )
}

export default connect(null, {addRecipe})(AddRecipeForm)