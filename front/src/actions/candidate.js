// EXEMPLE

export const SET_USER = 'SET_USER';
export const SET_TOKEN_CANDIDATE = 'SET_TOKEN_CANDIDATE';

// il faut un payload sur l'action si on a besoin d'une information au niveau du
// reducer ET que cette information n'est pas diponible dans le state

export const setUser = (data) => ({
  type: SET_USER,
  payload: {
    user: data,
  },
});
export const setTokenCandidate = (data) => ({
  type: SET_TOKEN_CANDIDATE,
  payload: {
    tokenCandidate: data,
  },
});