import { combineReducers } from 'redux'
import * as ActionTypes from "./actionTypes"

let changeCount = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COUNT:
            return {...state, count: action.payload }
        case ActionTypes.SUBTRACT_COUNT:
            return {...state, count: action.payload }
        case ActionTypes.MULTI_COUNT:
            return {...state, count: action.payload }
        case ActionTypes.DIVIDE_COUNT:
            return {...state, count: action.payload }
        default:
            return state
    }
}

const countReducers = combineReducers({
    changeCount
})

export default countReducers