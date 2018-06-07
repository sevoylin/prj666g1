import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  // Properties
  public msgList = null;
  user="DemoUser";
  chatTitle="";
  msgInput="";
  emojiDisplay = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private chatpvd: ChatProvider) {
    this.chatTitle = navParams.get('chatWithId');
    this.chatListener();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
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
