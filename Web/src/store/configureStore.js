'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleWare
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    return store
}
