import React, { useState } from 'react'
//redux
import {addRecipe} from "../actions/index"
import {connect} from "react-redux"

import '../App.scss'

const initialState = {
        title: '',
        source:'',
        ingredients: '',
        instructions: '',
        category: ''
}
const AddRecipeForm = ({addRecipe}) => {
    const [newRecipe, setNewRecipe] = useState(initialState)

    const handleChange = (event) => {
        setNewRecipe({...newRecipe, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addRecipe(newRecipe)
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
            <br/> <label className='recipe-form-label'>Source: </label>
            <input 
                className='recipe-form-input'
                onChange={handleChange}
                name='source'
                value={newRecipe.source}
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
            <br/>
            <button className='form-btn'> Add Recipe </button>
        </form>
    )
}

export default connect(null, {addRecipe})(AddRecipeForm)