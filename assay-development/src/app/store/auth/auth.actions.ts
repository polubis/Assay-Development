import { Action } from '@ngrx/store';

export const TRY_LOG_IN = "[Auth] TRY_LOG_IN";
export const TRY_LOGOUT = "[Auth] TRY_LOGOUT";
export const LOG_IN = '[Auth] LOG_IN';
export const LOG_OUT = '[Auth] LOG_OUT';
export const CHECK_AUTH = '[Auth] CHECK_AUTH';

export class TryLogIn implements Action{
    readonly type = TRY_LOG_IN;
}

export class LogIn implements Action {
  readonly type = LOG_IN;
  constructor(public payload: string){}
}

export class LogOut implements Action {
  readonly type = LOG_OUT;
}

export class CheckAuth implements Action{
  readonly type = CHECK_AUTH;
}
export class TryLogOut implements Action{
  readonly type = TRY_LOGOUT;
}


export type AuthActions = LogIn | LogOut;
