import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { QuestionOneIComponent } from './components/individual/question-one-i/question-one-i.component';
import { QuestionOneBComponent } from './components/businesses/question-one-b/question-one-b.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionOneIComponent,
    QuestionOneBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
