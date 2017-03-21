import { combineReducers } from 'redux';
import { itemsHasErrored, itemsIsLoading } from './general';
import { stores } from './stores';

export default combineReducers({
    itemsHasErrored,
    itemsIsLoading,
    stores
});
