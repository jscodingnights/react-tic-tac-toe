export function newGame(dimension) {
  return {
    type: 'NEW_GAME',
    dimension
  };
}

export function move(player, coord) {
  return {
    type: 'PLAYER_MOVE',
    player,
    coord
  };
}

export function resetGame() {
  return {
    type: 'RESET_GAME',
  };
}
