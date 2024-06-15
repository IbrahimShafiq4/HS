import { Component } from '@angular/core';
import { SearchInput } from '../shared/models/shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  searchInputs: SearchInput[] = [
    { type: 'text', placeholder: 'First Input' },
  ];
  selectBoxOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  showSelectBox: boolean = true;

  handleInputValues(values: string[]) {
    console.log('Input Values:', values);
  }

  handleSelectValue(value: string) {
    console.log('Selected Value:', value);
  }
}
