import * as T from './types';

const initialState: T.State = {
  currentDate: '',
  currentTime: '',
};

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@clock/setTime':
      return {currentDate: action.currentDate, currentTime: action.currentTime};
  }

  return state;
};
