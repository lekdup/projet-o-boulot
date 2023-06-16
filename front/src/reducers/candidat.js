// Ne pas oublier d'importer les actions comme ceci:


// import { EXEMPLE_ACTION } from '../actions/candidat';

// => EXEMPLE "list" est accessible avec state.candidat.list, pas state.list /!\
export const initialState = {
    ,
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