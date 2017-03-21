export function stores(state = [], action) {
    switch (action.type) {
        case 'STORES_FETCH_DATA_SUCCESS':
            return action.stores;
        default:
            return state;
    }
}

export function activeStore(state = null, action) {
    switch (action.type) {
        case 'STORES_FETCH_ONE_SUCCESS':
            return action.activeStore;
        default:
            return state;
    }
}
