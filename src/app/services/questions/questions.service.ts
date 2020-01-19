import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  public answers = {
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null
  };

  setAnswer(question: number, answer: string) {
    this.answers['q' + question] = answer;
  }
}