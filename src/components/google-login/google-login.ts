import { Component } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase/app';

@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  user: Observable<firebase.User>;
  

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private gplus: GooglePlus,
              private platform: Platform,
              public events: Events,
            ) {
      this.user = this.afAuth.authState;
  }

  googleLogin(){
    if(this.platform.is('cordova')){
      this.nativeGoogleLogin();
    }else{
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<void>{
    try{
      const gplusUser = await this.gplus.login({
        'webClientID': '719772453281-uqlmve90v8m0mijumbpg9ku3pmu5jr6r.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      });
      var credential =  await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      );
      this.checkProfileRedirect(this.afAuth.auth.currentUser.uid,this.afAuth.auth.currentUser.email);
    }catch(err){
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void>{
    try{
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.checkProfileRedirect(this.afAuth.auth.currentUser.uid,this.afAuth.auth.currentUser.email);
    }catch(err){
      console.log(err);
    }
  }

  signOut(){
    this.afAuth.auth.signOut();
    if(this.platform.is('cordova')){
      this.gplus.logout();
    }
  }

  checkProfileRedirect(userId, userEmail){
    var usr = {
      uid: userId,
      email: userEmail,
      username: "",
      firstName: "",
      lastName: "",
      birth: new Date(),
      gender: "",
      eventList: [],
      friendList:[],
      blockedUsers: [],
      location: new firebase.firestore.GeoPoint(0,0)
    } as User;
    var uRef = firebase.firestore().collection('Users').doc(userId);
    uRef.get().then(doc=>{
      if(doc.exists){
        usr.firstName = doc.data().firstName;
        usr.lastName = doc.data().lastName;
        usr.username = doc.data().username;
      }
      else{
        uRef.set(usr);
        firebase.firestore().collection('Request').doc(userId).set({
          eventRequest: [],
          friendRequest: []
        });
      }
      this.events.publish('login_status', true, usr);
      this.navCtrl.setRoot('HomePage');
    });
  }
}
