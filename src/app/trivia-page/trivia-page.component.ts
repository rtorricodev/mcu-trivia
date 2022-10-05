import { Component, OnInit } from '@angular/core';
import { delay, of, tap } from 'rxjs';

import { Router } from '@angular/router';
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
  answeredQuestions: number[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getRandomQuestion();
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * triviaData.length);
  }

  private getRandomQuestion(): void {
    let randomIndex: number = this.getRandomNumber();
    const availableQuestions = this.answeredQuestions.length === triviaData.length;



    while(this.answeredQuestions.includes(randomIndex) && !availableQuestions ) {
      randomIndex =  this.getRandomNumber();
    };

    if(availableQuestions ){
      this.router.navigate(['/game-over']);
    }


    this.currentTriviaQuestion = triviaData[randomIndex];
    this.answeredQuestions.push(randomIndex);
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
