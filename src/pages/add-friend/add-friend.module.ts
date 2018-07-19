import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScanPageModule } from '../qr-scan/qr-scan.module';
import { AddFriendPage } from './add-friend';

@NgModule({
  declarations: [
    AddFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFriendPage),
    QrScanPageModule
  ],
})
export class AddFriendPageModule {}
