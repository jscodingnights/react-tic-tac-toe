'use strict';

import './Overview.scss';

import React from 'react';

import Board from './Board.jsx';
import WinScreen from './WinScreen.jsx';

import game from '../game.js';

var board = new game.createBoard();

export default class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: board,
            turn: 0
        };

        this.updateRow = this.updateRow.bind(this);
    }

    updateRow(row, column) {
        let newTurn = this.state.turn + 1;
        let newBoard = game.set(this.state.board, newTurn % 2 ? 0 : 1, row, column);

        this.setState({
            board: newBoard,
            turn: newTurn
        });
    }

    render() {
        let winner = game.checkBoard(this.state.board);

        let winMessage;

        if (winner) {
            return (
                <section className="Overview-wrapper">
                    <WinScreen winner={winner.winner} />
                </section>
            );
        }

        return (
            <section className="Overview-wrapper">

                <Board board={this.state.board} callback={this.updateRow} />
                {winMessage}
            </section>

        )
    }
}
