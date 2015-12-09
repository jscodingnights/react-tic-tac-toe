import React from 'react';
import Board from './Board.jsx';
import game from '../game.js';

export default class Overview extends React.Component {
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

    _restartGame() {
        this.setState(this._newGameState());
    }

    _onPlay(row, col) {
        if (this.state.board[row][col] != null) {
            return;
        }

        let newTurn = this.state.turn + 1;
        let newBoard = game.set(this.state.board, newTurn % 2 ? 0 : 1, row, col);

        this.setState({
            board: newBoard,
            turn: newTurn
        });
    }

    render() {
        let winner = game.checkBoard(this.state.board);
        let tie = this.state.turn === 9 && !winner;
        let content;

        if (winner) {
            content = this._renderWinner(winner);
        } else if (tie) {
            content = this._renderTie();
        } else {
            content = this._renderGame();
        }

        return (
            <div className="overview">
                {content}
            </div>
        );
    }

    _renderGame() {
        return <Board board={this.state.board} onClick={(row, col) => this._onPlay(row, col)} />
    }

    _renderWinner(winner) {
        return (
            <div>
                <h1 className="winner">
                    {winner.winner ? 'X' : 'O'}'s Win!
                </h1>
                {this._renderRestart()}
            </div>
        );
    }

    _renderTie() {
        return (
            <div>
                <h1 className="winner">
                    It's a tie!
                </h1>
                {this._renderRestart()}
            </div>
        );
    }

    _renderRestart() {
        return <div className="restart" onClick={() => this._restartGame()}>Restart</div>
    }
}
