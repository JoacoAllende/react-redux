import _ from 'lodash'
import goRest from '../apis/goRest'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    const usersId = _.uniq(_.map(getState().posts, 'user_id'))
    usersId.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async dispatch => {
    const posts = await goRest.get('/posts').then(response => response.data.result)
    dispatch({ type: 'FETCH_POSTS', payload: posts })
}

export const fetchUser = id => async (dispatch, getState) => {
    const user = await goRest.get(`/users/${id}`).then(response => response.data.result)
    dispatch({ type: 'FETCH_USER', payload: user })
}