import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Result, Book } from '../class/classes';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// export const baseUrl = 'http://127.0.0.1:8000'
export const baseUrl = 'https://boiling-scrubland-41951.herokuapp.com';
const urls = {
	bookList: baseUrl+'/book/',
  createBook: baseUrl+'/book/new/',
  editBook: baseUrl+'/book/<book_id>/edit/',
  lock: baseUrl+'/book/<book_id>/lock',
  unlock: baseUrl+'/book/<book_id>/unlock',
  export: baseUrl+'/book/export/',
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(url = urls.bookList, search?:{}, ordering?: string): Observable<Result<Book>>{
    var httpParams: HttpParams = new HttpParams();
    var queries= {};
    if (search){
      if (search['book_id']){
        httpParams = httpParams.set('book_id', search['book_id']);
      }
      if (search['title']) {
        httpParams = httpParams.set('title', search['title']);
      }
      if (search['author']) {
        httpParams = httpParams.set('author', search['author']);
      }
      if (search['booktag__tag']) {
        httpParams = httpParams.set('booktag__tag', search['booktag__tag']);
      }
      if (search['category']) {
        httpParams = httpParams.set('category', search['category']);
      }
      if(search['search']){
        httpParams = httpParams.set('search', search['search']);
      }
    }
    if (ordering) {
      httpParams = httpParams.set('ordering', search['ordering'])
    }
    queries={params: httpParams};
  	return this.http.get<Result<Book>>(url, queries);
  }

  getBook(search_bookId): Observable<Result<Book>>{
    const queries=search_bookId?{params: new HttpParams().set('search', search_bookId)}: {}
    return this.http.get<Result<Book>>(urls.bookList, queries);
  }

  getBookDetails(id: string): Observable<Book> {
  	const url = `${urls.bookList}${id}/`;
  	return this.http.get<Book>(urls.bookList+id+'/');
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(urls.createBook, book, httpOptions);
  }

  editBook(book: Book): Observable<Book>{
    return this.http.put<Book>(urls.editBook.replace('<book_id>', book.id.toString()), book, httpOptions);
  }

  lock(book_id: number): Observable<Book>{
    return this.http.get<Book>(urls.lock.replace('<book_id>', ''+book_id), httpOptions);
  }

  unlock(book_id: number): Observable<Book>{
    return this.http.get<Book>(urls.unlock.replace('<book_id>', ''+book_id), httpOptions);
  }

  static getExportUrl() {
    return urls.export;
  }
}
