import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';
import { callUserCallback } from '@firebase/database/dist/src/core/util/util';

/**
 * Generated class for the ViewEventParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-event-participants',
  templateUrl: 'view-event-participants.html',
})
export class ViewEventParticipantsPage {

  participants= [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  getParticipants(pRef){
    pRef.forEach((participant) => {
      participant.onSnapshot((doc)=>{
        let p = {} as User;
        p.email = doc.data().email;
        p.username = doc.data().username;
        this.participants.push(p);
      });
    });
  }

  ionViewDidLoad() {
    this.getParticipants(this.navParams.data);
    console.log(this.participants);
  }

  ionViewDidLeave(){
    // detach listener
    this.navParams.data.forEach((p) => {
      p.onSnapshot(()=>{});
    })
  }
}
