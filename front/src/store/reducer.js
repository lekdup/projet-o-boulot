// Ne pas oublier d'importer les actions comme ceci:

//import{
//    ADD_MESSAGE, SET_CONNECTED_USER,
//} from '../actions/actions';
  
  const initialState = {
    //exemple ==>
    //connectedUser: false,
    //messages: [],
    //highestIndex: 3,
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