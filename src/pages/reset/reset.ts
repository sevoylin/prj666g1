import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  email="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  resetPassword() {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(this.email)
      .then(() => {
        console.log("email sent");
        this.navCtrl.setRoot('HomePage');
      })
      .catch((error) => console.log(error))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

}
