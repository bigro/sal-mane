import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Bracket} from "../../model/bracket/bracket";
import {EditGame} from "../edit-game/edit-game";
import {Brackets} from "../../model/bracket/brackets";

@Component({
  selector: 'page-home',
  templateUrl: 'bracket-summary.html'
})
//TODO:「対戦カード」だけど、もっとしっくりくる名前が良い
export class BracketSummary {

  brackets: Brackets;

  constructor(public navCtrl: NavController, params: NavParams) {
    this.brackets = params.get('brackets');
  }

  edit(bracket: Bracket) {
    this.navCtrl.push(EditGame, {
      bracket: bracket
    });
  }
}
