import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() minWidth: string = "unset";
  @Input() icon: string;
  @Input() type: string = "text";
  @Input() inputClass: string = "";
  @Input() placeholder: string = "start typing..."
  @Input() mode: string = "normal";
  
  constructor() { }

  ngOnInit() {
  }

  handleTyping(event){
    console.log(event.target.value);
  }

}
