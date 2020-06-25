import React, { useState, useEffect } from 'react'
//redux
import { connect } from "react-redux"
import { removeRecipe, editRecipe } from "../actions"
import { useHistory } from 'react-router-dom'
import EditRecipe from './EditRecipe'

import '../App.scss'

export const Recipe = (props) => {
    // console.log(props.recipe)
    //   const {id} = useParams()
    const [isEditing, setIsEditing] = useState(false)
    const [recipeOptions, setRecipeOptions] = useState(false)

    console.log(isEditing)
    const history = useHistory()
    const onClickEdit = (id) => {
        history.push(`/userdashboard/${id}`)
        console.log(`displaying recipe ID from recipe card`, `${id}`)
        setIsEditing(true)
        setRecipeOptions(!recipeOptions)
        // props.editRecipe()
    }

    function showOptions(){
        setRecipeOptions(!recipeOptions);
    }



    return (
        <div className='recipe'>
            <h4 className='recipe-edit'  onClick={showOptions}>...</h4>
            <h2>Title: {props.recipe.title} </h2>
            <div>Source: {props.recipe.user}</div>
            <div>Ingredients: {props.recipe.ingredients}</div>
            <div>Instructions: {props.recipe.instructions}</div>
            <div>Category: {props.recipe.category}</div>
            { recipeOptions && <button className='recipe-btn' onClick={() => props.removeRecipe(props.recipe.id)}>Delete Recipe</button>}
            { recipeOptions && <button className='recipe-btn' onClick={() => onClickEdit(props.recipe.id)}> Edit Recipe </button>}
            
            {isEditing ? <EditRecipe recipe={props.recipe.id} recipeInfo ={props.recipe} isEditing={isEditing} setIsEditing={setIsEditing}/> : null }
        </div>
    )
}
const MapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}
export default connect(MapStateToProps, { removeRecipe, editRecipe })(Recipe)