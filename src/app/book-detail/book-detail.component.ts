import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    // rather than using snapshot use
    // https://angular.io/guide/router#activated-route-in-action
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookService.getBookDetails(params.get('id'))
      )
    ).subscribe(
      result=>{
        this.book = result
      }
    );
  }

}
