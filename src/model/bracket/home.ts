import {Point} from "./point";
import {ShuffledTeam} from "../shuffled-team";

/**
 * ホーム
 */
export class Home {
  team: ShuffledTeam;
  point: Point;


  constructor(team: ShuffledTeam) {
    this.team = team;
    this.point = Point.zero();
  }
}
