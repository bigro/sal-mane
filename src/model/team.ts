/**
 * チーム
 */
import {Member} from "./member";

export class Team {
  name: string;
  mail: string;
  members: Member[];


  constructor(name: string, mail: string, members: Member[]) {
    this.name = name;
    this.mail = mail;
    this.members = members;
  }

  addMember(member: Member) {
    this.members.push(member);
  }
}
