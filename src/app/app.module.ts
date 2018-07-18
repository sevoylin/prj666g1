import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Page Declaration
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateEventPage } from '../pages/create-event/create-event';
import { ManageEventPage } from '../pages/manage-event/manage-event';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';
import { ViewEventPage } from '../pages/view-event/view-event';

// Page Module Import
import { HomePageModule } from '../pages/home/home.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { EditProfilePageModule } from '../pages/edit-profile/edit-profile.module';
import { ViewEventPageModule } from '../pages/view-event/view-event.module';
import { ChatPageModule } from '../pages/chat/chat.module';

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
// Every api key (like firebase access profile...) 
//    should put into './app.api.config.ts'

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    LoginPage,
    LogoutPage,
    //RegisterPage,
    ManageEventPage,
    CreateEventPage,
    //ViewEventPage,
    ProfilePage,
    FriendListPage
    //ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HomePageModule,
    EditProfilePageModule,
    RegisterPageModule,
    ViewEventPageModule,
    ChatPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    RegisterPage,
    ManageEventPage,
    CreateEventPage,
    ViewEventPage,
    ProfilePage,
    EditProfilePage,
    FriendListPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps,
    Geolocation
  ]
})
export class AppModule {}
