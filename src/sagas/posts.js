import { put, takeLatest, call } from 'redux-saga/effects'
import goRest from '../apis/goRest'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* getPosts() {
    return yield goRest.get('/posts').then(response => response.data.result)
}

function* getPostsSaga(action) {
    try {
        // yield delay(3000)
        const posts = yield call(getPosts)
        yield put({ type: 'FETCH_POSTS', payload: {posts} })
    } catch (error) {
        
    }
}

export default function* posts() {
    yield takeLatest('GET_POSTS', getPostsSaga)
}