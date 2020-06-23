import React from 'react'
//redux
import { connect } from "react-redux"
import { removeRecipe } from "../actions"


export const Recipe = ({recipe} , {removeRecipe}) => {
    return (
        <div>
             <h1>Title: {recipe.title} </h1>
            <div>Source: {recipe.source}</div>
            <div> Ingredients: {recipe.ingredients} CM</div>
            <div>Instructions: {recipe.instructions}</div>
            <div>Category: {recipe.category}</div>
            {/* <div>ID: {recipe.id}</div> */}
            <button onClick={() => removeRecipe(recipe.id)}>Delete Recipe</button>
        </div>
    )
}

export default connect(null, {removeRecipe})(Recipe)