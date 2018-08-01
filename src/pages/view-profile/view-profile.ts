import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {

  user = {} as User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user.uid = navParams.data;
  }

  fillUserInfo(){
    if (undefined != this.user.uid){
      var doc = firebase.firestore().collection('Users').doc(this.user.uid);
      doc.get().then((doc) => {
        if (doc.exists){
          this.user.email = doc.data().email;
          this.user.username = doc.data().username;
          this.user.firstName = doc.data().firstName;
          this.user.lastName = doc.data().lastName;
        }
      });
    }
  }


  ionViewDidLoad() {
    this.fillUserInfo();
  }

}
