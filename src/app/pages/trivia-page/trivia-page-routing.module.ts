import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TriviaPageComponent } from './trivia-page.component';

const routes: Routes = [
  {
    path: '',
    component: TriviaPageComponent
  },
  {
    path: '**',
    component: TriviaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriviaPageRoutingModule { }
