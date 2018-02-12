import { combineReducers } from 'redux'
import { ADD_COUNT, SUBTRACT_COUNT } from "./actionTypes"


let changeCount = (state = { count: 0}, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {...state, count: action.payload }
        case SUBTRACT_COUNT:
            return {...state, count: action.payload }
        default:
            return state
    }
}

const countReducers = combineReducers({
    changeCount
})
  
export default countReducers