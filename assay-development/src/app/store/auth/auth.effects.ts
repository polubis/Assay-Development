import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {map, tap, switchMap, mergeMap} from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { of } from "rxjs";
import { CookiesService } from "src/app/services/cookies.service";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private cookiesService: CookiesService) {}
  @Effect()
  authTryLogIn = this.actions$
    .ofType(AuthActions.TRY_LOG_IN)
    .pipe(
        switchMap((action: AuthActions.TryLogIn) => {
            return of([]);
        }), 
        map(data => {
            return {
                type: AuthActions.LOG_IN
            }
        })
    );

    @Effect()
    checkAuthentication = this.actions$
        .ofType(AuthActions.CHECK_AUTH)
        .pipe(
            map((action: AuthActions.CheckAuth) => {
                // this.cookiesService.setCookie("authentication", 1, "/", "true");
                // this.cookiesService.setCookie("role", 1, "/", "Administrator");
                const isAuth = this.cookiesService.getASpecyficCookieValue("authentication");
                const role: string = this.cookiesService.getASpecyficCookieValue("role");
                return isAuth ? { type: AuthActions.LOG_IN, payload: role } : { type: AuthActions.LOG_OUT };
            }),
        )
    @Effect()
    authTryLogout = this.actions$
        .ofType(AuthActions.TRY_LOGOUT)
        .pipe(
            map((action: AuthActions.TryLogOut) => {
                this.cookiesService.deleteCookie("authentication");
                this.cookiesService.deleteCookie("role");
                window.location.href = "https://www.google.pl";
                return { type: AuthActions.LOG_OUT };
            })
        )
}
