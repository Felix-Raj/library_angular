import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http'

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Result, User, Lent } from '../../class/classes';
import { baseUrl } from '../book.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const user_base_url = baseUrl + '/lib_user/'

const urls = {
	userList : user_base_url,
	newUser: user_base_url+'new/',
  recentBirthdays: user_base_url+'birthdays/',
  pendingLents:user_base_url+'$/lent/pending/',
  activate: user_base_url+'$/activate/',
  deactivate: user_base_url+'$/deactivate/',
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(url = urls.userList, search?: {}, ordering?: string): Observable<Result<User>>{
    var httpParams = new HttpParams();
    var queries = {};
    if (search){
      if (search['search'] != '') {
        httpParams = httpParams.set('search', search['search'])
      }
    }
    queries = {params: httpParams}
  	return this.http.get<Result<User>>(url, queries);
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

  activateUserAccount(user: User): Observable<User>{
    console.log('activating user account for user ', user.name, 'with user id ', user.id);
    return this.http.put<User>(urls.activate.replace('$', user.id), httpOptions);
  }

  deactivateUserAccount(user: User): Observable<User>{
    console.log('de-activating user account for user ', user.name, 'with user id ', user.id);
    return this.http.put<User>(urls.deactivate.replace('$', user.id), httpOptions);
  }

  getRecentBirthdays(): Observable<Result<User>> {
    return this.http.get<Result<User>>(urls.recentBirthdays, httpOptions);
  }

  getPendinglents(userId: string): Observable<Array<Lent>> {
    return this.http.get<Array<Lent>>(urls.pendingLents.replace('$', userId), httpOptions);
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
