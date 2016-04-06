import { connect } from 'react-redux/native';
import Dimension from '../components/Dimension';
import { newGame } from '../actions/index';

function mapStateToProps(state) {
  return {
    dimension: state.dimension
  };
}

function mapDispatchToProps(dispatch) {
  return {
      newGame: (dimension) => dispatch(newGame(dimension))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dimension);
