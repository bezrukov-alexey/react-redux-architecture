import * as ActionTypes from './actionTypes';

const defaultState = {};

export let basket = (state = defaultState, action) => {

    for(var type in ActionTypes) {
        if (type === action.type) {
            return Object.assign({}, state, action.payload);
        }
    }
    
    return state;
}
