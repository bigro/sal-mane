import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TeamProfile} from "../team-profile/team-profile";

@Component({
  selector: 'page-home',
  templateUrl: 'settings.html'
})
export class Settings {

  constructor(public navCtrl: NavController) {}

  teamProfile() {
    this.navCtrl.push(TeamProfile);
  }
}
