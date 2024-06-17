import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ICreateUser,
  IForgetPassword,
  ILoginData,
  ILoginResponse,
  IResetPassword,
  IResponse,
  IUser,
} from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _HttpClient = inject(HttpClient);

  login(loginData: ILoginData): Observable<IResponse<ILoginResponse>> {
    return this._HttpClient.post<IResponse<ILoginResponse>>(
      'admin/users/login',
      loginData
    );
  }

  register(registerForm: FormData): Observable<IResponse<ICreateUser>> {
    return this._HttpClient.post<IResponse<ICreateUser>>(
      'admin/users/register',
      registerForm
    );
  }

  forgetPassword(forgetData: IForgetPassword): Observable<any> {
    return this._HttpClient.post('admin/users/forget-password', forgetData);
  }

  changePassword(resetData: IResetPassword): Observable<any> {
    return this._HttpClient.post('admin/users/change-password', resetData)
  }

  welcomeVoice(message: string) {
    const sp = new SpeechSynthesisUtterance(message);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  }

  getSingleUserData(userId: string): Observable<IResponse<IUser>> {
    return this._HttpClient.get<IResponse<IUser>>(`admin/users/${userId}`)
  }
}
