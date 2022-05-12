// import { INCREMENT, DECREMENT } from "./constants";
import * as  counter from './constants'
export const increment = (value) => ({
    type:counter.INCREMENT,
    value:value
})


export const decrement = (value) => ({
    type:counter.DECREMENT,
    value:value
})


export const validateDecrement = (value) => {
    return (dispatch, getState) => {
        if(getState().counter.count > 0) {
            dispatch(decrement(value))
        }
    } 
}