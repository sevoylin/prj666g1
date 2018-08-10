import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

// Page declarations for navigations
import { HomePage } from '../pages/home/home';
import { ManageEventPage } from '../pages/manage-event/manage-event';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
//import { AvatarsPage } from '../pages/avatars/avatars';

// Import plugins
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  data: any = {
    "toolbarTitle": "Menu",
    "background": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg",
    "image": "assets/images/logo/1.png",
    "userImage": "",
    "username": "",
    "userName": "",
    "title": "MeeTogether",
    "description": "Please login to ...something something meaningful something...",
  }
  user = {} as User;
  isLogged: boolean = false;
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public events: Events,
              public afAuth: AngularFireAuth,
              private bgGeo: BackgroundGeolocation,
              private geo: Geolocation) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // default navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' }
      //{ title: 'Login', component: LoginPage, icon: 'log-in' }
    ];

    // using events subscribe to track login/out status
    events.subscribe('login_status', (isLogin, user) => {
      if (isLogin && user != null) {
        this.isLogged = true;
        this.user.uid = user.uid;
        this.data.userImage = user.avatar;
        this.data.username = user.username; 
        this.data.userName = user.firstName + " " + user.lastName; 
        
        // TODO: NEED TO RETRIEVE THE DATA "CORRECTLY" ABOVE 
        this.data.userImage = "assets/images/avatars/20.jpg";
        this.bgGeo.start();

        this.pages = [
          { title: 'Home', component: HomePage, icon: 'home' },
          { title: 'My Profile', component: ProfilePage, icon: 'person' },
          { title: 'My Friends', component: FriendListPage, icon: 'people' },
          { title: 'My Events', component: ManageEventPage, icon: 'calendar' }
          //{ title: 'Avatars', component: AvatarsPage, icon: 'people' },
          //{ title: 'Logout', component: LogoutPage, icon: 'exit' }
        ];
      }
      else {
        this.isLogged = false;
        this.bgGeo.stop();
        this.pages = [
          { title: 'Home', component: HomePage, icon: 'home' }
          //{ title: 'Login', component: LoginPage, icon: 'log-in' }
        ];
      }
    })
    /*
    
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // user initial
    var user = {} as User;
    var loginStatus = this.afAuth.authState;
    loginStatus.subscribe(data=>{
      if (data.uid)
        user.uid = data.uid;
        firebase.firestore().collection('Users').doc(user.uid).get().then(data=>{
          user.username = data.data().username;
          user.firstName = data.data().firstName;
          user.lastName = data.data().lastName;
          this.events.publish('login_status', true, user);
          this.toastCtrl.create({
            message: "Welcome! " + user.firstName + " " + user.lastName,
            duration: 3000,
            position: "bottom"
          }).present();
          this.nav.setRoot('HomePage');
        }); 
    });

    // geo initial
    const bgGeoConfig: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 10,
      distanceFilter: 30,
      debug: false, //  enable this hear sounds for background-geolocation life-cycle.
      
      // Android
      interval: 3000,
      notificationTitle: "MeeTogether",
      notificationText: "keep tracking",
      stopOnStillActivity: false,
      // IOS
      activityType: 'Other',
      pauseLocationUpdates: false,
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };
    this.bgGeo.configure(bgGeoConfig)
    .subscribe((location: BackgroundGeolocationResponse) => {
      if (!firebase.app.length){
        firebase.initializeApp({
          apiKey: "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
          authDomain: "meetogether-prj666g1.firebaseapp.com",
          databaseURL: "https://meetogether-prj666g1.firebaseio.com/",
          projectId: "meetogether-prj666g1",
          storageBucket: "meetogether-prj666g1.appspot.com",
          messagingSenderId: "719772453281"
        });
      }
      if (this.isLogged)
        this.setLocationToFirebase(this.user.uid, location.latitude, location.longitude);
      // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
      // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
      // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
      this.bgGeo.finish(); // FOR IOS ONLY
    });
  }

  setLocationToFirebase(userId, lat, lng){
    var gp = new firebase.firestore.GeoPoint(lat, lng);
    firebase.firestore().collection('Users').doc(userId).update('location',gp);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  appSettings() {
    //
  }

  profileSettings() {
    //this.navCtrl.push('ProfilePage');
  }

  login() {
    this.openPage({ title: 'Login', component: LoginPage, icon: 'log-in' });
  }

  logout() {
    //this.navCtrl.push('LogoutPage');
    let alert = this.alertCtrl.create({
      title: 'Confirm logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.afAuth.auth.signOut();
            this.events.publish('login_status',false,null);
            this.toastCtrl.create({
              message: "You have logout",
              duration: 3000,
              position: "bottom"
            }).present();
            this.openPage(this.pages.find(p=>{return p.title == "Home";}))
          }
        }
      ]
    });
    alert.present();
  }
}
