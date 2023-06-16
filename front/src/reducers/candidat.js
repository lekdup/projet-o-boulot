// Ne pas oublier d'importer les actions comme ceci:


import { SET_USER } from "../actions/candidat";

// => EXEMPLE "list" est accessible avec state.candidat.list, pas state.list /!\
export const initialState = {
    user: '',
  };


  function reducer(state = initialState, action = {}) {
    switch (action.type) {

      // Exemple ==>

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
      default:
        return state;
    }
  }
  
  export default reducer;