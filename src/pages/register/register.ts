import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  err_msg = "";

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    try{
      if (user.password.length < 6 || user.password.length > 18){
        throw {code: "pwd/length"};
      }
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        let user = firebase.auth().currentUser;
        user.sendEmailVerification();
        this.afAuth.auth.signOut();
        console.log(result);
        this.navCtrl.pop();
      })
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
