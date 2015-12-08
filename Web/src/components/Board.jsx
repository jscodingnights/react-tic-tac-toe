'use strict';

import './Board.scss';

import React from 'react';

import Row from './Row.jsx';

export default class Board extends React.Component {
    render() {
        return (
            <section className="Board-wrapper">
                {this.props.board.map((row, index) => {
                     return <Row key={index}
                                 id={index}
                                 row={row}
                                 callback={this.props.callback}/>;
                 })}
            </section>
        );
    }
}
