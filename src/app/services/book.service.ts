import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Result, Book } from '../class/classes';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const baseUrl = 'http://127.0.0.1:8000'
//export const baseUrl = 'https://boiling-scrubland-41951.herokuapp.com';
const urls = {
	bookList: baseUrl+'/book/',
  createBook: baseUrl+'/book/new/',
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(url = urls.bookList, search?:{}): Observable<Result<Book>>{
    var httpParams: HttpParams = new HttpParams();
    var queries= {};
    if (search){
      if (search['book_id'] != undefined){
        httpParams = httpParams.set('book_id', search['book_id']);
      }
      if (search['title'] != undefined) {
        httpParams = httpParams.set('title', search['title']);
      }
    }
    queries={params: httpParams};
  	return this.http.get<Result<Book>>(url, queries);
  }

  getBook(search_bookId): Observable<Result<Book>>{
    const queries=search_bookId?{params: new HttpParams().set('book_id', search_bookId)}: {}
    return this.http.get<Result<Book>>(urls.bookList, queries);
  }

  getBookDetails(id: string): Observable<Book> {
  	const url = `${urls.bookList}${id}/`;
  	return this.http.get<Book>(urls.bookList+id+'/');
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(urls.createBook, book, httpOptions);
  }
}
