import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BattleRecordsPage } from './battle-records';

@NgModule({
  declarations: [
    BattleRecordsPage,
  ],
  imports: [
    IonicPageModule.forChild(BattleRecordsPage),
  ],
})
export class BattleRecordsPageModule {}
