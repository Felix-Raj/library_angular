import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { UserRoutingModule } from './user.component-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UserCreateFormComponent } from '../user-create-form/user-create-form.component';
// import { UserRecentBirthdayListComponent } from '../user-recent-birthday-list/user-recent-birthday-list.component';
import { UserService } from '../services/users/user.service';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		UserRoutingModule,
	],
	declarations: [
		UserComponent,
		UserListComponent,
		UserCreateFormComponent,
		// UserRecentBirthdayListComponent,
	],
	providers: [
		UserService
	]
})
export class UserModule{}