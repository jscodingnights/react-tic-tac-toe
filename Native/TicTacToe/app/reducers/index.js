import initialState from './initialState';
import { 
  playerMoveReducer, 
  currentPlayerReducer, 
  boardStateReducer 
} from './game';

const app = function(state = initialState(), action) {
  switch(action.type) {
    case 'PLAYER_MOVE': 
      let newState = playerMoveReducer(state, action);
      newState = currentPlayerReducer(newState, action);
      return boardStateReducer(newState, action);
    case 'NEW_GAME': return initialState(state, action);
    case 'RESET_GAME': return initialState(state, action);
    default: return state;
  }
};

export default app;
