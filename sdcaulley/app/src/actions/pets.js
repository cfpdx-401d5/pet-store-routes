import fetcher from '../helpers';
import { itemsIsLoading, itemsHasErrored } from './general';

export function petsFetchDataSuccess(pet) {
    return {
        type: 'PETS_FETCH_DATA_SUCCESS',
        pet
    };
}

export function petsFetchData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(pet => dispatch(petsFetchDataSuccess(pet)))
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
