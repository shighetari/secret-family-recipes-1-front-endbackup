import React, { useEffect, useState } from "react"
//redux
import { connect } from "react-redux"
//axios
import { getRecipe } from "../actions"
import Recipe from './Recipe'

import '../App.scss'
//props = state from mapstatetoprops 
//{getRecipe} is an action from redux (actions.js) for the reducer
const RecipeList = (props, { getRecipe }) => {
    const [search, setSearch] = useState('')


    useEffect(() => {
        //dispatch action from redux here
        console.log(props.recipes) // redux state
        // getRecipe() // will remove when end points are given
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const filterSearch = (recipes) => {
        return recipes.filter(recipe => {
            if (recipe.title.toLowerCase().includes(search.toLowerCase)
                ||
                recipe.category.toLowerCase().includes(search.toLocaleLowerCase)) {
                return recipe
            }
            return null
        })
    }

    return (
        <>

            {/* inserted map here that will also return the Recipe component */}
            {/* adding search bar */}
            <input
                className='searchbar'
                type="text"
                placeholder="search recepies"
                name="searchbar"
                value={search}
                onChange={handleChange}
            />
            {filterSearch(props.recipes).map((recipe) => {
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
export default connect(mapStateToProps, { getRecipe })(RecipeList)