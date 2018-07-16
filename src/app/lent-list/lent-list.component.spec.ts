import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentListComponent } from './lent-list.component';

describe('LentListComponent', () => {
  let component: LentListComponent;
  let fixture: ComponentFixture<LentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
