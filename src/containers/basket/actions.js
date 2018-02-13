import * as ActionTypes from './actionTypes'
import { getBasket } from '../../managers/basketManager'



export function loadBasket() {

    return async dispatch => {

        var basket = await getBasket()
        return dispatch(basketLoaded(basket))
    }
}

function basketLoaded(payload) {
    return { type: ActionTypes.LOAD_BASKET, payload: payload }
}