import * as L from './login';
import * as C from './counter';
import * as CL from './clock';
import * as P from './people';

export type AppState = {
  login: L.State;
  counter: C.State;
  clock: CL.State;
  people: P.State;
};
