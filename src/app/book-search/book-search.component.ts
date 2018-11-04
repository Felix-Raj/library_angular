import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { BookService } from '../services/book.service';
import { Book, Result } from '../class/classes';
import { ResultList } from '../shared/list_class';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent extends ResultList<Book> implements OnInit {

	@Input() searchWord: string;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  	super();
  }

  ngOnInit() {
  	this.search();
  }

  _makeServiceCall(url?: string, queries?: {}): Observable<Result<Book>>{
    return this.bookService.getBooks(url, queries);
  }

  searchBook(input: string){
  	const obj = {'search': input}
  	this.searchObject.next(obj);
  }

  ngOnChanges() {
  	this.searchBook(this.searchWord);
  }

}
