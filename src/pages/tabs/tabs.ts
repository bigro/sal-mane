import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TeamShuffle} from "../team-shuffle/team-shuffle";
import {FutsalSummary} from "../futsal-summary/futsal-summary";
import {Settings} from "../settings/settings";
import {MembersPage} from "../members/members";

@Component({
  selector: 'page-home',
  templateUrl: 'tabs.html'
})

export class Tabs {

  home: any;
  futsalSummary: any;
  membersPage: any;
  settings: any;


  constructor(public navCtrl: NavController, params: NavParams) {
    this.home = TeamShuffle;
    this.futsalSummary = FutsalSummary;
    this.membersPage = MembersPage;
    this.settings = Settings;
  }
}
