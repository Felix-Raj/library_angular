import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { LentModule } from './lent/lent.module';
import { UserRecentBirthdayListComponent } from './user-recent-birthday-list/user-recent-birthday-list.component';
import { LentRecentDuesComponent } from './lent-recent-dues/lent-recent-dues.component';
import { NotesComponent } from './notes/notes.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchAppComponent } from './search-app/search-app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    DashboardComponent,
    UserRecentBirthdayListComponent,
    LentRecentDuesComponent,
    NotesComponent,
    SearchAppComponent,
    BookSearchComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    BookModule,
    LentModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
