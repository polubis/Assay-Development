


import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { map, filter, take, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import * as fromApp from '../../app.reducers';
import * as PromptActions from '../../store/prompt/prompt.actions';
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { Prompt } from "src/app/models/Prompt";

@Injectable()
export class PromptEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) {}
  @Effect()
  clearPrompt = this.actions$
    .ofType(PromptActions.TRY_REMOVE_PROMPT)
    .pipe(
      debounceTime(5000),
      filter((value: PromptActions.TryRemovePrompt) => {
        const domain: string = value.payload;
        let shouldLetRemovePrompt = false;
        
        this.store.select("prompt")
        .pipe(
            map(item => {
                return item.prompts;
            }),
            tap((prompts: Prompt[]) => {
                prompts.forEach(prompt => {
                    if(prompt.domain === domain)
                        shouldLetRemovePrompt = true;
                });
            })
        )
        .subscribe();

        return shouldLetRemovePrompt;
      }),   
      map((action: PromptActions.TryRemovePrompt) => {
        const domain: string = action.payload;
        return {
            type: PromptActions.CHANGE_PROMPTS,
            payload: []
        }
      }),
    );
}