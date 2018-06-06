import { Component, OnInit } from '@angular/core';

import { BookService } from '../services/book.service';
import { Book, Result } from '../class/classes';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

	private result: Result<Book>;
	private bookList: Array<Book>;
  private loadAll: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  	this.getBooks()
  }

  getBooks(url?: string):void {
    if (this.result && this.result.next==null) {
      return ;
    }
  	this.bookService.getBooks(url).subscribe(
  			books=>{
  					this.result = books;
  					this.updateBookList();
            if (this.loadAll) {
              console.log('Load All Books...');
              if (this.result.next==null) {
                return ;
              }
              this.getBooks(this.result.next);
            }
  				}
  		)
  }

  getNextBooks(): void{
  	this.getBooks(this.result.next);
  }

  loadAllBooks(): void {
    if (this.result.next!=null) {
      this.loadAll = true;
      this.getBooks(this.result.next);
    }
  }

  updateBookList(){
  	if (this.bookList != null) {
  		for (var i = this.result.results.length - 1; i >= 0; i--) {
  			this.bookList.push(this.result.results[i]);
  		}
  	}else{
  		this.bookList = this.result.results;
  	}
  }

}
