import game from './../game';

export default function playReducer(state, action) {
  let board = state.board;
  let move = state.move;

  if (board[action.row][action.col] != null || state.winner !== undefined && state.winner !== null) {
      return state;
  }

  board = game.set(board, move % 2, action.row, action.col);
  move = move + 1;

  let winner = game.checkBoard(board);
  if (winner) {
    winner = winner.winner;
  }
  
  return {
    ...state,
    board,
    move,
    winner
  }
}
