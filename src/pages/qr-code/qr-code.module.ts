import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QrCodePage } from './qr-code';

@NgModule({
  declarations: [
    QrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodePage),
    NgxQRCodeModule
  ],
})
export class QrCodePageModule {}
