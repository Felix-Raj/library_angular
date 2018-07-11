import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UserComponent } from './user/user.component';
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { LentComponent } from './lent/lent.component';



const routes: Routes=[
	{ path: '', component: DashboardComponent },
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
