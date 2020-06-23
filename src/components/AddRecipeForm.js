import React, { useState } from 'react'
//redux
import {addRecipe} from "../actions/index"
import {connect} from "react-redux"


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
        <form onSubmit={handleSubmit}>
            <br/><label>Title Of Recipe </label>
            <input 
                onChange={handleChange}
                name='title'
                value={newRecipe.title}
                placeholder='title of recipe'
                required
            />
            <br/> <label>Source: </label>
            <input 
                onChange={handleChange}
                name='source'
                value={newRecipe.source}
                placeholder='title of source'
                required
            />
                <br/> <label>ingredients: </label>
            <input 
                onChange={handleChange}
                name='ingredients'
                value={newRecipe.ingredients}
                placeholder='list of ingredients'
                required
            />
                        <br/> <label> instructions: </label>
            <input 
                onChange={handleChange}
                name='instructions'
                value={newRecipe.instructions}
                placeholder='instructions'
                required
            />
                        <br/> <label>Category: </label>
            <input 
                onChange={handleChange}
                name='category'
                value={newRecipe.category}
                placeholder='category'
                required
            />
            <br/>
            <button> Add Recipe </button>
        </form>
    )
}

export default connect(null, {addRecipe})(AddRecipeForm)