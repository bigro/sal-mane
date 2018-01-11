import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Bracket} from "../../model/bracket";

@Component({
  selector: 'page-home',
  templateUrl: 'bracket-summary.html'
})
//TODO:「対戦カード」だけど、もっとしっくりくる名前が良い
export class BracketSummary {

  brackets: Bracket[];

  constructor(public navCtrl: NavController, params: NavParams) {
    this.brackets = params.get('brackets');
  }
}
