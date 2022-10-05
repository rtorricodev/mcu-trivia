import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartPageComponent } from './start-page/start-page.component';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { GameOverPageComponent } from './game-over-page/game-over-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaPageComponent,
    StartPageComponent,
    GameOverPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
