'use strict';

import './Cell.scss';

import React from 'react';

import game from '../game.js';


export default class Cell extends React.Component {
    _handleClick() {
        this.props.callback(this.props.rowId, this.props.columnId);
    }

    render() {
        return (
            <div onClick={() => this._handleClick()} className="Cell-wrapper">
                {this.props.value}
            </div>
        )
    }
}
