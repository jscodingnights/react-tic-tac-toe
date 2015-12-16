export default function play(row, col) {
  return {
    type: 'PLAY',
    row,
    col
  };
}
