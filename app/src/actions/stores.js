import fetcher from '../helpers';
import { itemsIsLoading, itemsHasErrored } from './general';

export function storesFetchDataSuccess(stores) {
    return {
        type: 'STORES_FETCH_DATA_SUCCESS',
        stores
    };
}

export function storesFetchOneSuccess(activeStore) {
    return {
        type: 'STORES_FETCH_ONE_SUCCESS',
        activeStore
    };
} 

export function storesFetchData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(stores => dispatch(storesFetchDataSuccess(stores)))
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function storesFetchOne(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(activeStore => dispatch(storesFetchOneSuccess(activeStore)))
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
