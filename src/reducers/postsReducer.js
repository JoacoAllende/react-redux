const initialState = {
    posts: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_POSTS': {
            return {
                ...state,
                posts: action.payload.posts
            }
        }
        default:
            return state
    }
}