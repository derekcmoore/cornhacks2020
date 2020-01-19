import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question6-i',
  templateUrl: './question6-i.component.html',
  styleUrls: ['./question6-i.component.scss']
})
export class Question6IComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {

  }

  choice(value: number) {
    if (value == 0) {
      this.questionsService.answers['q6'] = "No";
    }
    else {
      this.questionsService.answers['q6'] = "Yes";
    }
    console.log(this.questionsService.answers);
  }

}
