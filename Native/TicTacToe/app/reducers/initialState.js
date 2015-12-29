import game from '../game';

const _initialState = {
  board: game.createBoard(3),
  winner: null,
  player: 1,
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
    let dimension = state.dimension;
    let board = game.createBoard(dimension);
    return {
      ..._initialState,
      board,
      dimension
    }
  }

  return state;
}

export default initialState;
