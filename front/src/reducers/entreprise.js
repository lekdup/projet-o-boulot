// Ne pas oublier d'importer les actions comme ceci:


// import { EXEMPLE_ACTION } from '../actions/entreprise';

// => EXEMPLE "list" est accessible avec state.entreprise.list, pas state.list /!\
export const initialState = {
    offre: [],
  };


  function reducer(state = initialState, action = {}) {
    switch (action.type) {

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