import { combineReducers } from 'redux'
import {ADD_COUNT, SUBTRACT_COUNT} from "./actionTypes"


let changeCount = (state = { value: 0}, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {...state, value: ++action.payload }
        case SUBTRACT_COUNT:
            if (action.payload === 0)
                return state
            return {...state, value: --action.payload }
        default:
            return state
    }
}

const countReducers = combineReducers({
    changeCount
})
  
export default countReducers