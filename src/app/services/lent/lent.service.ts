import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lent, Result } from '../../class/classes';
import { baseUrl, httpOptions } from '../book.service';


const urls = {
	lentList: baseUrl+'/lib_user/lent/',
	createLent: baseUrl+'/lib_user/lent/new/',
}

@Injectable({
  providedIn: 'root'
})
export class LentService {

  constructor(private httpClient: HttpClient) { }

  getLentList(url = urls.lentList): Observable<Result<Lent>> {
  	return this.httpClient.get<Result<Lent>>(url);
  }

  createLent(lent: Lent): Observable<Lent>{
    const submitLent = {
      lib_user: lent.lib_user.id,
      book: lent.book.id,
      due_on: lent.due_on,
      lent_on: lent.lent_on,
      duration: lent.duration? lent.duration: Lent.default_lent_period
    };
  	return this.httpClient.post<Lent>(urls.createLent, submitLent, httpOptions);
  }
}
