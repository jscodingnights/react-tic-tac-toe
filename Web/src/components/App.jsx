import React from 'react';
import game from '../game.js';
import Board from './Board.jsx';
import GameResults from './GameResults.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = this._newGameState();
    }

    _newGameState() {
        return {
            board: game.createBoard(),
            turn: 0
        };
    }

    _restart() {
        this.setState(this._newGameState());
    }

    _play(row, col) {
        if (this.state.board[row][col] != null) {
            return;
        }

        let newTurn = this.state.turn + 1;
        let newBoard = game.set(this.state.board, newTurn % 2, row, col);

        this.setState({
            board: newBoard,
            turn: newTurn
        });
    }

    render() {
        let winner = game.checkBoard(this.state.board);
        return (
            <div>
                <Board
                    board={this.state.board}
                    onClick={(row, col) => this._play(row, col)} />

                <GameResults
                    winner={winner}
                    dimension={3}
                    move={this.state.move}
                    onRestartClick={() => this._restart()} />
            </div>
        );
    }
}
