import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../../theme.service";
import { StarterQuestionComponent } from '../../components/starter-question/starter-question.component'
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.themeService.setLightTheme();
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }

}
