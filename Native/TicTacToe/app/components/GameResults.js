import React, {
    Text,
    View,
} from 'react-native';

import styles from '../styles';

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

        return (<View />);
    }

    _renderTie() {
        return (
            <View>
                <Text style={styles.winner}>
                    It's a tie!
                </Text>
                {this._renderNewGameButton()}
            </View>
        );
    }

    _renderWinner(winner) {
        return (
            <View>
                <Text style={styles.winner}>
                    The Winner is: {winner ? 'Player X' : 'Player O'}
                </Text>
                {this._renderNewGameButton()}
            </View>
        );
    }

    _renderNewGameButton() {
        return (
            <Text onPress={() => this.props.resetGame()} style={styles.newGame}>
                Start a new Game
            </Text>
        );
    }
}
