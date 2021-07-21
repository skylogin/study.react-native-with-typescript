import * as T from './types';

const initialState: T.State = {
  humorText: '',
  errorMessage: '',
  loading: false,
};

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@humor/setHumor':
      return {...state, humorText: action.humorText};
    case '@humor/setErrorMessage':
      return {...state, errorMessage: action.errorMessage};
    case '@humor/setLoading':
      return {...state, loading: action.loading};
  }

  return state;
};
