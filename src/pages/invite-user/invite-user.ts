import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-invite-user',
  templateUrl: 'invite-user.html',
})
export class InviteUserPage {

  eventId = "" as string;
  user = {} as User;
  email = "";
  msg = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    this.eventId = navParams.data.toString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteUserPage');
  }

  invite(){
    var ucRef = firebase.firestore().collection('Users').where("email", "==", this.email).get().then((d)=>{
      if (d.docs.length > 0){
        console.log("has !");
        this.pushInviteRequest(d.docs[0].id);
      }
    });
  }

  async pushInviteRequest(fId){
    try{
    let uRef = firebase.firestore().collection('Users').doc(fId);
    let eRef = firebase.firestore().collection('Event').doc(this.eventId);
    // determine if the person is already in list
    eRef.get().then(doc =>{
      var canFind = doc.data().participants.find((ele)=>{return ele.isEqual(uRef);});
      if (undefined != canFind){
        this.toastCtrl.create({
          message: "User already in the event",
          duration: 3000,
          position: "bottom"
        }).present();
      }
      else{
        let fReq = firebase.firestore().collection('Request').doc(fId);
        fReq.get().then(doc=>{
          var is = doc.data().eventRequest.find((fr)=> { return fr.from.isEqual(eRef); });
          if (undefined == is){
            let fReqList = doc.data().eventRequest;
            fReqList.push({
              from: eRef,
              msg: this.msg.trim()
            });
            fReq.update('eventRequest',fReqList);
            this.toastCtrl.create({
              message: "Sent " + this.email + " a invite request",  // Even its blocked, show cannot find to prevent user
              duration: 3000,
              position: "bottom"
            }).present();
          }
        });
      }
    });
    }
    catch(e){
      console.log(e);
    }
  }
}
