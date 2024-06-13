import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateUser, ILoginData, ILoginResponse, IResponse } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  login(loginData: ILoginData): Observable<IResponse<ILoginResponse>> {
    return this._HttpClient.post<IResponse<ILoginResponse>>('admin/login', loginData)
  }

  register(registerForm: FormData): Observable<IResponse<ICreateUser>> {
    return this._HttpClient.post<IResponse<ICreateUser>>('admin/login', registerForm)
  }
}
