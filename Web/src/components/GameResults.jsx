import React from 'react';
import game from '../game.js';

export default class GameResults extends React.Component {
    render() {
        let dimension = this.props.dimension;
        let winner = this.props.winner;
        let tie = this.props.move === dimension*dimension && !winner;

        if (winner != null) {
            return this._renderWinner(winner);
        } else if (tie) {
            return this._renderTie();
        }

        return (<div />);
    }

    _renderTie() {
        return (
            <div className="gameResults">
                <h1 className="winner">
                    It's a tie!
                </h1>
                {this._renderRestart()}
            </div>
        );
    }

    _renderWinner(winner) {
        return (
            <div className="gameResults">
                <h1 className="winner">
                    {winner.winner ? 'X' : 'O'}'s Win!
                </h1>
                {this._renderNewGameButton()}
            </div>
        );
    }

    _renderNewGameButton() {
        return <div className="restart" onClick={() => this.props.onRestartClick()}>Restart</div>
    }
}
