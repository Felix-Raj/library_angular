import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { BookService } from '../services/book.service';
import { Book, Result } from '../class/classes';
import { ResultList } from '../shared/list_class';
import { BookCreateFormComponent } from '../book-create-form/book-create-form.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent extends  ResultList<Book> implements OnInit{

  searchable={
    book_id:'',title:'', author:'', booktag__tag:'', category:'',
  }
  selectedBook: Book;

  constructor(private bookService: BookService) { 
    super();
  }

  ngOnInit() {
  	this.getList();
    this.search();
  }

  _makeServiceCall(url?: string, queries?: {}): Observable<Result<Book>>{
    return this.bookService.getBooks(url, queries);
  }

  getNextBooks(): void{
  	super.getNextList();
  }

  loadAllBooks(): void {
    super.loadAllList();
  }

  search_book(name: string, value: string){
    this.searchable[name]=value;
    var obj = {
      book_id : this.searchable.book_id,
      title: this.searchable.title,
      author: this.searchable.author,
      booktag__tag: this.searchable.booktag__tag,
      category: this.searchable.category,
    };
    this.searchObject.next(obj);
  }

  select(book){
    this.selectedBook = book;
  }

  changedBook($event){
    console.log($event);
    this.changeBook($event);
  }

  changeBook(book: Book){
    this.list = this.list.map((v)=>{
      if(v.id ==  book.id){
        return book;
      }else{
        return v;
      }
    });
    this.selectedBook=book;
  }

}
