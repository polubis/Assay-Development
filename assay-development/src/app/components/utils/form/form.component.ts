import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormService } from "src/app/services/form.service";
import { FormConfig, InputState } from "src/app/models/Form";
import { Subscription } from "rxjs";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  providers: [FormService]
})
export class FormComponent implements OnInit {
  @Input() classes: string;
  @Input() formConfig: FormConfig[];

  formState: InputState[];
  subscription: Subscription;
  currentlyMarkedIndex: number = -1;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.subscription = this.formService.formState.
    subscribe((state: InputState[]) => {
      console.log(state, this.formConfig);
      this.formState = state;
    });

    this.formService.createFormItems(this.formConfig);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  setMarkedIndex(index: number){
    this.currentlyMarkedIndex = index;
  }
}
