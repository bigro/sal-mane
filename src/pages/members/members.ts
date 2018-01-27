import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Member} from "../../model/member";
import {MEMBERS} from "../../model/mock-members";
import {BattleRecordsPage} from "../battle-records/battle-records";

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  members: Member[] = MEMBERS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
  }

  battleRecords(member: Member) {
    this.navCtrl.push(BattleRecordsPage);
  }

}
