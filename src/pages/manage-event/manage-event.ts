import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import * as firebase from 'firebase';
/**
 * Generated class for the ManageEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-event',
  templateUrl: 'manage-event.html',
})
export class ManageEventPage {
  user = {} as User;
  events = [];
  docRef: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user.uid = firebase.auth().currentUser.uid;
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter() {
    this.getEventList();
  }

  ionViewDidLeave(){
    this.events.length = 0; // by set count = 0 not erase all data
    this.user.eventList.forEach((eventRef)=>{
      eventRef.onSnapshot(()=>{});
    })
  }

  getEventList(){
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
    doc.get().then((doc) => {
      if (doc.data() != null){
        this.events.length = 0;
        this.user.eventList = doc.data().eventList;
        this.user.eventList.forEach((e)=>{
          let event = {} as Event;
          event.eventId = e.id;
          e.get().then((content)=>{
            if (content.data() != null){
              event.eventName = content.data().eventName;
              event.date = content.data().date;
              this.events.push(event);
            }
          });
        })
      }
    });
  }

  viewEvent(eventRef){
    this.navCtrl.push('ViewEventPage',eventRef);
  }

  createEvent(){
    this.navCtrl.push('CreateEventPage');
  }

  joinEvent(){
    this.navCtrl.push('JoinEventPage');
  }

}