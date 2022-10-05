import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GameOverPageComponent } from './pages/game-over-page/game-over-page.component';
import { NgModule } from '@angular/core';
import { StartPageComponent } from './pages/start-page/start-page.component';
;

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GameOverPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
