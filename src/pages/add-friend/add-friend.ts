import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';

/**
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html',
})
export class AddFriendPage {
  user = {} as User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    console.log(firebase.auth().currentUser.email);
  }

  ionViewDidLoad() {
    
  }


  submitEmail(){
    console.log("submitEmail");

    //this.navCtrl.pop();
  }

  scanQR(){
    console.log("scan QR");

  }
}
