// Ne pas oublier d'importer les actions comme ceci:
// import { EXEMPLE_ACTION } from '../actions/candidat';

import { SET_TOKEN_CANDIDATE } from "../actions/candidate";

// => EXEMPLE "tokenCandidate" est accessible avec state.candidat.tokenCandidate, pas state.tokenCandidate /!\
export const initialState = {
    tokenCandidate: '',
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
  
  
      default:
        return state;
    }
  }
  
  export default reducer;