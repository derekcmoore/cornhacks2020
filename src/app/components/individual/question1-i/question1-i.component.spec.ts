import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1IComponent } from './question1-i.component';

describe('Question1IComponent', () => {
  let component: Question1IComponent;
  let fixture: ComponentFixture<Question1IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question1IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
