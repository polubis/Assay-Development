import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './store/auth/auth.reducers';
import * as fromPrompt from './store/prompt/prompt.reducers';

export interface AppState {
  auth: fromAuth.State,
  prompt: fromPrompt.State
};

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  prompt: fromPrompt.promptReducer
};
