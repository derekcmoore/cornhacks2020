import { Component, OnInit } from '@angular/core';
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-starter-question',
  templateUrl: './starter-question.component.html',
  styleUrls: ['./starter-question.component.scss']
})
export class StarterQuestionComponent implements OnInit {
  faBuilding = faBuilding;
  faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

}
