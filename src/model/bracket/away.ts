import {Team} from "../team";
import {Point} from "./point";

/**
 * アウェイ
 */
export class Away {
  team:Team;
  point:Point;


  constructor(team: Team) {
    this.team = team;
    this.point = Point.zero();
  }
}
