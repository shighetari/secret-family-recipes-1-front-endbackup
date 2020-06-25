import React, { useState, useEffect } from 'react'
//redux
import { editRecipe, getSpecificRecipe } from "../actions/index"
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'


const initialState = {
    title: '',
    ingredients: '',
    instructions: '',
    category: '',
    user_id: '',
    user: '',

}



const EditRecipe = (props) => {
    const [editedRecipe, setEditedRecipe] = useState(initialState)
    const recipeID = props.recipe
    // const recipeIDs = recipes.map((recipe) => {
    //    return recipe.id
    // })
    // console.log(recipeIDs)
    // console.log(props.recipes)
    const handleChange = (event) => {
        setEditedRecipe({ ...editedRecipe, [event.target.name]: event.target.value })
    }


    useEffect(() => {
        setEditedRecipe({ ...props.recipeInfo })
        console.log(props.recipeInfo)
    }, [])

    console.log(recipeID)
    const reduxedit = () => {
        console.log(recipeID)
        props.editRecipe(recipeID, editedRecipe, props.isEditing, props.setIsEditing)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(recipeID)
        // console.log(editedRecipe)
        // props.editRecipe(editedRecipe, recipeID)
        // props.setIsEditing(false)
        reduxedit()
        props.setIsEditing(false)

    }


    return (
        <>
        { props.isEditing &&  
            <form className='recipe-form' onSubmit={handleSubmit}>
                <br /><label className='recipe-form-label' >Title Of Recipe </label>
                <input
                    className='recipe-form-input'
                    onChange={handleChange}
                    name='title'
                    value={editedRecipe.title}
                // required
                />
                <br /> <label className='recipe-form-label'>User: </label>
                <input
                    className='recipe-form-input'
                    onChange={handleChange}
                    name='user'
                    value={editedRecipe.user}
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
                  <br /> <label className='recipe-form-label'>user_id: </label>
                <input
                    className='recipe-form-input'
                    onChange={handleChange}
                    name='user_id'
                    value={editedRecipe.user_id}
                // required
                />
                <br />
                <button className='form-btn'> Update Recipe</button>
            </form>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}
export default connect(mapStateToProps, { editRecipe, getSpecificRecipe })(EditRecipe)