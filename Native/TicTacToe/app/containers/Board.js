import { connect } from 'react-redux/native';
import Board from '../components/Board';
import { move } from '../actions/index';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    move: (player, coord) => dispatch(move(player, coord))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
