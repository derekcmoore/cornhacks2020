import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  calculateCO2Emissions() {
    let kwhToCO2 = 0.000707; //AVERT, U.S. national weighted average CO2 marginal emission rate, year 2018 data
    return this.questionsService.answers['q8'] * kwhToCO2;
  }

}
