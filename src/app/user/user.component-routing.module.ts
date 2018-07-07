import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UserCreateFormComponent } from '../user-create-form/user-create-form.component';

const userRoutes: Routes = [
	{
		path: 'user',
		component: UserComponent,
		children: [
			{
				path: '',
				component: UserListComponent
			},
			{
				path: 'new',
				component: UserCreateFormComponent
			}
		]
	}
];

@NgModule({
	imports:[
		RouterModule.forChild(userRoutes)
	],
	exports: [
		RouterModule
	]
})
export class UserRoutingModule{}