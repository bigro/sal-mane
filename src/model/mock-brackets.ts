import {Bracket} from "./bracket/bracket";
import {Home} from "./bracket/home";
import {MEMBERS} from "./mock-members";
import {Away} from "./bracket/away";
import {ShuffledTeam} from "./shuffled-team";

export const BRACKETS: Bracket[] = [
  {home: new Home(new ShuffledTeam("チーム1", MEMBERS)), away: new Away(new ShuffledTeam("チーム2", MEMBERS))},
  {home: new Home(new ShuffledTeam("チーム1", MEMBERS)), away: new Away(new ShuffledTeam("チーム3", MEMBERS))},
  {home: new Home(new ShuffledTeam("チーム2", MEMBERS)), away: new Away(new ShuffledTeam("チーム3", MEMBERS))},
  {home: new Home(new ShuffledTeam("チーム1", MEMBERS)), away: new Away(new ShuffledTeam("チーム2", MEMBERS))},
  {home: new Home(new ShuffledTeam("チーム1", MEMBERS)), away: new Away(new ShuffledTeam("チーム2", MEMBERS))},
  {home: new Home(new ShuffledTeam("チーム1", MEMBERS)), away: new Away(new ShuffledTeam("チーム2", MEMBERS))}
];
