import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';

let changeCount = (state = { count: 0 }, action) => {

    for(var type in ActionTypes) {
        if (type === action.type) {
            return {...state, count: action.payload };
        }
    }
    
    return state;
}

export default combineReducers({
    changeCount
});
