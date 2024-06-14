import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent<T extends { [key: string]: any }> {
  @Input() totalCount: number = 0;
  @Input() tableHeaders: string[] = [];
  @Input() tableBodyContent: T[] = [];
  @Input() displayHeaders: { [key: string]: any } = {}
  
}
