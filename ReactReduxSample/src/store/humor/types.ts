import type {Action} from 'redux';

export type State = {
  humorText: string;
  errorMessage: string;
  loading: boolean;
};

export type SetHumorTextAction = Action<'@humor/setHumor'> & {
  humorText: string;
};

export type SetErrorMessageAction = Action<'@humor/setErrorMessage'> & {
  errorMessage: string;
};

export type SetLoadingAction = Action<'@humor/setLoading'> & {
  loading: boolean;
};

export type Actions =
  | SetHumorTextAction
  | SetErrorMessageAction
  | SetLoadingAction;
