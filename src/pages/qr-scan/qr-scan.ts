import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-scan',
  templateUrl: 'qr-scan.html',
})
export class QrScanPage {
  code = "papaya";
  callback: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScanPage');
  }

  scanCode() {
  /*
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
    }, (err) => {
      console.log('Error: ', err);
    });
  */
  }

  qrSucceed(){
    this.navCtrl.pop();
  }

  ionViewWillEnter(){
    this.callback = this.navParams.get("callback");
  }

  ionViewWillLeave() {
    this.callback(this.code);
}
}
