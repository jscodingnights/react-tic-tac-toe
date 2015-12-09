import React from 'react';
import game from '../game.js';

export default class Cell extends React.Component {
    render() {
        let player;

        if (this.props.cell != null) {
            player = this.props.cell ? 'X' : 'O';
        }

        return (
            <div onClick={() => this.props.onClick()} className="cell">
                <span>{player}</span>
            </div>
        );
    }
}
