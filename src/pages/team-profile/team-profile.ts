import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Team} from "../../model/team";
import {TEAM} from "../../model/mock-team";
import {Member} from "../../model/member";

@Component({
  selector: 'page-home',
  templateUrl: 'team-profile.html'
})
export class TeamProfile {

  team: Team = TEAM;
  newMember: string;

  constructor(public navCtrl: NavController) {
  }

  addMember() {
    let member = new Member(this.newMember);
    this.team.addMember(member);
    this.newMember = "";
  }
}
