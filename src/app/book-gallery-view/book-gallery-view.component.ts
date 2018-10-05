import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser'


import { BookService } from '../services/book.service';
import { Result, Avatar, Book } from '../class/classes';
import { ResultList } from '../shared/list_class';


@Component({
  selector: 'app-book-gallery-view',
  templateUrl: './book-gallery-view.component.html',
  styleUrls: ['./book-gallery-view.component.css']
})
export class BookGalleryViewComponent extends  ResultList<Book> implements OnInit {

  constructor(private bookService: BookService, private sanitizer: DomSanitizer) { super(); }

  ngOnInit() {
  	this.getList();
  	this.loadAll=true;
  }

  _makeServiceCall(url?: string, queries?: {}): Observable<Result<Book>>{
    return this.bookService.getBooks(url, queries);
  }

  _image_src(avatar: Avatar){
    if (!avatar || avatar.filetype == undefined) {
      return "#";
    }
    return this.sanitizer.bypassSecurityTrustUrl("data:"+avatar.filetype+";base64, "+avatar.value);
  }

}
