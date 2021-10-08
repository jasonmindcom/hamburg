import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() addingTaskMode: boolean = false;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  onClick(){
    this.btnClick.emit();
  }

}
