export const SET_USER_ENTREPRISE = 'SET_USER_ENTREPRISE';
export const setUserEntreprise = (data) => ({
    type: SET_USER_ENTREPRISE,
    payload: {
      user: data,
    },
  });