import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss'],
})
export class SharedHeaderComponent {
  @Input() mainHeader: string = '';
  @Input() mainHeaderText: string = '';
  @Input() btnVisibility: boolean = false;
  @Input() btnText: string = '';

  @Output() btnEvent: EventEmitter<string> = new EventEmitter<string>();

  /*

    3 steps
    1 to make a function
    2 emit the data inside the function
    3 go to the parentComponent
      you will make a call for the eventEmitter

    event           emitter
    any js          store some data and output them to the parent component
    event

  */

  btnSubmission(data: string) {
    this.btnEvent.emit(data);
  }
}
