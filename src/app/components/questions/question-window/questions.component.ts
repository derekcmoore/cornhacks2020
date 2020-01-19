import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { faTasks, faSearch, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public isBusiness: boolean = false;
  faTasks = faTasks;
  faSearch = faSearch;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  nextButton = false;
  constructor(private questionsService: QuestionsService) { }
  ngOnInit() {

  }

  addQuestionNumber() {
    console.log(this.questionsService.answers);
    this.questionsService.questionNumber++;
  }

  subtractQuestionNumber() {
    this.questionsService.questionNumber--;
  }
}
