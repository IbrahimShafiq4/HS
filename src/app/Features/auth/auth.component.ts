import { Component, inject } from '@angular/core';
import { SearchInput } from '../shared/models/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  inputsData: SearchInput[] = [
    { type: 'text', placeholder: 'First Input' },
    { type: 'text', placeholder: 'Second Input' },
  ];

  selectOptions: string[] = ['First Option', 'Second Option'];

  handleInputValues(data: string[]) {
    const firstInputData = data.filter((_, index) => index !== 1);
    if (firstInputData.length > 0) {
      console.log(firstInputData);
    }
  }

  handleSelectValues(data: string) {
    console.log(`SelectValues '${data}'`);
  }
}
