import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trivia-header',
  template: `
    <div
      class="h-14 w-full fixed bg-gradient-to-t from-blue-700 to-violet-800 flex justify-between items-center"
    >
      <a class="cursor-pointer" [routerLink]="['/start']">
        <h1 class="text-white text-bold text-xl ml-10">MCU Trivia</h1>
      </a>
      <div class="flex">
        <p class="text-white mr-10 text-bold text-lg">
          Questions: {{ availableQuestions }}
        </p>
        <p class="text-white mr-10 text-bold text-lg">Points: {{ points }}</p>
      </div>
    </div>
  `,
})
export class TriviaHeaderComponent {
  @Input() availableQuestions: number = 0;
  @Input() points: number = 0;

  constructor() {}
}
