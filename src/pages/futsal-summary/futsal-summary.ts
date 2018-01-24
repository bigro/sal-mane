import {Component} from '@angular/core';
import {Futsals} from "../../model/futsals";
import {FUTSALS} from "../../model/mock-futsals";
import {Futsal} from "../../model/futsal";
import {BracketSummary} from "../bracket-summary/bracket-summary";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'futsal-summary.html'
})
export class FutsalSummary {

  futsals: Futsals = new Futsals(FUTSALS);

  constructor(public navCtrl: NavController) {
  }

  bracketSummary(futsal: Futsal) {
    this.navCtrl.push(BracketSummary, {
      brackets: futsal.brackets
    });
  }
}
