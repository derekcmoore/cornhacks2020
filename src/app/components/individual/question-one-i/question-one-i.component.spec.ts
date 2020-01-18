import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOneIComponent } from './question-one-i.component';

describe('QuestionOneIComponent', () => {
  let component: QuestionOneIComponent;
  let fixture: ComponentFixture<QuestionOneIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOneIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOneIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
