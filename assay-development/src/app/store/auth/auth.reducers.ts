import * as AuthActions from './auth.actions';

export interface State {
  authenticated: boolean;
  role: string
}

const initialState: State = {
  authenticated: false,
  role: ""
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOG_IN:
        return {
            ...state,
            authenticated: true,
            role: action.payload
        }
    case AuthActions.LOG_OUT:
        return {
            ...state,
            authenticated: false,
            role: ""
        }
    default:
      return state;
  }
}
