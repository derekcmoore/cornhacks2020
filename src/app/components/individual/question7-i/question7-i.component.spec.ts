import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question7IComponent } from './question7-i.component';

describe('Question7IComponent', () => {
  let component: Question7IComponent;
  let fixture: ComponentFixture<Question7IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question7IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question7IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
