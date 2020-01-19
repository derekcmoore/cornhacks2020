import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question4-i',
  templateUrl: './question4-i.component.html',
  styleUrls: ['./question4-i.component.scss']
})
export class Question4IComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {

  }

  choice(value: number) {
    if (value == 0) {
      this.questionsService.answers['q4'] = "No";
    }
    else {
      this.questionsService.answers['q4'] = "Yes";
    }
  }
}
