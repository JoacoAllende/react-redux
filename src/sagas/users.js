import { put, takeEvery, call } from 'redux-saga/effects'
import goRest from '../apis/goRest'

function* getUsers(userId) {
    return yield goRest.get(`/users/${userId}`).then(response => response.data.result)
}

function* getUsersSaga(action) {
    try {
        const user = yield call(getUsers, action.userId)
        yield put({ type: 'FETCH_USER', payload: {user} })
    } catch (error) {
        
    }
}

export default function* users() {
    yield takeEvery('GET_USERS', getUsersSaga)
}