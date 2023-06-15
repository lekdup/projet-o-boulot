// ici le "chef des reducers", celui qui affecte chaque tiroir à un reducer
// (qui donne les noms aux tiroirs)
import { combineReducers } from 'redux';

// on importe les reducers
import candidatReducer from './candidat';
import entrepriseReducer from './entreprise';

// lien entre les tiroirs et les reducers
const rootReducer = combineReducers({
  // nom du tiroir : nom du reducer qui s'en occupe /!/
  candidat: candidatReducer,
  entreprise: entrepriseReducer,
});

export default rootReducer;