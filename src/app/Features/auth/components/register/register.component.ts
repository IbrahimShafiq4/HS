import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { IFormFields } from 'src/app/Features/shared/models/shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.email, Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
      ),
    ]),
    role: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
  }, { validators: this.passwordsMatchValidator });

  registerLists: IFormFields[] = [
    {
      controlName: 'name',
      label: 'User name',
      placeholder: 'Please Enter Your Name here',
      type: 'text'
    },
    {
      controlName: 'role',
      label: 'Choose The Role',
      placeholder: '',
      type: ''
    },
    {
      controlName: 'email',
      label: 'Email',
      placeholder: 'Enter Your E-mail',
      type: ''
    },
    {
      controlName: 'phone',
      label: 'Phone number',
      placeholder: 'Enter your phone number',
      type: 'text'
    },
    {
      controlName: 'country',
      label: 'Country',
      placeholder: 'Enter your Country',
      type: 'text'
    },
    {
      controlName: 'password',
      label: 'Password',
      placeholder: 'Enter Your password',
      type: 'password'
    },
    {
      controlName: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'Enter Your confirmPassword',
      type: 'password'
    }
  ]

  passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { mismatch: true };
    }
    return null;
  }
}
