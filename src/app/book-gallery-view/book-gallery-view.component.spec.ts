import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGalleryViewComponent } from './book-gallery-view.component';

describe('BookGalleryViewComponent', () => {
  let component: BookGalleryViewComponent;
  let fixture: ComponentFixture<BookGalleryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGalleryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
