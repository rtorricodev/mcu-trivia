import { Component, OnInit } from '@angular/core';
import { delay, filter, of, tap } from 'rxjs';

import { TriviaQuestion } from './questions.interface';
import  { triviaData } from './trivia-data.const';

@Component({
  selector: 'app-trivia-page',
  templateUrl: './trivia-page.component.html',
  styleUrls: ['./trivia-page.component.scss']
})
export class TriviaPageComponent implements OnInit {

  triviaData: TriviaQuestion[] = triviaData;
  currentTriviaQuestion: TriviaQuestion = {} as TriviaQuestion;
  optionWasPressed: boolean = false;
  correctCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getRandomQuestion();
  }

  private getRandomQuestion(): void {
    const randomIndex: number = Math.floor(Math.random() * triviaData.length);
    this.currentTriviaQuestion = triviaData[randomIndex];
  }

  selectOption(index: number): void {
    this.optionWasPressed = true;
    of('').pipe(
      delay(1000),
      tap(() => {
        if( index === this.currentTriviaQuestion.indexOfCorrectAnswer) {
          this.correctCounter += 1;
        }
        this.getRandomQuestion()
        this.optionWasPressed = false;
      }),
    ).subscribe();

  } 

}
