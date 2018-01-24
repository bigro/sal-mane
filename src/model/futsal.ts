import {Brackets} from "./bracket/brackets";

/**
 * フットサル
 */
export class Futsal {
  date: Date;
  place: string;
  brackets: Brackets;


  constructor(date: Date, place: string, brackets: Brackets) {
    this.date = date;
    this.place = place;
    this.brackets = brackets;
  }
}
