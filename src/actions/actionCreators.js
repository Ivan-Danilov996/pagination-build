import {
    SORTED_BY_PRICE,
    CHANGE_CURRENT_PAGE,
    INC_CURRENT_PAGE,
    DEC_CURRENT_PAGE,
    SORTED_BY_SIZE,
    SORTED_BY_TITLE,
    FILTER_CHANGE
} from "./actionTypes";

export function sortedByPrice() {
    return { type: SORTED_BY_PRICE }
}

export function sortedBySize() {
    return { type: SORTED_BY_SIZE }
}

export function sortedByTitle() {
    return { type: SORTED_BY_TITLE }
}

export function changeCurrentPage(index) {
    return { type: CHANGE_CURRENT_PAGE, payload: index }
}

export function incCurrentPage() {
    return { type: INC_CURRENT_PAGE }
}

export function decCurrentPage() {
    return { type: DEC_CURRENT_PAGE }
}

export function filterChange(value) {
    return {type: FILTER_CHANGE, payload: value}
}