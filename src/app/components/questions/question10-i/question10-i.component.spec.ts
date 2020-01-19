import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question10IComponent } from './question10-i.component';

describe('Question10IComponent', () => {
  let component: Question10IComponent;
  let fixture: ComponentFixture<Question10IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question10IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question10IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
