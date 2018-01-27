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
import {Settings} from "../pages/settings/settings";
import {TeamProfile} from "../pages/team-profile/team-profile";
import {MembersPage} from "../pages/members/members";
import {BattleRecordsPage} from "../pages/battle-records/battle-records";

@NgModule({
  declarations: [
    MyApp,
    TeamShuffle,
    TeamResult,
    BracketSummary,
    EditGame,
    Tabs,
    FutsalSummary,
    MembersPage,
    Settings,
    TeamProfile,
    BattleRecordsPage
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
    FutsalSummary,
    MembersPage,
    Settings,
    TeamProfile,
    BattleRecordsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
