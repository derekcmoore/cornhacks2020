import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  public questionNumber = 0;
  public answers = {
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: 0,
    q8: null
  };
}