import { connect } from 'react-redux/native';
import GameResults from '../components/GameResults';
import { resetGame } from '../actions/index';

function mapStateToProps(state)  {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    resetGame: () => dispatch(resetGame())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameResults);
