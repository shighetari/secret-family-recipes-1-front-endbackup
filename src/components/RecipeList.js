import React, { useEffect, useState } from "react"
//redux
import { connect } from "react-redux"
//axios
import { getRecipe } from "../actions"
import Recipe from './Recipe'
//props = state from mapstatetoprops 
//{getRecipe} is an action from redux (actions.js) for the reducer
const RecipeList = (props) => {
    const [search, setSearch] = useState('')
    const getRecipe = props.getRecipe
     //console.log(props.recipes) // redux state
    useEffect(() => {
        //dispatch action from redux here

        getRecipe()
    }, []) //[getRecipe] return this after im done playing with edit

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const filterSearch = () => {
        return props.recipes.filter(recipe => {
            // console.log(recipe)
            if (recipe.title.toLowerCase().includes(search.toLowerCase())
                ||
                recipe.category.toLowerCase().includes(search.toLowerCase())) {
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
                type="text"
                placeholder="search bar"
                name="searchbar"
                value={search}
                onChange={handleChange}
            />
            {filterSearch().map((recipe) => {
                return <Recipe key={recipe.id} recipe={recipe} />
                
            })}
            {/* {props.recipes.map(item => {
                return (
                    <div>
                        {item.title}
                    </div>
                )
            })} */}
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