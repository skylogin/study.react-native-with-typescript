import type {Action} from 'redux';

export type User = {
  name: string;
  email: string;
  password: string;
};

export type State = {
  loggedIn: boolean;
  loggedUser: User;
};

export type Actions = Action;
