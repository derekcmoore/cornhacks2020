import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question6IComponent } from './question6-i.component';

describe('Question6IComponent', () => {
  let component: Question6IComponent;
  let fixture: ComponentFixture<Question6IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question6IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question6IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
