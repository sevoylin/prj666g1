import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  err_msg = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  async register(user: User){
    try{
      if (user.password.length < 6 || user.password.length > 18){
        throw {code: "pwd/length"};
      }
      const result = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        let user = firebase.auth().currentUser;
        user.sendEmailVerification();
        this.initialUserDoc(user.uid, user.email);
        firebase.auth().signOut();
        this.navCtrl.pop();
      });
    }
    catch(e){
      switch (e.code){
        case('auth/email-already-in-use'): {
          this.err_msg = "Email already registered!";
          break;
        }
        case('auth/invalid-email'): {
          this.err_msg = "Please Using an email to register!";
          break;
        }
        case('pwd/length'): {
          this.err_msg = "Password should be 6-18 digits!";
          break;
        }
        default:{
          console.error(e.code);
          break;
        }
      }
    }
  }

  initialUserDoc(userId, userEmail){
    let cu = {} as User;
    cu.email = userEmail;
    cu.username = "";
    cu.firstName = "";
    cu.lastName = "";
    cu.eventList = [];
    cu.friendList = [];
    cu.blockedUsers = [];
    cu.location = new firebase.firestore.GeoPoint(0,0);
    firebase.firestore().collection('Users').doc(userId).set(cu);
  }

  ionViewDidLoad() {
    
  }

}
