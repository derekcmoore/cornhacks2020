import { Component, OnInit } from '@angular/core';
import { QuestionsComponent } from '../../components/questions/question-window/questions.component'
import { ThemeService } from 'src/app/services/theme/theme.service';
import { faLightbulb, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  faLightbulb = faLightbulb;
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
