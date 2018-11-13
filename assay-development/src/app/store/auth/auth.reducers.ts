import * as AuthActions from './auth.actions';

export interface State {
  authenticated: boolean;
}

const initialState: State = {
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOG_IN:
        return {
            ...state,
            authenticated: true
        }
    case AuthActions.LOG_OUT:
        return {
            ...state,
            authenticated: false
        }
    default:
      return state;
  }
}
