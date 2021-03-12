import {
    CHANGE_CURRENT_PAGE,
    INC_CURRENT_PAGE,
    DEC_CURRENT_PAGE
} from "../actions/actionTypes";

const initialState = {
    currentPage: 0
}

export default function paginationReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CURRENT_PAGE: {
            const index = action.payload
            return {
                ...state, currentPage: index
            }
        }
        case INC_CURRENT_PAGE: {
            return {
                ...state, currentPage: state.currentPage + 1
            }
        }
        case DEC_CURRENT_PAGE: {
            return {
                ...state, currentPage: state.currentPage - 1
            }
        }
        default: {
            return state
        }
    }
}