import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question4IComponent } from './question4-i.component';

describe('Question4IComponent', () => {
  let component: Question4IComponent;
  let fixture: ComponentFixture<Question4IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question4IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question4IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
