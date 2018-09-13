import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';

import { BookRoutingModule } from './book.component-routing.module';
import { BookService } from '../services/book.service';
import { BookComponent } from './book.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BookCreateFormComponent } from '../book-create-form/book-create-form.component';
import { BookGalleryViewComponent } from '../book-gallery-view/book-gallery-view.component';

@NgModule({
	imports: [
		CommonModule,
		BookRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		BookDetailComponent,
		BookListComponent,
		BookComponent,
		BookCreateFormComponent,
		BookGalleryViewComponent,
	],
	providers:[
		BookService
	]
})
export class BookModule{}