import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {TeamResult} from "../pages/team-result/team-result";
import {BracketSummary} from "../pages/bracket-summary/bracket-summary";
import {EditGame} from "../pages/edit-game/edit-game";
import {Tabs} from "../pages/tabs/tabs";
import {TeamShuffle} from "../pages/team-shuffle/team-shuffle";
import {FutsalSummary} from "../pages/futsal-summary/futsal-summary";

@NgModule({
  declarations: [
    MyApp,
    TeamShuffle,
    TeamResult,
    BracketSummary,
    EditGame,
    Tabs,
    FutsalSummary
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeamShuffle,
    TeamResult,
    BracketSummary,
    EditGame,
    Tabs,
    FutsalSummary
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
