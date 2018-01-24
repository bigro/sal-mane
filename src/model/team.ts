import {Member} from './member';

/**
 * チーム
 */
export class Team {
  name:string;
  members:Member[];


  constructor(name: string, members: Member[]) {
    this.name = name;
    this.members = members;
  }
}
