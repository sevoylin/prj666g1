import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { User } from "../../models/user"; 
import { AngularFireAuth } from "angularfire2/auth"

// pages

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  err_msg = "";

  constructor(public afAuth: AngularFireAuth,
              public events: Events,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then( () =>{
          // to see the email if it is verified
          this.afAuth.auth.onAuthStateChanged( data => {
            if (!data.emailVerified) {
              // email not verified
              console.log("email not verified");
              this.err_msg = "Email is not verified! Please check your mailbox!";
            }
            else {
              // email verified
              console.log("email verified");
              this.afAuth.auth.onAuthStateChanged(data =>{
                user.password=""; // delete password
                user.uid = data.uid;
              });
              this.events.publish('login_status', true, user);
              this.navCtrl.setRoot('HomePage');
            }
          });
          
        })
        // Error control
        .catch( err =>{
          switch (err.code) {
            case('auth/invalid-email'): {
              this.err_msg = "Please enter a valid email!";
              break;
            }
            case('auth/user-disabled'): {
              this.err_msg = "User disabled!";
              break;
            }
            case('auth/user-not-found'):
            case('auth/wrong-password'): {
              this.err_msg = "Incorrect email or password!";
              break;
            }
            default: {
              this.err_msg = err.code;
            }
          }

        });
      console.log(result);
      if (result) {
        // publish a status for changing 
      }
    }
    catch (e) {
      //console.error(e);
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  resetPwd() {
    this.navCtrl.push('ResetPage');
  }
}