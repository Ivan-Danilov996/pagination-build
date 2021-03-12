import {
    FILTER_CHANGE,
} from "../actions/actionTypes";

const initialState = {
    value: ''
}

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_CHANGE: {
            const value = action.payload
            return {
                ...state, value
            }
        }
        default: {
            return state
        }
    }
}