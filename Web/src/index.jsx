'use strict';

import './index.scss';

import React from 'react'
import { Router, Route, Link } from 'react-router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { routes } from './Routes.jsx'

ReactDOM.render(
    routes,
    document.getElementById('index')
)
