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
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';

// Page Module Import
import { HomePageModule } from '../pages/home/home.module';
import { RegisterPageModule } from '../pages/register/register.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatProvider } from '../providers/chat/chat';

// Angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth"

// api file
import { FIREBASE_CONFIG,
         GOOGLE_MAP_KEY } from './app.api.config';
// Every api key (like firebase access profile...) 
//    should put into './app.api.config.ts'

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    LoginPage,
    //RegisterPage,
    ManageEventPage,
    CreateEventPage,
    ManageEventPage,
    ProfilePage,
    FriendListPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HomePageModule,
    RegisterPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ManageEventPage,
    CreateEventPage,
    ManageEventPage,
    ProfilePage,
    FriendListPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider
  ]
})
export class AppModule {}
