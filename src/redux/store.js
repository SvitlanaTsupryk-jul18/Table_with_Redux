import { createStore } from 'redux';
export const SET_USERS = "SET_USERS";
export const CHANGE_PAGE = "CHANGE_PAGE";

const initialState = {
    users: [],
    currentPage: 1,
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case CHANGE_PAGE:
            let value = action.currentPage;
            console.log(action.currentPage);
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

