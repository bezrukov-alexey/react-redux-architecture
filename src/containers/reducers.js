import { combineReducers } from 'redux';
import { basket } from './BasketContainer/reducers';
import { changeCount } from './countContainers/reducers';

export default combineReducers({
    basket,
    changeCount
});
