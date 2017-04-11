import fetcher from '../helpers';
import { itemsHasErrored } from './general';

export function userLoginSuccess(user) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        user
    };
}

export function userSignupSuccess(user) {
    return {
        type: 'USER_SIGNUP_SUCCESS',
        user
    };
}

export function setLogin(isLoggedIn) {
    return {
        type: 'SET_LOGIN',
        isLoggedIn
    };
}

export function sendLogin(options) {
    return (dispatch) => {
        fetcher(options)
        .then(user => dispatch(userLoginSuccess(user)))
        .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function sendSignUp(options) {
    return (dispatch) => {
        fetcher(options)
        .then(user => {
            dispatch(userSignupSuccess(user));
        })
        .catch(() => dispatch(itemsHasErrored(true)));
    }; 
}
