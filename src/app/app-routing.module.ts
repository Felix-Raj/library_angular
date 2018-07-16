import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes=[
	{ path: '', component: DashboardComponent },
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
