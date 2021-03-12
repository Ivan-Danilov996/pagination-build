import {
    SORTED_BY_PRICE,
    SORTED_BY_SIZE,
    SORTED_BY_TITLE
} from "../actions/actionTypes";
import products from '../products.json'

const initialState = {
    products,
    sortedByPrice: false,
    sortedBySize: false,
    sortedByTitle: false
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SORTED_BY_PRICE: {
            if (state.sortedByPrice) {
                return {
                    ...state, ...products.sort((a, b) => {
                        return b.price - a.price
                    }), sortedByPrice: !state.sortedByPrice
                }
            } else {
                return {
                    ...state, ...products.sort((a, b) => {
                        return a.price - b.price
                    }), sortedByPrice: !state.sortedByPrice
                }
            }
        }
        case SORTED_BY_SIZE: {
            if (state.sortedBySize) {
                return {
                    ...state, ...products.sort((a, b) => {
                        return parseInt(b.sizes[0].size.substr(0, 2)) - parseInt(a.sizes[0].size.substr(0, 2))
                    }), sortedBySize: !state.sortedBySize
                }
            } else {
                return {
                    ...state, ...products.sort((a, b) => {
                        return parseInt(a.sizes[0].size.substr(0, 2)) - parseInt(b.sizes[0].size.substr(0, 2))
                    }), sortedBySize: !state.sortedBySize
                }
            }
        }
        case SORTED_BY_TITLE: {
            if (state.sortedByTitle) {
                return {
                    ...state,
                    ...products.sort((a, b) => {
                        const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
                        if (titleA < titleB) //сортируем строки по возрастанию
                            return -1
                        if (titleA > titleB)
                            return 1
                        return 0 // Никакой сортировки
                    }),
                    sortedByTitle: !state.sortedByTitle
                }
            } else {
                return {
                    ...state,
                    ...products.sort((a, b) => {
                        const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
                        if (titleA > titleB) //сортируем строки по убыванию
                            return -1
                        if (titleA < titleB)
                            return 1
                        return 0 // Никакой сортировки
                    }),
                    sortedByTitle: !state.sortedByTitle
                }
            }
        }
        default: {
            return state
        }
    }
}