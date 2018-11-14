import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <div class="btn-container">
    <button [class]="btnClass" (click)="handleClick()">
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
  @Output() onButtonClick = new EventEmitter<void>();

  handleClick(){
    this.onButtonClick.emit();
  }
}
