import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question2-i',
  templateUrl: './question2-i.component.html',
  styleUrls: ['./question2-i.component.scss']
})
export class Question2IComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {

  }

  choice(value: number) {
    if (value == 0) {
      this.questionsService.answers['q2'] = "No";
    }
    else {
      this.questionsService.answers['q2'] = "Yes";
    }
    console.log(this.questionsService.answers);
  }
}
