import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Page Declaration
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManageEventPage } from '../pages/manage-event/manage-event';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { AvatarsPage } from '../pages/avatars/avatars';

// Page Module Import
import { HomePageModule } from '../pages/home/home.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

// api file
import { FIREBASE_CONFIG } from './app.api.config';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';

//  Bar code
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// Every api key (like firebase access profile...) 
//    should put into './app.api.config.ts'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LogoutPage,
    ManageEventPage,
    ProfilePage,
    FriendListPage,
    //AvatarsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    ManageEventPage,
    ProfilePage,
    FriendListPage,
    //AvatarsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps,
    Geolocation,
    BarcodeScanner
  ]
})
export class AppModule {}
