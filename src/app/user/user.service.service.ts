import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONST_IP } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = CONST_IP + '/user'

  constructor(private http: HttpClient) { }



}
