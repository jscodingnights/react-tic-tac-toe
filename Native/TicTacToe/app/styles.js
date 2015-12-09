import React, {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#26a69a'
  },

  winner: {
    marginTop: 20,
  },

  dimension: {
    width: 40,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'white'
  },

  newGame: {
    marginTop: 20,
    padding: 5,
    backgroundColor: '#ffd54f',
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
  },

  /**
   * Main Screen Layout
   */

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  body: {
    flex: 5,
  },
  footer: {
    flex: 1
  },

  /**
   * Game Board
   */

  board: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff6e40',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: -1,
    marginTop: -1
  },
  cellText: {
    color: 'white'
  }
});
