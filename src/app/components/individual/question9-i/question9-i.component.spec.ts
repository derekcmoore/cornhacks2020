import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question9IComponent } from './question9-i.component';

describe('Question9IComponent', () => {
  let component: Question9IComponent;
  let fixture: ComponentFixture<Question9IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question9IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question9IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
