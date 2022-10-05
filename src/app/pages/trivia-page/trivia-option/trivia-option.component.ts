import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trivia-option',
  template: `
    <button
      [ngClass]="{
        'bg-green-600':
          correctAnswer === index && anyOptionWasPressed,
        'bg-red-600':
        correctAnswer !== index  && anyOptionWasPressed,
        'bg-blue-600': !anyOptionWasPressed
      }"
      class="w-full py-3 rounded mt-3 mb-3 text-white"
      (click)="emitSelectEvent(index)"
      >
      {{ option }}
    </button>
  `,
})
export class TriviaOptionComponent {
  @Input() anyOptionWasPressed: boolean = false
  @Input() correctAnswer: number = 0;
  @Input() index: number = 0;
  @Input() option: string = "";
  @Output() clickedEvent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  emitSelectEvent(index: number): void {
    this.clickedEvent.emit(index);
  } 
}
