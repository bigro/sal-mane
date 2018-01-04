import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Member} from "../../model/member";

@Component({
  selector: 'page-home',
  templateUrl: 'team-result.html'
})
export class TeamResult {

  team1: Member[];
  team2: Member[];

  constructor(public navCtrl: NavController, params: NavParams) {
    this.team1 = params.get('team1');
    this.team2 = params.get('team2');
  }

  gameStart() {

  }
}
