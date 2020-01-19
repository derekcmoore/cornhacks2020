import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question7-i',
  templateUrl: './question7-i.component.html',
  styleUrls: ['./question7-i.component.scss']
})
export class Question7IComponent implements OnInit {
  slider: HTMLElement = document.getElementById("myRange");
  output: HTMLElement = document.getElementById("demo");
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  valueChanged(value: number) {
    this.questionsService.answers['q7'] = value;
  }
}
