import { createStore, combineReducers } from "redux";
import productsReducer from '../reducers/products'
import paginationReducer from '../reducers/pagination'
import filterReducer from '../reducers/filter'

const reducer = combineReducers({
    productsReducer,
    paginationReducer,
    filterReducer
});


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store