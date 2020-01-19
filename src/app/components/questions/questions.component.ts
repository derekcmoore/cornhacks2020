import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public questionNumber: number = 0;
  public isBusiness: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  addQuestionNumber(){
    this.questionNumber++;
  }

  subtractQuestionNumber() {
    this.questionNumber--;
  }

}
