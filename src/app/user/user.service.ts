import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONST_IP } from '../app.module';
import { LoginRequest } from './payload/login.request';
import { RegisterRequest } from './payload/register.request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = CONST_IP + '/api/auth'

  constructor(private http: HttpClient) { }

  loginUser(loginRequest: LoginRequest) {
    return this.http.post(this.url + '/signin', loginRequest, { withCredentials: true })
  }

  registerUser(registerRequest: RegisterRequest) {
    return this.http.post(this.url + '/signup', registerRequest, { withCredentials: true })
  }

  getUserRoles() {
    return this.http.get(this.url + "/user_roles");
  }
}
