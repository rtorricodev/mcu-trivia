import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GameOverPageComponent } from './pages/game-over-page/game-over-page.component';
import { NgModule } from '@angular/core';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { TriviaPageComponent } from './pages/trivia-page/trivia-page.component';
import { TriviaOptionComponent } from './pages/trivia-page/trivia-option/trivia-option.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaPageComponent,
    StartPageComponent,
    GameOverPageComponent,
    TriviaOptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
