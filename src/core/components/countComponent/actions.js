import { ADD_COUNT, SUBTRACT_COUNT } from "./actionTypes"

export const addCount = (currValue) => { type: ADD_COUNT; payload: currValue }
export const subtractCount = (currValue) => { type: ADD_COUNT; payload: currValue }