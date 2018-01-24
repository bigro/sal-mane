import {Futsal} from "./futsal";
import {Brackets} from "./bracket/brackets";
import {BRACKETS} from "./mock-brackets";

export const FUTSALS: Futsal[] = [
  {date: new Date(), place: "宝塚", brackets: new Brackets(BRACKETS)},
  {date: new Date(), place: "尼崎", brackets: new Brackets(BRACKETS)},
  {date: new Date(), place: "鶴見", brackets: new Brackets(BRACKETS)},
  {date: new Date(), place: "鶴見", brackets: new Brackets(BRACKETS)},
  {date: new Date(), place: "尼崎", brackets: new Brackets(BRACKETS)},
  {date: new Date(), place: "宝塚", brackets: new Brackets(BRACKETS)}
];
