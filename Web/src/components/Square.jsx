'use strict';

import './Square.scss';

import React from 'react';

import game from '../game.js';


export default class Square extends React.Component {
    _handleClick() {
        this.props.callback(this.props.rowId, this.props.columnId);
    }

    render() {
        return (
            <div onClick={() => this._handleClick()} className="Square-wrapper">
                {this.props.value}
            </div>
        )
    }
}
