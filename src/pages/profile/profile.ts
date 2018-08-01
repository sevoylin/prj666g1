import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user = {} as User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController) {
    
    this.user.uid = firebase.auth().currentUser.uid;
    this.user.email = firebase.auth().currentUser.email;

    /* empty info */
    this.user.username = ""
    this.user.firstName = "";
    this.user.lastName = "";
  }

  ionViewDidLoad() {
    /* retrieve data from firestore of current user */
    this.getProfile();
  }
  
  getProfile() {
    /* get avatar
    var img = firebase.storage().ref('avatar').child(this.user.uid+'.png');
    console.log(img);
    */
    // get informations
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
    doc.get().then((doc) => {
      if (doc.exists){
        this.user.username = doc.data().username;
        this.user.firstName = doc.data().firstName;
        this.user.lastName = doc.data().lastName;
      }
    });
  }

  getQr(){
    this.navCtrl.push('QrCodePage', this.user.uid);
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage', this.user);
  }

  changePwd() {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(this.user.email)
      .then(() => {
        console.log("email sent");
        this.toast.create({
          message: `Reset link has been sent to, ${this.user.email}`,
          duration: 3000
        }).present();
      })
      .catch((error) => console.log(error))
  }

}
