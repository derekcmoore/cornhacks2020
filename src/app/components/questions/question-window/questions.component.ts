import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { faTasks, faSearch, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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
  constructor(private questionsService: QuestionsService, private router: Router) { }
  ngOnInit() {
    this.questionsService.questionNumber = 0;
  }

  addQuestionNumber() {
    if (this.questionsService.questionNumber < 8) {
      this.questionsService.questionNumber++;
    }
    else {
      this.questionsService.questionNumber = 1;
    }

  }

  subtractQuestionNumber() {
    this.questionsService.questionNumber--;
  }

  checkAnswers(): boolean {
    var i;
    for (i = 1; i <= 8; i++) {
      if (this.questionsService.answers['q' + i] == null) {
        i = -1;
        break;
      }
    }  
    if (i >= 8 && this.questionsService.questionNumber == 8) {
      return true;
    }
    return false;
  }
}
