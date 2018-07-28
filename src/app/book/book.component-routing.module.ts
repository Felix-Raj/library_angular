import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BookCreateFormComponent } from '../book-create-form/book-create-form.component';
import { BookGalleryViewComponent } from '../book-gallery-view/book-gallery-view.component';

const bookRoutes: Routes = [
	{
		path: 'book',
		component: BookComponent,
		children: [
			{
				path: 'new',
				component: BookCreateFormComponent
			},
			{
				path: 'gallery',
				component: BookGalleryViewComponent,
				children: [
					{
						path: ':id',
						component: BookDetailComponent
					}
				]
			},
			{
				path:'',
				component: BookListComponent,
				children: [
					{
						path: ':id',
						component: BookDetailComponent
					}
				]
			}
		]
	}
];

@NgModule({
	imports:[
		RouterModule.forChild(bookRoutes)
	],
	exports: [
		RouterModule
	]

})
export class BookRoutingModule{}

