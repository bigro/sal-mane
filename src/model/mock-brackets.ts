import {Bracket} from "./bracket/bracket";
import {Home} from "./bracket/home";
import {Team} from "./team";
import {MEMBERS} from "./mock-members";
import {Away} from "./bracket/away";

export const BRACKETS: Bracket[] = [
  {home: new Home(new Team("チーム1", MEMBERS)), away: new Away(new Team("チーム2", MEMBERS))},
  {home: new Home(new Team("チーム1", MEMBERS)), away: new Away(new Team("チーム3", MEMBERS))},
  {home: new Home(new Team("チーム2", MEMBERS)), away: new Away(new Team("チーム3", MEMBERS))},
  {home: new Home(new Team("チーム1", MEMBERS)), away: new Away(new Team("チーム2", MEMBERS))},
  {home: new Home(new Team("チーム1", MEMBERS)), away: new Away(new Team("チーム2", MEMBERS))},
  {home: new Home(new Team("チーム1", MEMBERS)), away: new Away(new Team("チーム2", MEMBERS))}
];
