import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {

  runningComputers: number = 0;
  size: number = 0;
  constructor(private questionsService: QuestionsService) { }
  ngOnInit() {
    this.getSize();
  }

  getSize() {
    if (this.questionsService.answers['q8'] == "small") {
      this.size = 75;
    }
    else if (this.questionsService.answers['q8'] == "small") {
      this.size = 500;
    }
    else {
      this.size = 1000;
    }
  }

  calculateCO2Emissions(hours: number) {
    let kwhToCO2 = 0.000707; //AVERT, U.S. national weighted average CO2 marginal emission rate, year 2018 data
    let months = 12;
    let tonsToPounds = 2204.62;
    return this.questionsService.answers['q8'] * kwhToCO2 * months * tonsToPounds;
  }

  calculateComputerEnergy() {
    let averageComputerConsumtion = 125;
    this.runningComputers = averageComputerConsumtion * this.size;
  }

}
