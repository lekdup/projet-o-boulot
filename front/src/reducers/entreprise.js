// Ne pas oublier d'importer les actions comme ceci:

import { SET_USER_ENTREPRISE } from "../actions/entreprise";
import { SET_TOKEN_ENTREPRISE } from "../actions/entreprise";


// import { EXEMPLE_ACTION } from '../actions/entreprise';

// => EXEMPLE "list" est accessible avec state.entreprise.list, pas state.list /!\
export const initialState = {
    offre: [],
    connectedUserEntreprise: [],
  };


  function reducer(state = initialState, action = {}) {
    switch (action.type) {

      case SET_USER_ENTREPRISE:
        return {
          ...state,
          connectedUserEntreprise: action.payload.connectedUserEntreprise,
        };

        case SET_TOKEN_ENTREPRISE:
        return {
          ...state,
          tokenEntreprise: action.payload.tokenEntreprise
        };


      // Exemple ==>

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