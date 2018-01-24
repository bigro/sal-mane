import {Brackets} from "./bracket/brackets";
import {Futsal} from "./futsal";

/**
 * フットサル
 */
export class Futsals {
  list: Futsal[];


  constructor(list: Futsal[]) {
    this.list = list;
  }
}
