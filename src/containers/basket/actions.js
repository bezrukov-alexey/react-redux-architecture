import * as ActionTypes from './actionTypes'
import { getBasket } from '../../managers/basketManager'
import * as basketLineLogic from '../../packages/BusinessLogics/basket/basketLine'

export function loadBasket() {

    return async dispatch => {

        var basket = await getBasket()
        return dispatch(basketLoaded(basket))
    }
}

function basketLoaded(payload) {
    return { type: ActionTypes.LOAD_BASKET, payload: payload }
}

export function updateBasketLineQuanity(id, quanity) {

    return (dispatch, getState) => {
        let state = Object.assign({}, getState().basket)
        state.lines = state.lines.map(line => {
                                  
            if (line.id === id) {
                var updatedLine = {
                    ...line,
                    quanity
                }
                //buisiness Logic
                if (basketLineLogic.ValidateLine(updatedLine))
                    return updatedLine

            }
            return line
        })
        
        return dispatch(updatedBasketLineQuanity(state))
    }
    
}

function updatedBasketLineQuanity(payload) {
    return {type: ActionTypes.UPDATE_LINE_QUANITY, payload: payload}
}
