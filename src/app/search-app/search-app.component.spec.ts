import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAppComponent } from './search-app.component';

describe('SearchAppComponent', () => {
  let component: SearchAppComponent;
  let fixture: ComponentFixture<SearchAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
