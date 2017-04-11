const initialState = {
    isLoggedIn: false,
    token: null
};

export function userAuth(state = initialState, action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return action.user;
        case 'USER_SIGNUP_SUCCESS':
            return action.user;
        default:
            return state;
    }
}
