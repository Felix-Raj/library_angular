import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentRecentDuesComponent } from './lent-recent-dues.component';

describe('LentRecentDuesComponent', () => {
  let component: LentRecentDuesComponent;
  let fixture: ComponentFixture<LentRecentDuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LentRecentDuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LentRecentDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
