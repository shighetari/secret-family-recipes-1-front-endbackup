import React, { useEffect, useState } from 'react'
import AddRecipeForm from './AddRecipeForm'
import RecipeList from './RecipeList'
import EditRecipe from './EditRecipe'
// redux
import { connect } from 'react-redux'
import { signupUser, editRecipe } from '../actions/index'

import '../App.scss'


const UserDashboard = (props, { signupUser }) => {
    const users = props.users;

    console.log(users) // gave the state.users name 'users'
    console.log(props.users)// props.users is redux state
    return (
        <>
            <div className='dashboard'>
                <h1>  UserDashboard </h1>
                <div> Recipe List + Search by recipe title/category <RecipeList /></div>
                
                {/* <EditRecipe /> */}
                
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, { signupUser })(UserDashboard)
