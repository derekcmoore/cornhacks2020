import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { QuestionsComponent } from './components/questions/question-window/questions.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Question1IComponent } from './components/questions/question1-i/question1-i.component';
import { Question2IComponent } from './components/questions/question2-i/question2-i.component';
import { Question3IComponent } from './components/questions/question3-i/question3-i.component';
import { Question4IComponent } from './components/questions/question4-i/question4-i.component';
import { Question5IComponent } from './components/questions/question5-i/question5-i.component';
import { Question6IComponent } from './components/questions/question6-i/question6-i.component';
import { Question7IComponent } from './components/questions/question7-i/question7-i.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import { Question8IComponent } from './components/questions/question8-i/question8-i.component';
import { FormsModule } from '@angular/forms';
import { SurveyResultsComponent } from './pages/survey-results/survey-results.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    QuestionnaireComponent,
    QuestionsComponent,
    Question1IComponent,
    Question2IComponent,
    Question3IComponent,
    Question4IComponent,
    Question5IComponent,
    Question6IComponent,
    Question7IComponent,
    Question8IComponent,
    SurveyResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
