import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';

import { Result, User } from '../../class/classes';
import { baseUrl } from '../book.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const user_base_url = baseUrl + '/lib_user/'

const urls = {
	userList : user_base_url,
	newUser: user_base_url+'new/'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(url = urls.userList): Observable<Result<User>>{
  	console.log(url);
  	return this.http.get<Result<User>>(url);
  }
}
