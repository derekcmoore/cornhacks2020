import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public isBusiness: boolean = false;
  faBuilding = faBuilding;
  faUser = faUser;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    
  }

  addQuestionNumber() {
    this.questionsService.questionNumber++;
  }

  subtractQuestionNumber() {
    this.questionsService.questionNumber--;
  }
}
