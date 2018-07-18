import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

// model import
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  user = {} as User;
  home_msg = "";

  constructor(private afAuth: AngularFireAuth,
              public events: Events,
              public navCtrl: NavController,
              public navParams: NavParams) {
    events.subscribe('login_status', (isLogin, user) =>{
      if (isLogin && user != null){
        this.home_msg = 'Hello ' + user.uid;
      }
      else{
        this.home_msg = "Hello there! Use the left side menue to login!";
      }
    });
    
  }

  tester(){
    this.navCtrl.push('ViewEventPage','wpI1Zae9qHlF9ZxSXtzn');
  }

  ionViewWillLoad() {
  }
}
