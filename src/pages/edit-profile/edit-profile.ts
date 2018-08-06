import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
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
              public events: Events,
              public navParams: NavParams) {
    // receive data from push
    this.user = navParams.data;
  }

  ionViewDidLoad() {
  }

  saveBtn() {
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
    doc.update({
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birth: this.user.birth,
      gender: this.user.gender
    });
    this.events.publish('login_status', true, this.user);
    this.navCtrl.pop();
  }

}
