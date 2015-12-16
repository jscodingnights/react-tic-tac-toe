import { connect } from 'react-redux/native';
import GameResults from '../components/GameResults';
import resetAction from '../actions/resetGame';

function mapStateToProps(state)  {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    resetGame: () => dispatch(resetAction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameResults);
