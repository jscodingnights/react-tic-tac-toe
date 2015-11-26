'user strict';

import './Row.scss';

import React from 'react';

import Cell from './Cell.jsx';

export default class Row extends React.Component {
    render() {
        return (
            <div className="Row-wrapper">
                {this.props.row.map((cell, index) => {
                     return <Cell key={index}
                                    rowId={this.props.id}
                                    columnId={index}
                                    value={cell}
                                    callback={this.props.callback}/>;
                 })}
            </div>
        );
    }
}
