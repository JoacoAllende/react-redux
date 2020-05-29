const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USER': {
            return {
                ...state,
                users: [...state.users, action.payload.user]
             }
        }
        default:
            return state
    }
}