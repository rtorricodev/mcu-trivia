import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.getRandomQuestion();
  }

  private getRandomQuestion(): void {
    const randomIndex = Math.floor(Math.random() * triviaData.length);
    this.currentTriviaQuestion = triviaData[randomIndex];
  }

}
