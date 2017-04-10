import { combineReducers } from 'redux';
import { itemsHasErrored, itemsIsLoading } from './general';
import { stores, activeStore } from './stores';
import { activePet } from './pets';

export default combineReducers({
    itemsHasErrored,
    itemsIsLoading,
    stores,
    activeStore,
    activePet
});
