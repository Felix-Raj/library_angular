import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http'

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Result, User } from '../../class/classes';
import { baseUrl } from '../book.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const user_base_url = baseUrl + '/lib_user/'

const urls = {
	userList : user_base_url,
	newUser: user_base_url+'new/',
  recentBirthdays: user_base_url+'birthdays/',
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(url = urls.userList): Observable<Result<User>>{
  	return this.http.get<Result<User>>(url);
  }

  getUser(search_userId: string){
    /*
    * Fetch a sigle user
    */
    const options = search_userId ? 
      {params: new HttpParams().set('uid', search_userId)}:{};

    return this.http.get<Result<User>>(urls.userList, options);
  }

  createUser(user: User): Observable<User>{
  	console.log('creating user');
  	return this.http.post<User>(urls.newUser, user, httpOptions);
  }

  getRecentBirthdays(): Observable<Result<User>> {
    return this.http.get<Result<User>>(urls.recentBirthdays, httpOptions);
  }

  handleError<T>(err: HttpErrorResponse){
  	console.log(err.error.message);
  	if (err.error instanceof ErrorEvent) {
  		console.error('An error ocured ', err.error.message);
  	}else {
  		console.log(`Backed retured code ${err.status} body was : ${err.error}`);
  	}

  	return throwError('Error!');
  }
}
