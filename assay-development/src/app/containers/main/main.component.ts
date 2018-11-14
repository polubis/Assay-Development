import { Component, OnInit } from '@angular/core';
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import * as AuthActions from '../../store/auth/auth.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  
  logout(){
    this.store.dispatch(new AuthActions.TryLogOut());
  }
}
