import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  // Properties
  public msgList = null;
  user="";
  chatTitle="";
  msgInput="";
  emojiDisplay = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private chatpvd: ChatProvider) {
    this.user = this.afAuth.auth.currentUser.email;
    this.chatTitle = navParams.get('chatWithId');
    this.chatListener();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.getUser();
  }
  
  getUser() {
    var uid = this.afAuth.auth.currentUser.uid;
    var doc = firebase.firestore().collection('Users').doc(uid);
    doc.onSnapshot((doc) => {
      if (doc.data() != null){
        if (doc.data().username != "")
          this.user = doc.data().username;
      }
    });
  }

  // Chat listener
  chatListener() {
    this.chatpvd.fsDoc.onSnapshot((doc) => {  // set Listener
      this.msgList = doc.data().messages;
      this.chatTitle = doc.data().name;
    }, (err) => {                             // err Handler
      console.error("Error: " + err.message);
    })
  }

  // Button Listeners
  emojiBtnListener() {
    this.emojiDisplay = !this.emojiDisplay;
  }

  sendBtnListener() {
    // Do nothing if there is nothing but &nbsp;
    if (!this.msgInput.trim()) return;

    var msg = {sender: this.user, content: this.msgInput.trim()};
    // console.log("From Input : " + msg.sender + " said " + msg.content);
    this.msgList.push(msg);
    this.chatpvd.fsDoc.update({messages: this.msgList});
  }


}
