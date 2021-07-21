import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import {logger} from './logger';

export const makeStore = () => {
  let middlewares: any[] = [];
  if (__DEV__) {
    middlewares.push(logger);
  }
  return createStore(rootReducer, applyMiddleware(...middlewares));
};
