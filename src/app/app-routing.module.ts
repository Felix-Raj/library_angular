import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { SearchAppComponent } from './search-app/search-app.component';





const routes: Routes=[
	{ path: '', component: DashboardComponent },
	{ path: 'notes', component: NotesComponent },
  { path: 'search', component: SearchAppComponent },
	{ path: 'dummy', component: DummyComponent }
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
