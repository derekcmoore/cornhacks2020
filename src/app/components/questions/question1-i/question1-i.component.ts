import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question1-i',
  templateUrl: './question1-i.component.html',
  styleUrls: ['./question1-i.component.scss']
})
export class Question1IComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {

  }
  
  choice(value: number){
    this.questionsService.answers['q1'] = "test";
  }
}
