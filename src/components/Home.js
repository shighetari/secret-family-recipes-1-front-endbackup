import React, { useEffect, useState } from 'react'
import AddRecipeForm from './AddRecipeForm'
import RecipeList from './RecipeList'
import EditRecipe from './EditRecipe'
// redux
import { connect } from 'react-redux'
import { postUser } from '../actions/index'



const Home = (props, { postUser }) => {
    const users = props.users;

console.log(users) // gave the state name: users
console.log(props.users)// props.users is the redux state
    return (
        <>
            <div>
                test home page
            <AddRecipeForm />
                <RecipeList />
                <EditRecipe />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, { postUser })(Home)
