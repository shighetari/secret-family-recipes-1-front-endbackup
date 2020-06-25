import React, { useState } from 'react'
//redux
import { connect } from "react-redux"
import { removeRecipe, editRecipe } from "../actions"
import { useHistory } from 'react-router-dom'
import EditRecipe from './EditRecipe'


export const Recipe = (props) => {
    // console.log(props.recipe)
    //   const {id} = useParams()
    const [isEditing, setIsEditing] = useState(false)
    console.log(isEditing)
    const history = useHistory()
    const onClickEdit = (id) => {
        history.push(`/userdashboard/${id}`)
        console.log(`displaying recipe ID from recipe card`, `${id}`)
        setIsEditing(true)
        // props.editRecipe()
    }

    return (
        <div>
            <h1>Title: {props.recipe.title} </h1>
            <div>Source: {props.recipe.user}</div>
            <div> Ingredients: {props.recipe.ingredients} CM</div>
            <div>Instructions: {props.recipe.instructions}</div>
            <div>Category: {props.recipe.category}</div>

            <button onClick={() => props.removeRecipe(props.recipe.id)}>Delete Recipe</button>
            <button onClick={() => onClickEdit(props.recipe.id)}> Edit Recipe </button>
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