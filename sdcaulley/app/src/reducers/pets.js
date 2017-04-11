export function activePet(state = null, action) {
    switch (action.type) {
        case 'PETS_FETCH_DATA_SUCCESS':
            return action.pet;
        default:
            return state;
    }
}
