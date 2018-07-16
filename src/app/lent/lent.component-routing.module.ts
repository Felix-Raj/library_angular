import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LentComponent } from './lent.component';
import { LentListComponent } from '../lent-list/lent-list.component';
import { LentCreateComponent } from '../lent-create/lent-create.component';

const lentRoutes: Routes = [
	{
		path: 'lent',
		component: LentComponent,
		children:[
			{
				path:'',
				component: LentListComponent
			},
			{
				path: 'new',
				component: LentCreateComponent
			}
		]
	},
]

@NgModule({
	imports:[
		RouterModule.forChild(lentRoutes),
	],
	exports:[
		RouterModule
	]
})
export class LentRoutingModule{}