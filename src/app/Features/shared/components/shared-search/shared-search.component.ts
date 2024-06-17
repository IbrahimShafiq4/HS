import { Component, EventEmitter, Input, Output, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { SearchInput } from '../../models/shared';

@Component({
  selector: 'app-shared-search',
  templateUrl: './shared-search.component.html',
  styleUrls: ['./shared-search.component.scss'],
})
export class SharedSearchComponent {
  @Input() searchInputs: SearchInput[] = [];
  @Input() showSelectBox: boolean = false;
  @Input() selectBoxOptions: string[] = [];
  @Input() searchByVariable: string = '';
  @Output() inputValues: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() selectValues: EventEmitter<string> = new EventEmitter<string>();

  inputData: string[] = [];
  selectData: string = '';

  inputChange(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputData[index] = target.value;
    this.inputValues.emit(this.inputData)
  }

  selectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectData = target.value;
    this.selectValues.emit(this.selectData);
  }

  getColClass(index: number, isLast: boolean): string {
    if (this.showSelectBox) {
      if (this.searchInputs.length == 1 || index == 0) {
        return 'col-md-6'
      }

      if (this.searchInputs.length >= 2 && isLast) {
        return 'col-md-3'
      }
    } else {
      if (this.searchInputs.length == 1 || this.searchInputs.length === 2) {
        return 'col-md-6'
      }
    }

    return ''
  }
}
