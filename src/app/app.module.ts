import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TeamResult} from "../pages/team-result/team-result";
import {BracketSummary} from "../pages/bracket-summary/bracket-summary";
import {EditGame} from "../pages/edit-game/edit-game";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeamResult,
    BracketSummary,
    EditGame
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeamResult,
    BracketSummary,
    EditGame
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
