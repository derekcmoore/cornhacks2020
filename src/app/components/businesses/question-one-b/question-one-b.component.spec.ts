import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOneBComponent } from './question-one-b.component';

describe('QuestionOneBComponent', () => {
  let component: QuestionOneBComponent;
  let fixture: ComponentFixture<QuestionOneBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOneBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOneBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
