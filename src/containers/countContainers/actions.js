import * as ActionTypes from "./actionTypes"

export const addCount = (event, currValue) => { 
    return { type: ActionTypes.ADD_COUNT, payload: currValue + 1 }
}

export const subtractCount = (event, currValue) => {
    if (currValue === 0 )
        return { type: ActionTypes.SUBTRACT_COUNT, payload: currValue }
    else 
        return { type: ActionTypes.SUBTRACT_COUNT, payload: currValue - 1 }
}

export const multiplicationCountByTwo = (event, currValue) => { 
    return { type: ActionTypes.MULTI_COUNT, payload: currValue * 2 }
}

export const multiplicationCountByFactor = (event, currValue, factor) => { 
    return { type: ActionTypes.MULTI_COUNT, payload: currValue * factor }
}

export const divideCountByTwo = (event, currValue) => { 
    return { type: ActionTypes.DIVIDE_COUNT, payload: currValue / 2 }
}

export const divideCountByFactor = (event, currValue, factor) => { 
    if (factor === 0) 
        return { type: ActionTypes.DIVIDE_COUNT, payload: currValue }
    else
        return { type: ActionTypes.DIVIDE_COUNT, payload: currValue / factor }
}