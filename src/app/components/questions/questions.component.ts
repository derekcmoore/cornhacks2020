import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public questionNumber: number = 0;
  public isBusiness: boolean = false;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    
  }

  addQuestionNumber() {
    this.questionNumber++;
  }

  subtractQuestionNumber() {
    this.questionNumber--;
  }
}
