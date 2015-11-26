'use strict';

import './Overview.scss';

import React from 'react';

import Board from './Board.jsx';
import WinScreen from './WinScreen.jsx';

import game from '../game.js';

var defaultState = {
    board: game.createBoard(),
    turn: 0
}

export default class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = defaultState;

        this.updateRow = this.updateRow.bind(this);
        this._restartGame = this._restartGame.bind(this);
    }

    updateRow(row, column) {
        let newTurn = this.state.turn + 1;
        let newBoard = game.set(this.state.board, newTurn % 2 ? 0 : 1, row, column);

        this.setState({
            board: newBoard,
            turn: newTurn
        });
    }

    _restartGame() {
        this.setState(defaultState);
    }

    render() {
        let winner = game.checkBoard(this.state.board);

        let content;

        if (winner) {
            content = (<WinScreen winner={winner.winner} />);
        } else {
            content = (<Board board={this.state.board} callback={this.updateRow} />);
        }

        return (
            <div>
                <div className="Overview-restart" onClick={this._restartGame}>Restart</div>
                <section className="Overview-wrapper">
                    {content}
                </section>
            </div>
        );
            
    }
}
