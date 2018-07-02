import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../services/book.service';
import { Book, Result } from '../class/classes';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

	book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getBook();
  }

  getBook(): void {
  	const id = this.route.snapshot.paramMap.get('id');
  	console.log(id);
  	this.bookService.getBookDetails(id).subscribe(
  		result=>{
  			this.book = result
  		}
  	)
  }

}
