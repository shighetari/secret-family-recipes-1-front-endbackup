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
export const AXIOS_ERROR = "AXIOS_ERROR" // testing

export const getUser = () => dispatch => {

}


//.post (Create) add
export const addRecipe = (newRecipe) => dispatch => { //Will pass correct state information once forms are complete
    axiosWithAuth()
    .post('/TBDWhenIseeData', newRecipe)
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
axiosWithAuth()
.get('/tbd')
.then((res) => {
    console.log(res) // waiting to see what the data looks like
    dispatch({ type: GET_RECIPE, payload: res.data})
})
.catch((err) => {
    console.log(err)
    dispatch({type: AXIOS_ERROR, payload: err.data})
})
}


//.put (Update) takes and ID and {object} to update
export const editRecipe = () => dispatch => {

}




