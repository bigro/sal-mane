import {Point} from "./point";
import {ShuffledTeam} from "../shuffled-team";

/**
 * アウェイ
 */
export class Away {
  team:ShuffledTeam;
  point:Point;


  constructor(team: ShuffledTeam) {
    this.team = team;
    this.point = Point.zero();
  }
}
