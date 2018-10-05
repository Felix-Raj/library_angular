import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';


@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
	bookExportUrl = BookService.getExportUrl();
}