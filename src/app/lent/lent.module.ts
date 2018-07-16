import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { LentService } from '../services/lent/lent.service';
import { LentRoutingModule } from './lent.component-routing.module';
import { LentComponent } from './lent.component';
import { LentListComponent } from '../lent-list/lent-list.component';
import { LentCreateComponent } from '../lent-create/lent-create.component';

@NgModule({
	imports:[
		CommonModule,
		ReactiveFormsModule,
		LentRoutingModule,
	],
	declarations:[
		LentComponent,
		LentListComponent,
		LentCreateComponent,
	],
	providers:[
		LentService
	]
})
export class LentModule{}