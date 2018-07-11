import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookListComponent } from '../book-list/book-list.component';

const bookRoutes: Routes = [
	{
		path: 'book',
		component: BookComponent,
		children: [
			{
				path:'',
				component: BookListComponent,
				children: [
					{
						path: ':id',
						component: BookDetailComponent
					}
				]
			},
			// {
			// 	path: ':id',
			// 	component: BookDetailComponent
			// }
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

