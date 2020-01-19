import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question8-i',
  templateUrl: './question8-i.component.html',
  styleUrls: ['./question8-i.component.scss']
})
export class Question8IComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  hours: number = 0;
  ngOnInit() {

  }

  choice(value: number) {

  }
}
