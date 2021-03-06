import * as ActionTypes from './actionTypes';

export let changeCount = (state = { count: 0 }, action) => {

    for(var type in ActionTypes) {
        if (type === action.type) {
            return {...state, count: action.payload };
        }
    }
    
    return state;
}
