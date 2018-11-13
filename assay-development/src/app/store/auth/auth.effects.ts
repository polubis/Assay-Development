import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import {map, tap, switchMap, mergeMap} from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
    
  constructor(private actions$: Actions, private router: Router) {
    }
  @Effect()
  authTryLogIn = this.actions$
    .ofType(AuthActions.TRY_LOG_IN)
    .pipe(
        switchMap((action: AuthActions.TryLogIn) => {
            console.log("Siema");
            
            return of([]);
        }), 
        map(data => {
            console.log(data);
            return {
                type: AuthActions.LOG_IN
            }
        })
    );
}
