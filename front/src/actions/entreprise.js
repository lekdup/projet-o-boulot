

export const SET_USER_ENTREPRISE = 'SET_USER_ENTREPRISE';
export const setUserEntreprise = (data) => ({
    type: SET_USER_ENTREPRISE,
    payload: {
      userEntreprise: data,
    },
  });

export const SET_TOKEN_ENTREPRISE = 'SET_TOKEN_ENTREPRISE';
export const setTokenEntreprise = (data) => ({
  type: SET_TOKEN_ENTREPRISE,
  payload: {
    tokenEntreprise: data,
  },
});