import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentCreateComponent } from './lent-create.component';

describe('LentCreateComponent', () => {
  let component: LentCreateComponent;
  let fixture: ComponentFixture<LentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
