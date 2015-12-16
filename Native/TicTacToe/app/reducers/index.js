import initialState from './initialState';
import playReducer from './play';

const app = function(state, action) {
  if (typeof state === 'undefined') {
    return initialState(state);
  }
  switch(action.type) {
    case 'PLAY': return playReducer(state, action);
    case 'NEW_GAME': return initialState(state, action);
    case 'RESET_GAME': return initialState(state, action);
    default: return state;
  }
};

export default app;
