// import { createStore, combineReducers } from 'redux';
import { createStore } from 'redux';

const initialState = {
    users: [],
    currentPage: 1,
}

// import loadingReducer from './redux/loading'
// import productsReducer from './redux/products'
// import basketReducer, { getItemsCount } from './redux/basket'

// const reducer = (state = {}, action) => {
//   return {
//     isLoading: loadingReducer(state.isLoading, action),
//     products: productsReducer(state.products, action),
//     basketItems: basketReducer(state.basketItems, action),
//   };
// };
export const setUsers = (users) => {
    return {
        type: "SET_USERS",
        users: users,
    };
};



const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users],
            }
        default:
            return state;
    }
};
// const reducer2 = combineReducers({
//   isLoading: loadingReducer, // true
//   products: productsReducer, // []
//   basketItems: basketReducer, // []
// });

const store = createStore(reducer, initialState);

store.subscribe(() => {
    console.log(store.getState());
})

export default store;

// export const getBasketItemsCount = (state) => {
//   return getItemsCount(state.basketItems);
// };