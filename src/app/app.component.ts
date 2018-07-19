import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Page declarations for navigations
import { HomePage } from '../pages/home/home';
import { ManageEventPage } from '../pages/manage-event/manage-event';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';

// Import plugins
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // default navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Login', component: LoginPage, icon: 'log-in' }
    ];

    // using events subscribe to track login/out status
    events.subscribe('login_status', (isLogin, user) => {
      if (isLogin && user != null) {
        this.pages = [
          { title: 'Home', component: HomePage, icon: 'home' },
          { title: 'My Event', component: ManageEventPage, icon: 'calendar' },
          { title: 'My Friends', component: FriendListPage, icon: 'people' },
          { title: 'My Profile', component: ProfilePage, icon: 'person' },
          { title: 'Logout', component: LogoutPage, icon: 'exit' }
          //{ title: 'Register', component: RegisterPage}
        ];
      }
      else {
        this.pages = [
          { title: 'Home', component: HomePage, icon: 'home' },
          { title: 'Login', component: LoginPage, icon: 'log-in' }
        ];
      }
    })
    /*
    firebase.initializeApp({
      apiKey: "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
      authDomain: "meetogether-prj666g1.firebaseapp.com",
      databaseURL: "https://meetogether-prj666g1.firebaseio.com/",
      projectId: "meetogether-prj666g1",
      storageBucket: "meetogether-prj666g1.appspot.com",
      messagingSenderId: "719772453281"
    });
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
