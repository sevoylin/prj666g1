import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScanPage } from './qr-scan';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    QrScanPage,
  ],
  imports: [
    IonicPageModule.forChild(QrScanPage),
    //BarcodeScanner
  ],
})
export class QrScanPageModule {}
