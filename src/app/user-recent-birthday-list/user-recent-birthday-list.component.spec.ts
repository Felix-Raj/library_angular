import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentBirthdayListComponent } from './user-recent-birthday-list.component';

describe('UserRecentBirthdayListComponent', () => {
  let component: UserRecentBirthdayListComponent;
  let fixture: ComponentFixture<UserRecentBirthdayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecentBirthdayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentBirthdayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
