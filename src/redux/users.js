// export const setUsers = (users) => {
//     return {
//         type: "SET_USERS",
//         users: users,
//     };
// };


const productsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_USERS":
            return action.users;
        default:
            return state;
    }
};

export default productsReducer;