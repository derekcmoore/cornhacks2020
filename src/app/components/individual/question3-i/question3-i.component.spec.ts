import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3IComponent } from './question3-i.component';

describe('Question3IComponent', () => {
  let component: Question3IComponent;
  let fixture: ComponentFixture<Question3IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
