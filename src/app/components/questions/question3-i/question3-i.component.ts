import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question3-i',
  templateUrl: './question3-i.component.html',
  styleUrls: ['./question3-i.component.scss']
})
export class Question3IComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  choice(value: number) {
    if (value == 0) {
      this.questionsService.answers['q3'] = "No";
    }
    else {
      this.questionsService.answers['q3'] = "Yes";
    }
    console.log(this.questionsService.answers);
  }
}
