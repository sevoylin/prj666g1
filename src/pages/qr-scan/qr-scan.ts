import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-qr-scan',
  templateUrl: 'qr-scan.html',
})
export class QrScanPage {
  code = "";
  callback: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScanPage');
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      this.navCtrl.pop();
    }, (err) => {
      console.log("Cannot Read QR Code!");
    });
  }

  ionViewWillEnter(){
    this.callback = this.navParams.get("callback");
  }

  ionViewDidEnter(){
    this.scanCode();
  }

  ionViewWillLeave() {
    this.callback(this.code);
}
}
