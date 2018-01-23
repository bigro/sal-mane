import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Team} from "../../model/team";
import {BracketSummary} from "../bracket-summary/bracket-summary";
import {Home} from "../../model/bracket/home";
import {Away} from "../../model/bracket/away";

@Component({
  selector: 'page-home',
  templateUrl: 'team-result.html'
})
export class TeamResult {

  teams: Team[];

  constructor(public navCtrl: NavController, params: NavParams) {
    this.teams = params.get('teams');
  }

  gameStart() {
    let sum = 0;
    let brackets = [];
    //TODO:２チーム前提の処理
    for (let i = 0; i < 10; i++) {
      brackets.push({home: new Home(this.teams[0]), away: new Away(this.teams[1])});
    }

    this.navCtrl.push(BracketSummary, {'brackets': brackets});
  }
}
