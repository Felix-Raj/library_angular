import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { LentModule } from './lent/lent.module';
import { UserRecentBirthdayListComponent } from './user-recent-birthday-list/user-recent-birthday-list.component';
import { LentRecentDuesComponent } from './lent-recent-dues/lent-recent-dues.component';
import { BookGalleryViewComponent } from './book-gallery-view/book-gallery-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    DashboardComponent,
    UserRecentBirthdayListComponent,
    LentRecentDuesComponent,
    BookGalleryViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    BookModule,
    LentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
