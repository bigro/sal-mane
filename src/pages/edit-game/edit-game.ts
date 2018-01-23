import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Bracket} from "../../model/bracket";

@Component({
  selector: 'page-home',
  templateUrl: 'edit-game.html'
})

export class EditGame {

  bracket: Bracket;

  constructor(public navCtrl: NavController, params: NavParams) {
    this.bracket = params.get('bracket');
  }
}
