import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFormFields } from 'src/app/Features/shared/models/shared';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  forgetList: IFormFields[] = [
    {
      controlName: 'email',
      label: 'Email',
      placeholder: 'write your E-mail',
      type: 'email'
    }
  ]

  onForgetPassword(forgetFormPassword: FormGroup) {
    if(forgetFormPassword.valid) {
      console.log(forgetFormPassword.value.email);
    }
  }
}
