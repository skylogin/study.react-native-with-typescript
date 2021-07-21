/* eslint-disable @typescript-eslint/no-unused-vars */
import type {Dispatch} from 'redux';
import * as U from '../../utils';
import type * as T from './types';

export const loginAction = (loggedUser: T.User): T.LoginAction => ({
  type: 'login',
  loggedUser,
});

export const logoutAction = (): T.LogoutAction => ({
  type: 'logout',
});

export const loggedUserKey = 'loggedUser';

export const signUpAction = (loggedUser: T.User) => (dispatch: Dispatch) => {
  U.writeToStorage(loggedUserKey, JSON.stringify(loggedUser))
    .then(() => {
      dispatch(loginAction(loggedUser));
    })
    .catch(e => {
      // 저장시 오류는 무시
      dispatch(loginAction(loggedUser));
    });
};
