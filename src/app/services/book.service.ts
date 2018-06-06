import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Result, Book } from '../class/classes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const baseUrl = 'http://127.0.0.1:8000'
const urls = {
	bookList: baseUrl+'/book/',
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(url = urls.bookList): Observable<Result<Book>>{
  	return this.http.get<Result<Book>>(url);
  }

  getBookDetails(id: string): Observable<Book> {
  	const url = `${urls.bookList}${id}/`;
  	return this.http.get<Book>(urls.bookList+id+'/');
  }
}
