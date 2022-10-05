import { Component } from '@angular/core';

@Component({
  selector: 'app-game-over-page',
  template: `
    <div
      class="w-full h-screen bg-gradient-to-t from-blue-700 to-violet-800 flex flex-col justify-center items-center"
    >
      <h1 class="text-white text-bold text-5xl">Game Over</h1>
      <button
        [routerLink]="['./start']"
        class="px-5 py-3 bg-indigo-500 shadow-md rounded text-white mt-5"
      >
        Play again
      </button>
    </div>
  `,
})
export class GameOverPageComponent {
  constructor() {}
}
