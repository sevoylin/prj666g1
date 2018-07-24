import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private toastCtrl: ToastController,
              public events: Events) {
  }

  ionViewDidLoad() {
  }


  logoutBtnListener() {
    this.afAuth.auth.signOut();
    this.events.publish('login_status',false,null);
    this.toastCtrl.create({
      message: "You have logout",
      duration: 3000,
      position: "bottom"
    }).present();
    this.navCtrl.setRoot('HomePage');
  }


}
