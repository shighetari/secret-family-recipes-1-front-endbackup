import { axiosWithAuth } from "../utils/axiosWithAuth"
//using axiosWithAuth
export const GET_USER = "GET_USER"
export const LOGIN_ERROR = "LOGIN_ERROR" //payload for the .catch in the axios req for login
export const ADD_RECIPE = "ADD_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"
export const GET_RECIPE = "GET_RECIPE"
export const UPDATE_RECIPE = "UPDATE_RECIPE"
//tbd downbellow 
export const FAVORITE_RECIPE = "FAVORITE_RECIPE"


export const getUser = () => dispatch => {

}


//.post (Create) add
export const addRecipe = (props) => dispatch => { //Will pass correct state information once forms are complete
    axiosWithAuth()
    .post('/TBDWhenIseeData', props.recipes)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        debugger
    })
    // .finally(null)
}

//.delete (Delete)
export const removeRecipe = () => dispatch => {
    
}

//.get (Read) 
export const getRecipe = () => dispatch => {

}

//.put (Update) takes and ID and {object} to update
export const updateRecipe = () => dispatch => {

}




