// EXEMPLE


// il faut un payload sur l'action si on a besoin d'une information au niveau du
// reducer ET que cette information n'est pas diponible dans le state

export const SET_USER = 'SET_USER';
export const setUser = (data) => ({
  type: SET_USER,
  payload: {
    user: data,
  },
});

export const SET_TOKEN_CANDIDATE = 'SET_TOKEN_CANDIDATE';
export const setTokenCandidate = (data) => ({
  type: SET_TOKEN_CANDIDATE,
  payload: {
    tokenCandidate: data,
  },
});

export const UPTADE_FIRSTNAME = 'UPTADE_FIRSTNAME';
export const uptadeFirstname = (data) => ({
  type: UPTADE_FIRSTNAME,
  payload: {
    firstname: data,
  },
})

export const UPTADE_LASTNAME = 'UPTADE_LASTNAME';
export const uptadeLastname = (data) => ({
  type: UPTADE_LASTNAME,
  payload: {
    lastname: data,
  },
})

export const UPTADE_EMAIL = 'UPTADE_EMAIL';
export const uptadeEmail = (data) => ({
  type: UPTADE_EMAIL,
  payload: {
    email: data,
  },
})

export const UPTADE_NUMBER = 'UPTADE_NUMBER';
export const uptadeNumber = (data) => ({
  type: UPTADE_NUMBER,
  payload: {
    number: data,
  },
})