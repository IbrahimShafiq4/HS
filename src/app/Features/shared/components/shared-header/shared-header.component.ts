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

  btnSubmission(data: string) {
    this.btnEvent.emit(data);
  }
}
