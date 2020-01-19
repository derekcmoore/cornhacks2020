import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { faStoreAlt, faBuilding, faCity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question1-i',
  templateUrl: './question1-i.component.html',
  styleUrls: ['./question1-i.component.scss']
})
export class Question1IComponent implements OnInit {
  people: number = 0;
  clrRangeHasProgress;
  faStoreAlt = faStoreAlt;
  faBuilding = faBuilding;
  faCity = faCity;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {

  }

  choice(value: number) {
    if (value == 0) {
      this.questionsService.answers['q1'] = "small";
      this.questionsService.questionNumber++;
    }
    else if (value == 1) {
      this.questionsService.answers['q1'] = "medium";
      this.questionsService.questionNumber++;
    }
    else {
      this.questionsService.answers['q1'] = "large";
      this.questionsService.questionNumber++;
    }
    console.log(this.questionsService.answers);
  }
}
