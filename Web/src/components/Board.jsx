import React from 'react';
import Row from './Row.jsx';

export default class Board extends React.Component {
    render() {
        return (
            <section className="board">
                {this.props.board.map((row, index) => {
                    return (
                        <Row key={index}
                             row={row}
                             onClick={(column) => this.props.onClick(index, column)}/>
                    );
                 })}
            </section>
        );
    }
}
