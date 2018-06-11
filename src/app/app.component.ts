import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Page declarations for navigations
import { HomePage } from '../pages/home/home';
import { CreateEventPage } from '../pages/create-event/create-event';
import { ManageEventPage } from '../pages/manage-event/manage-event';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';

// Import plugins
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'X CreateEvent', component: CreateEventPage },
      { title: 'X ManageEvent', component: ManageEventPage },
      { title: 'X FriendList', component: FriendListPage},
      { title: 'Login', component: LoginPage},
      { title: 'X Profile', component: ProfilePage},
      { title: 'Register', component: RegisterPage},
      { title: 'Chat', component:ChatPage}
    ];

    firebase.initializeApp({
      apiKey: "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
      authDomain: "meetogether-prj666g1.firebaseapp.com",
      databaseURL: "https://meetogether-prj666g1.firebaseio.com/",
      projectId: "meetogether-prj666g1",
      storageBucket: "meetogether-prj666g1.appspot.com",
      messagingSenderId: "719772453281"
    });
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
