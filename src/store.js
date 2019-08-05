import { createStore } from 'redux';

const initialState = {
    users: [],
    currentPage: 1,
}

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

const store = createStore(reducer, initialState);

store.subscribe(() => {
    console.log(store.getState());
})

export default store;

export const usersCount = (state) => {
    return state.users.length;
};




///// variant2

// const loadingReducer = (state = [], action) => {
//     switch (action.type) {
//         case "SET_USERS":
//             return {
//                 ...state,
//                 users: action.users,
//             }
//         default:
//             return state;
//     }
// };

// const paginationReducer = (state = 1, action) => {
//     switch (action.type) {
//         case "CHANGE_PAGE":
//             let value = action.value;
//             if (!action.target === "button") {
//                 return state
//             }
//             if (value === "next") {
//                 if (state < 4) {
//                     return {
//                         currentPage: state + 1
//                     }
//                 } else return state;
//             }
//             if (value === "prev") {
//                 if (state > 1) {
//                     return {
//                         currentPage: state - 1
//                     }
//                 } else return state;
//             }
//             return {
//                 currentPage: +value
//             }
//         default:
//             return state;
//     }
// };

// const reducer = (state = {}, action) => {
//     return {
//         users: loadingReducer(state.users, action),
//         currentPage: paginationReducer(state.currentPage, action)
//     }
// };


/// var3
// import { createStore, combineReducers } from 'redux';

// export const setUsers = (users) => {
//     return {
//         type: "SET_USERS",
//         users: users,
//     };
// };

// export const changePage = (event) => {
//     return {
//         type: "CHANGE_PAGE",
//         value: event.target.value,
//     };
// };
// import loadingReducer from './redux/users'
// import paginationReducer from './redux/p'

// const reducer2 = combineReducers({
//   users: loadingReducer,
//   currentPage: paginationReducer
// });