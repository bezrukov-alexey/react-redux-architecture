import { ADD_COUNT, SUBTRACT_COUNT } from "./actionTypes"

export const addCount = (event, currValue) => { 
    return { type: ADD_COUNT, payload: currValue + 1 }
}

export const subtractCount = (event, currValue) => {
    if (currValue === 0 )
        return { type: SUBTRACT_COUNT, payload: currValue }
    else 
        return { type: SUBTRACT_COUNT, payload: currValue - 1 }
}