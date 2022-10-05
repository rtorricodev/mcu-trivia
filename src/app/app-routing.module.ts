import { RouterModule, Routes } from '@angular/router';

import { GameOverPageComponent } from './game-over-page/game-over-page.component';
import { NgModule } from '@angular/core';
import { StartPageComponent } from './start-page/start-page.component';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';

const routes: Routes = [
  {
    path: "",
    component: StartPageComponent,
    pathMatch: "full", 
  },
  {
    path: "trivia",
    component: TriviaPageComponent,
  },
  {
    path: "game-over",
    component: GameOverPageComponent
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
