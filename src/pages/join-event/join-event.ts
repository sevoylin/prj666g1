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
  targetId = "" as string;
  hasPasswd = false as boolean;
  needInput = true as boolean;
  eventPwd = "" as string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController) {
    this.user.uid = firebase.auth().currentUser.uid;
    this.eventPwd = "";
  }

  scanQR(){
    var cbFunction = (params) =>{
      return new Promise((resolve,reject)=>{
        this.targetId = params;
        if (undefined != this.targetId && "" != this.targetId)
          this.needInput = false;
        resolve();
      });
    }
    this.navCtrl.push('QrScanPage',{callback: cbFunction});
  }

  joinBtn(){
    this.joinEvent(this.targetId);
  }

  joinEvent(eventId){
    var userRef = firebase.firestore().collection('Users').doc(this.user.uid);
    var eventRef = firebase.firestore().collection('Event').doc(eventId);
    eventRef.get().then( data =>{
      if (data.exists){
        let isBlocked = data.data().blockedUsers.find(bu =>{ return bu.isEqual(userRef); });
        if (undefined == isBlocked){
          if (data.data().password == this.eventPwd){
            var eventName = "";
            var userDoc = userRef.get().then((data)=>{
              this.user.eventList = data.data().eventList;
              this.user.eventList.push(eventRef);
              userRef.update('eventList',this.user.eventList);
            });
            var eventDoc = eventRef.get().then((da)=>{
              eventName = da.data().eventName;
              this.event.participants = da.data().participants;
              this.event.participants.push(userRef);
              eventRef.update('participants',this.event.participants);
            });
            this.toastCtrl.create({
              message: "You have Joined " + eventName,
              duration: 3000,
              position: "bottom"
            }).present();
            this.navCtrl.pop();
          }
          else{
            this.toastCtrl.create({
              message: "Cannot join this event",
              duration: 3000,
              position: "bottom"
            }).present();
          }
        }
        else {
          this.toastCtrl.create({
            message: "Cannot join this event",
            duration: 3000,
            position: "bottom"
          }).present();
        }
      }
      else{
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
    if (undefined == this.targetId || "" == this.targetId) this.targetId = "";
    else this.needInput = false;
    console.log(this.targetId);
  }

}
