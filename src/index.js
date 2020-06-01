import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxSaga from 'redux-saga'

import App from './components/App'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddelware = reduxSaga()

const store = {...createStore(reducers, applyMiddleware(sagaMiddelware)),
                runSaga: sagaMiddelware.run(rootSaga)}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'))