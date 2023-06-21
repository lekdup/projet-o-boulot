// Ne pas oublier d'importer les actions comme ceci:


import { SET_USER } from "../actions/candidate";
// import { EXEMPLE_ACTION } from '../actions/candidat';

import { SET_TOKEN_CANDIDATE } from "../actions/candidate";
import { UPTADE_FIRSTNAME } from "../actions/candidate";
import { UPTADE_LASTNAME } from "../actions/candidate";
import { UPTADE_NUMBER} from "../actions/candidate";
import { UPTADE_EMAIL } from "../actions/candidate";


// => EXEMPLE "tokenCandidate" est accessible avec e.tokenCandidate, pas state.tokenCandidate /!\
export const initialState = {
    user: [],
    tokenCandidate: '',
    firstname: '',
    lastname: '',
    email: '',
    number: '',
  };


  function reducer(state = initialState, action = {}) {
    switch (action.type) {

      case SET_TOKEN_CANDIDATE:
        return {
          ...state,
          tokenCandidate: action.payload.tokenCandidate
        };

      //case SET_CONNECTED_USER:
      //    return {
      //    ...state,
      //    connectedUser: action.payload.connectedUser,
      //  };
  
      case SET_USER:
        return {
          ...state,
          user: action.payload.user,
        };

        case UPTADE_FIRSTNAME:
        return {
          ...state,
          firstname: action.payload.firstname,
        };

        case UPTADE_LASTNAME:
          return {
            ...state,
            lastname: action.payload.lastname,
          };

          case UPTADE_EMAIL:
          return {
            ...state,
            email: action.payload.email,
          };

          case UPTADE_NUMBER:
          return {
            ...state,
            number: action.payload.number,
          };

      default:
        return state;
    }
  }
  
  export default reducer;