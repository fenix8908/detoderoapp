import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  urlLogin: string = 'http://localhost:8080/authenticate';

  constructor(private http: HttpClient) {}

  login(LoginRequest: LoginRequest): Observable<LoginResponse> {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(this.urlLogin, LoginRequest, {
      headers: header,
    });
  }
}
