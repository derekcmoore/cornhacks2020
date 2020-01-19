import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { QuestionOneBComponent } from './components/businesses/question-one-b/question-one-b.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Question1IComponent } from './components/individual/question1-i/question1-i.component';
import { Question2IComponent } from './components/individual/question2-i/question2-i.component';
import { Question3IComponent } from './components/individual/question3-i/question3-i.component';
import { Question4IComponent } from './components/individual/question4-i/question4-i.component';
import { Question5IComponent } from './components/individual/question5-i/question5-i.component';
import { Question6IComponent } from './components/individual/question6-i/question6-i.component';
import { Question7IComponent } from './components/individual/question7-i/question7-i.component';
import { Question8IComponent } from './components/individual/question8-i/question8-i.component';
import { Question9IComponent } from './components/individual/question9-i/question9-i.component';
import { Question10IComponent } from './components/individual/question10-i/question10-i.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionOneBComponent,
    QuestionsComponent,
    Question1IComponent,
    Question2IComponent,
    Question3IComponent,
    Question4IComponent,
    Question5IComponent,
    Question6IComponent,
    Question7IComponent,
    Question8IComponent,
    Question9IComponent,
    Question10IComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
