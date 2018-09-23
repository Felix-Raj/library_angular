import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lent, Result } from '../../class/classes';
import { baseUrl, httpOptions } from '../book.service';

const lentUrl = baseUrl+'/lib_user/lent/';
const urls = {
	lentList: lentUrl,
  createLent: lentUrl+'new/',
	returnLent: lentUrl+'return/<lent_id>/',
  recentDues: lentUrl+'recent_dues/',
  renew: lentUrl+'renew/<lent_id>/',
}

@Injectable({
  providedIn: 'root'
})
export class LentService {

  constructor(private httpClient: HttpClient) { }

  getLentList(url = urls.lentList, search?:{}, ordering?:string): Observable<Result<Lent>> {
    var httpParams = new HttpParams();
    var queries = {};
    if (search){
      if (search['search'] != '') {
        httpParams = httpParams.set('search', search['search'])
      }
    }
    queries = {params: httpParams}
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

  returnLent(lent_id: string): Observable<any>{
    return this.httpClient.delete<any>(urls.returnLent.replace('<lent_id>', lent_id), httpOptions);
  }

  recentDues(): Observable<Array<Lent>>{
    return this.httpClient.get<Array<Lent>>(urls.recentDues, httpOptions);
  }

  renew(lentId: string): Observable<Lent>{
    return this.httpClient.put<Lent>(urls.renew.replace('<lent_id>',lentId), httpOptions);
  }
}
