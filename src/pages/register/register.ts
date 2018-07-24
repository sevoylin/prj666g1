import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  password = "";
  retypePwd = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController) {
    this.user = {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      eventList: [],
      friendList:[],
      blockedUsers: [],
      location: new firebase.firestore.GeoPoint(0,0)
    };
  }

  async register(user: User){
    try{
      if (this.user.email.trim().length==0 || this.user.email.indexOf('@')<0){
        throw {code: "auth/invalid-email"};
      }
      if (this.password.length < 6 || this.password.length > 18){
        throw {code: "pwd/length"};
      }
      if (this.password != this.retypePwd){
        throw {code: "pwd/match"};
      }
      const result = await firebase.auth().createUserWithEmailAndPassword(user.email, this.password)
      .then((res) => {
        let user = firebase.auth().currentUser;
        user.sendEmailVerification();
        this.initialDoc(user.uid);
        firebase.auth().signOut();
        this.navCtrl.pop();
      });
    }
    catch(e){
      var err_msg = "";
      switch (e.code){
        case('auth/invalid-email'): {
          err_msg = "Please Using an email to register!";
          break;
        }
        case('pwd/match'): {
          err_msg = "Re-Type password didn't match!";
          this.password = this.retypePwd = "";
          break;
        }
        case('auth/email-already-in-use'): {
          err_msg = "Email already registered!";
          break;
        }
        case('pwd/length'): {
          err_msg = "Password should be 6-18 digits!";
          break;
        }
        default:{
          err_msg = e.code;
          break;
        }
      }
      let err = this.toastCtrl.create({
        message: err_msg,
        duration: 3000,
        position: 'bottom'
      })
      err.present();
    }
  }

  initialDoc(userId){
    firebase.firestore().collection('Users').doc(userId).set(this.user);
    firebase.firestore().collection('Request').doc(userId).set({
      eventRequest: [],
      friendRequest: []
    });
  }

  ionViewDidLoad() {
    
  }

}