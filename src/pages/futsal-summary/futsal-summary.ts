import {Component} from '@angular/core';
import {Futsals} from "../../model/futsals";
import {FUTSALS} from "../../model/mock-futsals";

@Component({
  selector: 'page-home',
  templateUrl: 'futsal-summary.html'
})
export class FutsalSummary {

  futsals: Futsals = new Futsals(FUTSALS);

  constructor() {
  }
}
