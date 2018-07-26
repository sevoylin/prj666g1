import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

// model import
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  data: any = { "toolbarTitle": "Home",
                "title": "MeeTogether",
                "subtitle": "PRJ666 Group 1",
                "subtitle2": "Dennis Arul",
                "subtitle3": "Jay Ansin",
                "subtitle4": "Shlok Purani",
                "subtitle5": "Yankai Tian (leader)",
                "link":"https://zenit.senecac.on.ca/~prj666_182a01/",
                "description": "Link to zenit",
                "background": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg" };
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

  ionViewWillLoad() {
  }

  ionViewDidLoad(){
  }
}
