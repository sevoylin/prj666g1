import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  user = {} as User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    // receive data from push
    this.user = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  saveBtn() {
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
    doc.update({
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName
    });
    this.navCtrl.pop();
  }

}
