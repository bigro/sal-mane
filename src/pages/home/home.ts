import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MEMBERS} from "../../model/mock-members";
import {TeamResult} from "../team-result/team-result";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  members = MEMBERS;

  constructor(public navCtrl: NavController) {
  }

  grouping() {
    let members = this.members
      .filter(member => member.isPlayer)
      .map(member => member);

    let shuffleMembers = this.shuffle(members);
    //TODO:指定されたチーム数に分割できるようにする(今は２チーム固定)
    let halfOfMembers = shuffleMembers.length / 2;

    let members1 = shuffleMembers.slice(0, halfOfMembers);
    let members2 = shuffleMembers.slice(halfOfMembers,);

    let teams = [{name: 'チーム1', members: members1}, {name: 'チーム2', members: members2}]

    this.navCtrl.push(TeamResult, {'teams': teams});
  }

  shuffle = array => {
    // deep copy
    const ary = array.slice();
    for (let i = ary.length - 1; 0 < i; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      // ary[i] <-> ary[r]
      [ary[i], ary[r]] = [ary[r], ary[i]];
    }
    return ary;
  }
}
