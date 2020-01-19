import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question8IComponent } from './question8-i.component';

describe('Question8IComponent', () => {
  let component: Question8IComponent;
  let fixture: ComponentFixture<Question8IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question8IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question8IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
