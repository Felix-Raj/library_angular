import { Component, OnInit } from '@angular/core';

import { BookService } from '../services/book.service';
import { Book, Result } from '../class/classes';
import { ResultList } from '../shared/list_class';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent extends  ResultList<Book> implements OnInit{

  constructor(private bookService: BookService) { 
    super();
  }

  fetchList(callback, url?: string){
    this.bookService.getBooks(url).subscribe(
      books=>{
        super.postFetchList(books);
      }
    );
  }

  ngOnInit() {
  	this.getList();
  }

  getNextBooks(): void{
  	super.getNextList();
  }

  loadAllBooks(): void {
    super.loadAllList();
  }

}
