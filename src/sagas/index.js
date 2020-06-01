import { all } from 'redux-saga/effects'

import posts from './posts'
import users from './users'

export default function* rootSaga() {
    yield all([
        posts(),
        users()
    ])
}