import { connect } from 'react-redux/native';
import Board from '../components/Board';
import playAction from '../actions/play';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    play: (row, col) => dispatch(playAction(row, col))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
