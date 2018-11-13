

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/internal/operators/tap";
import { catchError } from "rxjs/internal/operators/catchError";
import { Store } from "@ngrx/store";
import * as fromApp from '../app.reducers';
import { Prompt } from "src/app/models/Prompt";
import * as PromptActions from '../store/prompt/prompt.actions';

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

    handleRequest(name: string, functionToExecuteOnError?: any, effect?: any, effectParams?: any): Observable<HttpClient>{
        const setting = this.settings[name];
        return this.http[setting.type](this.requestPath + setting.url)
            .pipe(
               tap(data => {
                   console.log(data);
                   return data;
               }),
               catchError(error => {
                   if(functionToExecuteOnError)
                        functionToExecuteOnError();

                   this.handleError(setting, error, effect, effectParams);

                   return of();
               })
            );
    }

    handleError(setting: any, errorResponse: any, effect: any, effectParams: any){
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

        const prompt = new Prompt(setting.domain, content, "error", errorResponse.status, effect, effectParams);
        this.store.dispatch(new PromptActions.SetPrompts([prompt]));

        if(setting.removeAfterDelay){
            this.store.dispatch(new PromptActions.TryRemovePrompt(setting.domain));
        }
    }

}