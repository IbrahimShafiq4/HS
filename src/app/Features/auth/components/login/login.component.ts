import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFormFields } from 'src/app/Features/shared/models/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
    ]),
  });

  loginLists: IFormFields[] = [
    {
      controlName: 'email',
      label: 'Email',
      placeholder: 'Example@gmail.com',
      type: 'email'
    },
    {
      controlName: 'password',
      label: 'Password',
      placeholder: 'Enter Your Password',
      type: 'password'
    }
  ];

  onLogin(loginFormData: FormGroup) {
    if (loginFormData.valid) {
      console.log(loginFormData.value);
    }
  }
}
