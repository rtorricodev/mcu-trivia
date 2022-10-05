import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TriviaHeaderComponent } from './trivia-header/trivia-header.component';
import { TriviaOptionComponent } from './trivia-option/trivia-option.component';
import { TriviaPageComponent } from './trivia-page.component';
import { TriviaPageRoutingModule } from './trivia-page-routing.module';

@NgModule({
  declarations: [
    TriviaPageComponent,
    TriviaOptionComponent,
    TriviaHeaderComponent,
  ],
  imports: [
    CommonModule,
    TriviaPageRoutingModule
  ]
})
export class TriviaPageModule { }
