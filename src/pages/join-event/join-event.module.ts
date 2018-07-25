import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScanPageModule} from '../qr-scan/qr-scan.module';
import { JoinEventPage } from './join-event';

@NgModule({
  declarations: [
    JoinEventPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinEventPage),
    QrScanPageModule,
  ],
})
export class JoinEventPageModule {}
