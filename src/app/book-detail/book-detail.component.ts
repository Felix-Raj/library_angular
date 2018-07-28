import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

import { BookService } from '../services/book.service';
import { Book, Result, Avatar } from '../class/classes';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

	book: Book;
  loading: boolean = false;

  message: string;

  constructor(private bookService: BookService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loading = true;
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
        this.loading = false;
        this.book = result;
      }
    );
  }

  toggleLock(): void{
    if (this.book.locked) {
      this.bookService.unlock(this.book.id).subscribe(
        (data)=>{
          if(data.locked){
            this.message='operation failed';
          }else{
            this.message = 'operation successful';
          }
          this.book = data;
        }
      );
    }else{
      this.bookService.lock(this.book.id).subscribe(
        data=>{
          if (!data.locked) {
            this.message = 'operation failed';
          } else{
            this.message = 'operation successful';
          }
          this.book = data;
        }
      );
    }
    this.clearMessage();
  }

  _image_src(avatar: Avatar){
    return this.sanitizer.bypassSecurityTrustUrl("data:"+avatar.filetype+";base64, "+avatar.value);
  }

  clearMessage(){
    setTimeout(
       ()=>{this.message=''},
       3000
    );
  }

}
