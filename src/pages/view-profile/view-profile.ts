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

  data: any = { "toolbarTitle"   : "View Profile", 
                "title" : "",
                "subtitle" : "",
                "background": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg" };
  btnList = [];
  user = {} as User;
  fromEvent = true as boolean;
  isEventAdmin = false as boolean;
  eventId = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,) {
    this.user.uid = navParams.get('uid');
    this.fromEvent = navParams.get('fromEvent');
  }

  ionViewDidLoad() {
    this.fillUserInfo();
  }

  fillUserInfo(){
    if (undefined != this.user.uid){
      var doc = firebase.firestore().collection('Users').doc(this.user.uid);
      doc.get().then((doc) => {
        if (doc.exists){
          this.user.avatar = doc.data().avatar;
          this.user.email = doc.data().email;
          this.user.username = doc.data().username;
          if (this.fromEvent){
            this.user.lastName = "";
            this.user.firstName = "Not Avaliable";
            this.eventId = this.navParams.get('eventId').toString();
            this.isEventAdmin = this.navParams.get('isAdmin');
          }
          else{
            this.user.firstName = doc.data().firstName;
            this.user.lastName = doc.data().lastName;
          }
        }
      });
    }
  }

}
