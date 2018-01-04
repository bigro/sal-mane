import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Team} from "../../model/team";

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

  }
}
