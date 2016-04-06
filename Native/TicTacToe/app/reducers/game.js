import game from './../game';

export function playerMoveReducer(state, action) {
  let board = state.board;

  if (board[action.coord.row][action.coord.col] != null || state.winner !== undefined && state.winner !== null) {
      return state;
  }

  board = game.set(board, action.player, action.coord.row, action.coord.col);

  return {
    ...state,
    board
  }
}

export function currentPlayerReducer(state, action) {
  let player = action.player === 0 ? 1 : 0;
  return {
    ...state,
    player
  }
}

export function boardStateReducer(state, action) {
  let winner = game.checkBoard(state.board);
  if (winner) {
    winner = winner.winner;
  }
  
  return {
    ...state,
    winner
  }
}
