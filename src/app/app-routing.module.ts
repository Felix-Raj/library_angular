import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UserComponent } from './user/user.component';
import { LentComponent } from './lent/lent.component';


const routes: Routes=[
	{ path: '', component: DashboardComponent },
  { path: 'book', component: BookComponent },
	{ path: 'book/:id', component: BookDetailComponent },
  { path: 'user', component: UserComponent},
  { path: 'lent', component: LentComponent},
	{ path:'dummy', component: DummyComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
