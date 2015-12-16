import { connect } from 'react-redux/native';
import Dimension from '../components/Dimension';
import newGameAction from '../actions/newGame';

function mapStateToProps(state) {
  return {
    dimension: state.dimension
  };
}

function mapDispatchToProps(dispatch) {
  return {
      newGame: (dimension) => dispatch(newGameAction(dimension))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dimension);
