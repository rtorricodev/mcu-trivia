import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { delay, of, take, tap } from 'rxjs';

import { NumberService } from './../../core/number.service';
import { TriviaQuestion } from '../../shared/interfaces/TriviaQuestion.interface';
import { triviaQuestions } from '../../core/trivia-data.const';

@Component({
  selector: 'app-trivia-page',
  templateUrl: './trivia-page.component.html',
})
export class TriviaPageComponent implements OnInit {
  currentQuestion: TriviaQuestion = {} as TriviaQuestion;
  points: number = 0;
  triviaQuestions: TriviaQuestion[] = triviaQuestions;
  anyOptionWasPressed: boolean = false;
  availableQuestions: number = this.triviaQuestions.length;
  answeredQuestions: number[] = [];

  constructor(private router: Router, private numberService: NumberService) {}

  ngOnInit(): void {
    this.getRandomQuestion();
  }

  private getRandomQuestion(): void {
    let randomIndex: number = this.numberService.getRandomNumber(
      this.triviaQuestions.length
    );

    const areAvailableQuestions: boolean =
      this.answeredQuestions.length !== triviaQuestions.length;

    while (
      this.answeredQuestions.includes(randomIndex) &&
      areAvailableQuestions
    ) {
      randomIndex = this.numberService.getRandomNumber(
        this.triviaQuestions.length
      );
    }

    if (!areAvailableQuestions) {
      this.router.navigateByUrl('/game-over');
    }

    this.currentQuestion = triviaQuestions[randomIndex];
    this.answeredQuestions.push(randomIndex);
  }

  selectOption(index: number): void {
    this.anyOptionWasPressed = true;
    of('')
      .pipe(
        delay(1000),
        tap(() => {
          if (index === this.currentQuestion.indexOfCorrectAnswer) {
            this.points += 1;
          }
          this.availableQuestions -= 1;
          this.getRandomQuestion();
          this.anyOptionWasPressed = false;
        }),
        take(1)
      )
      .subscribe();
  }
}
