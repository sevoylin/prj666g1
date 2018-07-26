import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { User } from "../../models/user"; 
import { AngularFireAuth } from "angularfire2/auth"
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = { "toolbarTitle" : "Login", 
                "forgotPassword" : "Forgot password?",
                "other" : "A button",
                "subtitle"       : "Welcome",
                "labelEmail"     : "EMAIL",
                "labelUsername"  : "USERNAME",
                "labelPassword"  : "PASSWORD",
                "title"          : "Login to your account",
                "email"          : "Enter your email",
                "username"       : "Enter your username",
                "password"       : "Enter your password",
                "register"       : "Register",
                "login"          : "Login",
                "logo"           : "assets/images/logo/2.png",
                "errorUser"      : "Field can't be empty.",
                "errorPassword"  : "Field can't be empty." };
  user = {} as User;
  password = "";
  err_msg = "";

  constructor(public afAuth: AngularFireAuth,
              public events: Events,
              public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, this.password)
        .then( () =>{
          // to see the email if it is verified
          this.afAuth.auth.onAuthStateChanged( data => {
            if (!data.emailVerified) {
              // email not verified
              throw {code: 'auth/email-not-verified'};
            }
            // email verified
            this.afAuth.auth.onAuthStateChanged(data =>{
              this.password=""; // delete password
              user.uid = data.uid;
              firebase.firestore().collection('Users').doc(user.uid).get().then(data=>{
                this.user.firstName = data.data().firstName;
                this.user.lastName = data.data().lastName;
                this.events.publish('login_status', true, user);
                this.toastCtrl.create({
                  message: "Welcome! " + this.user.firstName + " " + this.user.lastName,
                  duration: 3000,
                  position: "bottom"
                }).present();
                this.navCtrl.setRoot('HomePage');
              }); 
            });
          });
        })
        // Error control
        .catch( err =>{
          switch (err.code) {
            case ('auth/email-not-verified'): {
              this.err_msg = "Email is not verified! Please check your mailbox!";
              break;
            }
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
          this.toastCtrl.create({
            message: this.err_msg,
            duration: 3000,
            position: "bottom"
          }).present();
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