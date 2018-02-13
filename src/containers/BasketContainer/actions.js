import * as ActionTypes from './actionTypes';
import { GetBasket } from '../../packages/ClientApi/basketApi';



export function loadBasket() {

    return dispatch => {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        // dispatch(requestPosts(subreddit))

        return GetBasket()
            .then(payload => {
                dispatch(basketLoaded(payload));
            });
    }
}

function basketLoaded(payload) {
    return { type: ActionTypes.LOAD_BASKET, payload: payload };
}