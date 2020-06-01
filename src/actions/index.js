export const getPosts = () => ({
    type: 'GET_POSTS'
})

export const cancelGetPosts = () => ({
    type: 'CANCEL_GET_POSTS'
})

export const getUsers = userId => ({
    type: 'GET_USERS',
    userId
})