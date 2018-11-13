import { Action } from '@ngrx/store';

export const TRY_LOG_IN = "TRY_LOG_IN";
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export class TryLogIn implements Action{
    readonly type = TRY_LOG_IN;
}

export class LogIn implements Action {
  readonly type = LOG_IN;
}

export class LogOut implements Action {
  readonly type = LOG_OUT;
}


export type AuthActions = LogIn | LogOut;
