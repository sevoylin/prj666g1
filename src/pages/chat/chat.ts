import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/user';

import * as firebase from 'firebase';
import { DocumentReference } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  // Properties
  msgList = [];
  user = {} as User;
  chatRef: DocumentReference;
  chatTitle="";
  msgInput="";
  emojiDisplay = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth) {
    this.user.uid = this.afAuth.auth.currentUser.uid;
    this.user.email = this.afAuth.auth.currentUser.email;
    this.chatRef = navParams.data;
    this.getUser();
  }

  ionViewDidLoad() {
    this.chatListener();
  }
  
  getUser() {
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
    doc.onSnapshot((doc) => {
      if (doc.data() != null){
        if (doc.data().username != "")
          this.user = doc.data().username;
      }
    });

    // detach listener
    doc.onSnapshot(()=>{});
  }

  // Chat listener
  chatListener() {
    this.chatRef.onSnapshot((doc) => {  // set Listener
      this.msgList = doc.data().messages;
      this.chatTitle = doc.data().name;
    }, (err) => {                             // err Handler
      console.error("Error: " + err.message);
    });
  }

  // Button Listeners
  emojiBtn() {
    this.emojiDisplay = !this.emojiDisplay;
  }

  sendBtn() {
    // Do nothing if there is nothing but &nbsp;
    if (!this.msgInput.trim()) return;

    var msg = {sender: this.user, content: this.msgInput.trim()};
    // console.log("From Input : " + msg.sender + " said " + msg.content);
    this.msgList.push(msg);
    this.chatRef.update({messages: this.msgList});
  }

}
