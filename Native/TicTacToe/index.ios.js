/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var game = require('./game');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} = React;

class Winner extends React.Component {
  render() {
    const renderWinner = () => {
      if (this.props.winner === 0) {
        return 'Player 1';
      }

      if (this.props.winner === 1) {
        return 'Player 2';
      }

      return '';
    };

    return (
      <Text style={styles.winner}>
        The Winner is: {renderWinner()}
      </Text>
    );
  }
};

class NewGame extends React.Component {
  constructor() {
    super();
    this.state = {
      dimension: 3
    }
  }

  render() {
    return (
      <Text onPress={this.props.startNewGame} style={styles.newGame}>
        Start a new Game
      </Text>
    );
  }
}

class Field extends React.Component {
  format(value) {
    if (value === 0) {
      return 'X';
    }

    if (value === 1) {
      return 'O';
    }
  }

  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={() => this.props.buttonPress()}>
        <Text style={styles.buttonText}>{this.format(this.props.y)}</Text>
      </TouchableHighlight>
    );
  }
};

class Row extends React.Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        {this.props.x.map((y, indexY) => {
          return <Field buttonPress={this.props.buttonPress(this.props.indexX, indexY)} y={y}></Field>
        })}
      </View>
    );
  }
};

var TicTacToe = React.createClass({
  getInitialState(dimension = 3) {
    var state = {
      board: game.createBoard(dimension),
      winner: undefined,
      currentPlayer: 0,
      dimension: dimension.toString()
    };

    return state;
  },
  buttonPress(x, y) {
    return () => {
      if (this.state.winner) {
        return;
      }

      let board = game.set(this.state.board, this.state.currentPlayer, x, y);
      let currentPlayer = this.state.currentPlayer === 0 ? 1 : 0;
      let winner = game.checkBoard(board);
      let dimension = this.state.dimension;
      if (winner) {
        winner = winner.winner;
      }
      this.setState({ board, currentPlayer, winner, dimension });
    }
  },
  newGame(dimension) {
    let newState = this.getInitialState(dimension);
    this.replaceState(newState);
  },
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <TextInput
            style={styles.dimension}
            onChangeText={(dimension) => this.newGame(dimension)}
            value={this.state.dimension}
          />
        </View>

        {this.state.board.map((x, indexX) => {
          return <Row key={indexX} x={x} indexX={indexX} buttonPress={this.buttonPress}></Row>
        })}

        <Winner winner={this.state.winner}></Winner>

        <NewGame startNewGame={this.newGame}></NewGame>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#eee',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
  },
  winner: {
    marginTop: 20
  },
  dimension: {
    width: 40,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center'
  },
  newGame: {
    marginTop: 20,
    padding: 5,
    backgroundColor: '#0F0',
    borderWidth: 1,
    borderColor: '#AAA'
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);
