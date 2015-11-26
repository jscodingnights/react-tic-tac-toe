'use strict'

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import configureStore from './store/configureStore.js';

import Overview from './components/Overview.jsx';

let store = configureStore();

export const routes = (
    <Provider store={store}>
        <Router>
            <Route path='/' component={Overview} />
        </Router>
    </Provider>
)
