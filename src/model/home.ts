import {Team} from "./team";

export class Home {
  team:Team;
  point:number;


  constructor(team: Team) {
    this.team = team;
    this.point = 0;
  }
}
