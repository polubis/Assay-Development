


import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as fromFilter from './filter.reducers';
import { Store } from "@ngrx/store";
import { HandleRequestService } from "src/app/services/handle-request-service";

@Injectable()
export class FilterEffects {
  constructor(
    private actions$: Actions,
    private handleRequestService: HandleRequestService,
    private store: Store<fromFilter.State>
  ) {}

}