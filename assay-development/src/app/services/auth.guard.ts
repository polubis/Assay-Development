import { Route, CanLoad, UrlSegment } from "@angular/router";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { take } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private store: Store<AppState>) {}
  canLoad(route: Route, segments: UrlSegment[]){
    let isAuth: boolean;
    this.store.select(state => state.auth.authenticated)
        .pipe(
            take(1)
        )
        .subscribe(auth => {
           isAuth = auth;
        });
    if(!isAuth){
      window.location.href = "https://www.google.pl"
    }
    return isAuth;
  }
}