import React from 'react';
import Cell from './Cell.jsx';

export default class Row extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.row.map((cell, index) => {
                    return <Cell key={index}
                        cell={cell}
                        onClick={() => this.props.onClick(index)} />;
                 })}
            </div>
        );
    }
}
