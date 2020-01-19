import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question5-i',
  templateUrl: './question5-i.component.html',
  styleUrls: ['./question5-i.component.scss']
})
export class Question5IComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  choice(value: number) {
    if (value == 0) {
      this.questionsService.answers['q5'] = "No";
    }
    else {
      this.questionsService.answers['q5'] = "Yes";
    }
    console.log(this.questionsService.answers);
  }
}
