export function stores(state = [], action) {
    switch (action.type) {
        case 'STORES_FETCH_DATA_SUCCESS':
            return action.stores;
        default:
            return state;
    }
}
