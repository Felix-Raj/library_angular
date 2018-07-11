import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book.component-routing.module';
import { BookService } from '../services/book.service';
import { BookComponent } from './book.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookListComponent } from '../book-list/book-list.component';

@NgModule({
	imports: [
		CommonModule,
		BookRoutingModule,
	],
	declarations: [
		BookDetailComponent,
		BookListComponent,
		BookComponent,
	],
	providers:[
		BookService
	]
})
export class BookModule{}