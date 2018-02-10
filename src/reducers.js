import {combineReducers} from 'redux';
import {countComponentReducer} from './core/components/countComponent/countComponent'


// Use ES6 object literal shorthand syntax to define the object shape
export const rootReducer = combineReducers({
    countComponentReducer
});