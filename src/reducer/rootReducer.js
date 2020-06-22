//importing my actions, types folder sounds really appealing all of a sudden
import {
    SET_ERROR,
    ADD_RECIPE,
    REMOVE_RECIPE,
    GET_RECIPE,
    FAVORITE_RECIPE
} from "../actions/index"

//InitialState for global State
const initialState = {
    recipes: [],
    error: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                // recipes: action.payload
            }
        case REMOVE_RECIPE:
            return {
                ...state,
                // recipes: action.payload
            }
        case GET_RECIPE:
            return {
                ...state,
                // recipes: action.payload
            }
        case FAVORITE_RECIPE:
            return {

            }
        case SET_ERROR:
            return {
                ...state,
                // error: action.payload
            }
        default:
            return state
    }

}
export default rootReducer