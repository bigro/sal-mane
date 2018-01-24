import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-home',
  templateUrl: 'tabs.html'
})

export class Tabs {

  home: any;
  futsalSummary: any;


  constructor(public navCtrl: NavController, params: NavParams) {
    this.home = HomePage;
    this.futsalSummary = HomePage;
  }
}
