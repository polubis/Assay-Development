

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, range, timer, throwError } from "rxjs";
import { tap } from "rxjs/internal/operators/tap";
import { catchError } from "rxjs/internal/operators/catchError";
import { Store } from "@ngrx/store";
import * as fromApp from '../app.reducers';
import { Prompt } from "src/app/models/Prompt";
import * as PromptActions from '../store/prompt/prompt.actions';
import { take, retry, retryWhen, map, mergeMap, zip } from "rxjs/operators";

export interface RequestSettings {
  [requestName: string]: {
    type: string; // type means http request type
    url: string; // means part of url with queries or parameters
    domain: string; // means part of app which executing this request. For example Project. This is helpfull for closing error prompts from the same domain
    enableRefresh?: boolean; // this option allows user to refresh request with button click,
    removeAfterDelay?: boolean // this option allows user to remove prompt after specified delay
  };
};

@Injectable()
export class HandleRequestService{
    constructor(private http: HttpClient, private store: Store<fromApp.AppState>){}

    requestPath: string = "https://jsonplaceholder.typicode.com/";
    
    settings: RequestSettings = {
        fetchProjects: {
            type: "get", 
            url: "post",
            domain: "Projects",
            enableRefresh: true,
            removeAfterDelay: true
        }
    } 

    handleRequest(name: string, functionToExecuteOnError?: any, effect?: any): Observable<HttpClient>{
        const setting = this.settings[name];
        let errorObject: any = null;
        let counter: number = 0;
        return this.http[setting.type](this.requestPath + setting.url)
            .pipe(
             catchError(error => {
                 errorObject = { ...error };
                 throw error;
             }),
             retryWhen(attempts => range(1, 4).pipe(
                 zip(attempts, (i) => i),
                 map(i => i * i),
                 mergeMap(i => {
                     if(++counter === 4){
                        return throwError(errorObject);
                     }else{
                        return timer(i * 250);
                     }
                 })
             )),
             catchError(error => {
                if(functionToExecuteOnError)
                    functionToExecuteOnError();

                this.handleError(setting, error, effect);
                 return of(error);
             })
            );
    }

    handleError(setting: any, errorResponse: any, effect: any){
        let content: string = "";

        if(errorResponse.status === 0){
            content = "Ups, you don't have probably internet connection";
        }

        if(errorResponse.status === 401){
            content = "Your acces here is not allowed";
        }

        if(errorResponse.status === 404){
            content = "Request parameters not found";
        }

        this.store.select(state => state.prompt.prompts)
        .pipe(
            take(1)
        )
        .subscribe((prompts: Prompt[]) => {
            const indexOfPromptToSplice = prompts.findIndex(prompt => prompt.domain === setting.domain);
            const prompt = new Prompt(setting.domain, content, "error", errorResponse.status, effect);
            
            prompts.splice(indexOfPromptToSplice, 1, prompt);
            
            this.store.dispatch(new PromptActions.SetPrompts(prompts));

            if(setting.removeAfterDelay){
                this.store.dispatch(new PromptActions.TryRemovePrompt(setting.domain));
            }
        });
    }

}