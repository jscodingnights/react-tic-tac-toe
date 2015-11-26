'user strict';

import './Row.scss';

import React from 'react';

import Square from './Square.jsx';

export default class Row extends React.Component {
    render() {
        return (
            <div className="Row-wrapper">
                {this.props.row.map((square, index) => {
                     return <Square key={index}
                                    rowId={this.props.id}
                                    columnId={index}
                                    value={square}
                                    callback={this.props.callback}/>;
                 })}
            </div>
        );
    }
}
