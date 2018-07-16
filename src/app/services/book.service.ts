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

  getBooks(url = urls.bookList): Observable<Result<Book>>{
  	return this.http.get<Result<Book>>(url);
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
