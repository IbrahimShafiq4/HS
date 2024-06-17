import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFormFields } from 'src/app/Features/shared/models/shared';
import { AuthService } from '../../services/auth.service';
import { HelperService } from 'src/app/Features/shared/services/helper.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  private _AuthService = inject(AuthService);
  private _HelperService = inject(HelperService);

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
      this._AuthService.forgetPassword(forgetFormPassword.value).subscribe({
        next: (res) => {  },
        error: (error: HttpErrorResponse) => this._HelperService.error(error),
        complete: () => this._HelperService.success('Checkout Your Mail')
      })
    }
  }
}
