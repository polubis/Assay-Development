import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() minWidth: string = "unset";
  @Input() icon: string;
  @Input() value: any;
  @Input() type: string = "text";
  @Input() inputContainerClass: string = "";
  @Input() placeholder: string = "start typing..."
  @Input() mode: string = "normal";
  @Input() data: any[];

  @Output() onTyping = new EventEmitter<any>();
  @Output() onBluring = new EventEmitter<void>();
  @Output() onFocusing = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  handleTyping(e){
    this.onTyping.emit(e.target.value);
  }

  handleBlur(){
    this.onBluring.emit();
  }

  handleFocus(){
    this.onFocusing.emit();
  }

}
