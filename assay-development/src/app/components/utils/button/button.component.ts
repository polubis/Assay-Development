import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <div class="btn-container" [ngStyle]="styles">
    <button [class]="isClickingEnable ? 'btn' : ''" (click)="handleClick()" [ngClass]="btnClass" [type]="type">
      <i *ngIf="icon !== ''" class="material-icons">{{icon}}</i>
      <span>
        {{title}}
      </span>
    </button>
  </div>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnClass: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() styles: string;
  @Input() isClickingEnable: boolean = true;
  @Input() type: string = "button";
  @Output() onButtonClick = new EventEmitter<void>();

  handleClick(){
    this.onButtonClick.emit();
  }
}
