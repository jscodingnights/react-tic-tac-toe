import game from '../game';

const _initialState = {
  board: game.createBoard(3),
  winner: null,
  move: 0,
  dimension: 3
};

function initialState(state = _initialState, action) {
  if (action && action.type === 'NEW_GAME') {
    let dimension = parseInt(action.dimension, 10);
    let board = game.createBoard(dimension);
    return {
      ..._initialState,
      dimension,
      board
    }
  }

if (action && action.type === 'RESET_GAME') {
    let board = game.createBoard(state.dimension);
    return {
      ..._initialState,
      board
    }
  }

  return state;
}

export default initialState;
