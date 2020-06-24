import React, { useState } from 'react'
//redux
import { editRecipe } from "../actions/index"
import { connect } from "react-redux"

const initialState = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: ''
}

const EditRecipe = ({ editRecipe }) => {
    const [editedRecipe, setEditedRecipe] = useState(initialState)

    const handleChange = (event) => {
        setEditedRecipe({ ...editedRecipe, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()


    }

    return (
        <>
            <form 
            className='recipe-form'
            onSubmit={handleSubmit}>
                <br /><label className='recipe-form-label'>Title Of Recipe </label>
                <input
                    className='recipe-form-input'
                    onChange={handleChange}
                    name='title'
                    value={editedRecipe.title}
                // required
                />
                <br /> <label className='recipe-form-label'>Source: </label>
                <input
                    className='recipe-form-input'
                    onChange={handleChange}
                    name='source'
                    value={editedRecipe.source}
                // required
                />
                <br /> <label className='recipe-form-label'>ingredients: </label>
                <input
                    className='recipe-form-input'
                    onChange={handleChange}
                    name='ingredients'
                    value={editedRecipe.ingredients}
                // required
                />
                <br /> <label className='recipe-form-label'> instructions: </label>
                <input
                    className='recipe-form-input'
                    onChange={handleChange}
                    name='instructions'
                    value={editedRecipe.instructions}
                // required
                />
                <br /> <label className='recipe-form-label'>Category: </label>
                <input
                    className='recipe-form-input'
                    onChange={handleChange}
                    name='category'
                    value={editedRecipe.category}
                // required
                />
                <br />
                <button className='form-btn'> Update Recipe</button>
            </form>
        </>
    )
}

export default connect(null, { editRecipe })(EditRecipe)