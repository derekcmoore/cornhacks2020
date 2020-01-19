import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question5IComponent } from './question5-i.component';

describe('Question5IComponent', () => {
  let component: Question5IComponent;
  let fixture: ComponentFixture<Question5IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question5IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question5IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
