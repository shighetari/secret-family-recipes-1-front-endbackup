import React, { useEffect } from "react"
//redux
import { connect } from "react-redux"
//axios
import { getRecipe } from "../actions"
import Recipe from './Recipe'

const RecipeList = (props, {getRecipe}) => {

        useEffect(() => {
            //dispatch action from redux here
            getRecipe()
        },[])

    return (
        <>
        
        {/* inserted map here that will also return the Recipe component */}
        {props.recipes.map((recipe) => {
            return <Recipe key={recipe.id} recipe={recipe} />
        })}
        
        </>
    )

}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        error: state.error
    }
}
export default connect(mapStateToProps, {getRecipe})(RecipeList)