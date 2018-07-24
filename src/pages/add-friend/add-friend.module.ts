import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFriendPage } from './add-friend';
import { QrScanPageModule } from '../qr-scan/qr-scan.module';

@NgModule({
  declarations: [
    AddFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFriendPage),
    QrScanPageModule,
  ],
})
export class AddFriendPageModule {}
