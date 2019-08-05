// import { createStore, combineReducers } from 'redux';
import { createStore } from 'redux';
import { per_page } from './Pagination'


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
        // value: 1,
        // currentPage: 1
    };
};

// export const changePage = (event) => {
//     return {
//         type: "CHANGE_PAGE",
//         value: event.target.value,
//     };
// };



const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.users,
            }
        case "CHANGE_PAGE":
            let value = action.value;
            if (!action.target === "button") {
                return state
            }
            if (value === "next") {
                if (state.currentPage < 4) {
                    return {
                        ...state,
                        currentPage: state.currentPage + 1
                    }
                } else return state;
            }
            if (value === "prev") {
                if (state.currentPage > 1) {
                    return {
                        ...state,
                        currentPage: state.currentPage - 1
                    }
                } else return state;
            }
            return {
                ...state,
                currentPage: +value
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