import React, { useEffect } from "react"
//redux
import { connect } from "react-redux"
//axios
import { getRecipe } from "../actions"
import Recipe from './Recipe'

const RecipeList = (props, {getRecipe}) => {

        useEffect(() => {
            //dispatch action from redux here
            console.log(props.recipes) // redux state
            // getRecipe() // will remove when end points are given
        },[])

    return (
        <>
        
        {/* inserted map here that will also return the Recipe component */}
         {/* we'll do this together in a zoom call tuesday */}
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