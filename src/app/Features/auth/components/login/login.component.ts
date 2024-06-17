import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFormFields } from 'src/app/Features/shared/models/shared';
import { AuthService } from '../../services/auth.service';
import { ILoginResponse, IResponse } from '../../models/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Features/shared/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private _AuthService = inject(AuthService);
  private _HelperService = inject(HelperService);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      // Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
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
      this._AuthService.login(loginFormData.value).subscribe({
        next: (data: IResponse<ILoginResponse>) => { console.log(data.data.user._id); },
        error: (error: HttpErrorResponse) => this._HelperService.error(error),
        complete: () => {
          this._HelperService.success('welcome Back');
          this._AuthService.welcomeVoice('welcome Back ya m3lm')
        }
      })
    }
  }
}
