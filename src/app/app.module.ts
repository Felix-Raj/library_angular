import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UserComponent } from './user/user.component';
import { LentComponent } from './lent/lent.component';
import { LentCreateComponent } from './lent-create/lent-create.component';
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    DashboardComponent,
    BookComponent,
    BookDetailComponent,
    UserComponent,
    LentComponent,
    LentCreateComponent,
    UserCreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
