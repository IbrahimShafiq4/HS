import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormFields } from 'src/app/Features/shared/models/shared';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  resetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    seed: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
      ),
    ]),
    confirmPassword: new FormControl(null, [Validators.required]),
  }, { validators: this.passwordsMatchValidator });

  resetLists: IFormFields[] = [
    {
      controlName: 'email',
      label: 'Email',
      placeholder: 'Enter Your E-mail',
      type: 'email'
    },
    {
      controlName: 'seed',
      label: 'OTP',
      placeholder: 'Enter the otp',
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
