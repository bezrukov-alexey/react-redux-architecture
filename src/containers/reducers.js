import { combineReducers } from 'redux';
import { basket } from './basket/reducers';
import { changeCount } from './countContainers/reducers';

export default combineReducers({
    basket,
    changeCount
});
