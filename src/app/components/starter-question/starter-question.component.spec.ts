import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterQuestionComponent } from './starter-question.component';

describe('StarterQuestionComponent', () => {
  let component: StarterQuestionComponent;
  let fixture: ComponentFixture<StarterQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
