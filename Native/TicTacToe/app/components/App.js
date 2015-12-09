import React, {
    TextInput,
    View,
    Text
} from 'react-native';

import styles from '../styles';
import game from '../game';

import GameResults from './GameResults';
import Dimension from './Dimension';
import Board from './Board';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = this._initialState();
    }

    _initialState(dimension = 3) {
        return {
            board: game.createBoard(dimension),
            winner: null,
            move: 0,
            dimension: dimension
        };
    }

    _onPress(row, col) {
        if (this.state.winner != null) {
            return;
        }

        let currentPlayer = this.state.move % 2;
        let board = game.set(this.state.board, currentPlayer, row, col);
        let winner = game.checkBoard(board);
        let dimension = this.state.dimension;
        let move = this.state.move + 1;

        if (winner) {
            winner = winner.winner;
        }

        this.setState({
            board,
            move,
            winner,
            dimension
        });
    }

    _newGame(dimension = this.state.dimension) {
        let newState = this._initialState(parseInt(dimension, 10));
        this.setState(newState);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Dimension
                        dimension={this.state.dimension}
                        onChangeDimension={(size) => this._newGame(size)} />
                </View>
                <View style={styles.body}>
                    <Board
                        board={this.state.board}
                        onPress={(row, col) => this._onPress(row,col)} />
                </View>
                <View style={styles.footer}>
                    <GameResults
                        move={this.state.move}
                        dimension={this.state.dimension}
                        winner={this.state.winner}
                        onGameReset={() => this._newGame()} />
                </View>
            </View>
        );
    }
}
