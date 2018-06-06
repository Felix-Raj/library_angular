import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lent, Result } from '../../class/classes';
import { baseUrl } from '../book.service';


const urls = {
	lentList: baseUrl+'/lib_user/lent/'
}

@Injectable({
  providedIn: 'root'
})
export class LentService {

  constructor(private httpClient: HttpClient) { }

  getLentList(url = urls.lentList): Observable<Result<Lent>> {
  	return this.httpClient.get<Result<Lent>>(url);
  }
}
