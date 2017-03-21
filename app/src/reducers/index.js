import { combineReducers } from 'redux';
import { itemsHasErrored, itemsIsLoading } from './general';
import { stores, activeStore } from './stores';

export default combineReducers({
    itemsHasErrored,
    itemsIsLoading,
    stores,
    activeStore
});
