//importing my actions, types folder sounds really appealing all of a sudden
import {
    LOGIN_ERROR,
    ADD_RECIPE,
    REMOVE_RECIPE,
    GET_RECIPE,
    FAVORITE_RECIPE,
    AXIOS_ERROR
} from "../actions/index"

//InitialState for global State
const initialState = {
    recipes: [],
    error: '',
    users: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                recipes: action.payload
            }
        case REMOVE_RECIPE:
            return {
                ...state,
                // recipes: action.payload
            }
        case GET_RECIPE:
            return {
                ...state,
                recipes: action.payload
            }
        case FAVORITE_RECIPE:
            return {

            }
        case AXIOS_ERROR: 
            return {
            ...state,
            error:''
        }
        case LOGIN_ERROR:
            return {
                ...state,
                // error: action.payload
            }
        default:
            return state
    }

}
export default rootReducer