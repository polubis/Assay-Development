
import { Injectable } from "@angular/core";
import { InputState, FormConfig } from "src/app/models/Form";
import { Subject } from "rxjs";


@Injectable()
export class FormService {
  formState = new Subject<InputState[]>();
  
  createFormItems(formConfig: FormConfig[]){
    const count: number = formConfig.length;
    
    const formState: InputState[] = formConfig.map(config => {
      return new InputState(config.initialValue ? config.initialValue : "", true, [], config.initialData ? config.initialData : []);
    });
    console.log(formState);

    this.formState.next(formState);
  }
}