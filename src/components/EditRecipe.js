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
            <form onSubmit={handleSubmit}>
                <br /><label>Title Of Recipe </label>
                <input
                    onChange={handleChange}
                    name='title'
                    value={editedRecipe.title}
                    placeholder='title of recipe'
                // required
                />
                <br /> <label>Source: </label>
                <input
                    onChange={handleChange}
                    name='source'
                    value={editedRecipe.source}
                    placeholder='title of source'
                // required
                />
                <br /> <label>ingredients: </label>
                <input
                    onChange={handleChange}
                    name='ingredients'
                    value={editedRecipe.ingredients}
                    placeholder='list of ingredients'
                // required
                />
                <br /> <label> instructions: </label>
                <input
                    onChange={handleChange}
                    name='instructions'
                    value={editedRecipe.instructions}
                    placeholder='instructions'
                // required
                />
                <br /> <label>Category: </label>
                <input
                    onChange={handleChange}
                    name='category'
                    value={editedRecipe.category}
                    placeholder='category'
                // required
                />
                <br />
                <button> Update Recipe</button>
            </form>
        </>
    )
}

export default connect(null, { editRecipe })(EditRecipe)