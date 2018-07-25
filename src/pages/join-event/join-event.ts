import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { User } from '../../models/user';
import { Event } from '../../models/event';

@IonicPage()
@Component({
  selector: 'page-join-event',
  templateUrl: 'join-event.html',
})
export class JoinEventPage {

  user = {} as User;
  event = {} as Event;
  targetId = "";
  hasPasswd = false as boolean;
  needScan = true as boolean;
  eventPwd: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController) {
    this.user.uid = firebase.auth().currentUser.uid;
  }

  scanQR(){
    var cbFunction = (params) =>{
      return new Promise((resolve,reject)=>{
        this.targetId = params;
        this.needScan = false;
        resolve();
      })
    }
    this.navCtrl.push('QrScanPage',{callback: cbFunction});
  }

  joinBtn(){
    if (this.verifyPwd())
      this.joinEvent(this.targetId);
    else
      this.toastCtrl.create({
        message: "Incorrect Password",
        duration: 3000,
        position: "bottom"
      }).present();
  }

  verifyPwd(){
    if (this.hasPasswd){
      // verify password
      return false;
    }
    return true;
  }

  joinEvent(eventId){
    var userRef = firebase.firestore().collection('Users').doc(this.user.uid);
    var eventRef = firebase.firestore().collection('Event').doc(eventId);
    eventRef.get().then( data =>{
      let isBlocked = data.data().blockedUsers.find(bu =>{ return bu.isEqual(userRef); });
      if (undefined == isBlocked){
        var userDoc = userRef.get().then((data)=>{
          this.user.eventList = data.data().eventList;
          this.user.eventList.push(eventRef);
          userRef.update('eventList',this.user.eventList);
        });
        var eventDoc = eventRef.get().then((da)=>{
          this.event.participants = da.data().participants;
          this.event.participants.push(userRef);
          eventRef.update('participants',this.event.participants);
        });
      }
      else {
        this.toastCtrl.create({
          message: "Cannot join this event",
          duration: 3000,
          position: "bottom"
        }).present();
      }
    });
  }

  ionViewDidLoad() {
    this.targetId = this.navParams.get('fromQR');
    if (undefined == this.targetId) this.targetId = "";
    else this.needScan = false;
    console.log(this.targetId);
  }

}
