import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2IComponent } from './question2-i.component';

describe('Question2IComponent', () => {
  let component: Question2IComponent;
  let fixture: ComponentFixture<Question2IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
