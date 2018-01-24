import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TeamShuffle} from "../team-shuffle/team-shuffle";

@Component({
  selector: 'page-home',
  templateUrl: 'tabs.html'
})

export class Tabs {

  home: any;
  futsalSummary: any;


  constructor(public navCtrl: NavController, params: NavParams) {
    this.home = TeamShuffle;
    this.futsalSummary = TeamShuffle;
  }
}