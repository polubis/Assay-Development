import { Component, OnInit } from '@angular/core';
import { CookiesService } from "src/app/services/cookies.service";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import * as AuthActions from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private store: Store<AppState>){

  }
  ngOnInit(){
    this.store.dispatch(new AuthActions.CheckAuth());
  }
}
