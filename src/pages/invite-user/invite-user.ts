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

  eventRef = {} as Event;
  email = "";
  msg = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    this.eventRef = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteUserPage');
  }

  invite(){
    var ucRef = firebase.firestore().collection('Users').where("email", "==", this.email).get().then((d)=>{
      if (d.docs.length > 0){
        console.log("has !");
        this.pushEventRequest(d.docs[0].id);
      }
      else{
        // cannot find this guy
        let err = this.toastCtrl.create({
          message: "Cannot find user with email: " + this.email,
          duration: 3000,
          position: "bottom"
        });
        err.present();
      }
    });
  }


  async pushEventRequest(fId){
    /*
    let fRef = firebase.firestore().collection('Users').doc(fId);
    let eRef = await this.eventRef.get();
    // determine if the person is already in list
    if (fRef.friendList.length > 0 && undefined != eRef.participants.find((ele)=>{return ele.isEqual(fRef);})){
      let err = this.toastCtrl.create({
        message: "User already in the list",
        duration: 3000,
        position: "bottom"
      });
      err.present();
      return undefined; // skip out
    }

    // determine if the person is in the block list
    var isBlocked = false;
    var is = await eRef.blockedUsers.find((bu)=>{ return bu.isEqual(eRef); });
    if (undefined != is){
        let err = this.toastCtrl.create({
          message: "Cannot find user with email: " + this.email,  // Even its blocked, show cannot find to prevent user
          duration: 3000,
          position: "bottom"
        });
        err.present();
        isBlocked = true;
    }

    if (!isBlocked) {
      // get friends' request
      let fReq = firebase.firestore().collection('Request').doc(fId);
      let fReqGet = await fReq.get();
      is = fReqGet.data().eventRequest.find((fr)=> { return fr.from.isEqual(eRef); });
      if (undefined == is){
        let fReqList = fReqGet.data().eventRequest;
        fReqList.push({
          from: eRef,
          msg: this.msg.trim()
        });
        fReq.update('eventRequest',fReqList);
      }
      let msg = this.toastCtrl.create({
        message: "Sent " + this.email + " a invite request",  // Even its blocked, show cannot find to prevent user
        duration: 3000,
        position: "bottom"
      });
      msg.present();
    }
      */
  }
}
