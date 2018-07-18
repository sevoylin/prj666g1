import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import * as firebase from 'firebase';
import { DataSnapshot } from '@firebase/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,public afAuth: AngularFireAuth) {
    this.user.uid = this.user.uid = afAuth.auth.currentUser.uid;
  }

  ionViewDidLoad() {
   /*   var db :string;
   db=this.event.eventName;
  firebase.firestore().collection("Event").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          db=doc.data().eventName;
          console.log("-> ",db);
      });
  }); */


  /* var db = firebase.firestore();
var query;
  var col=db.collection('Event');
query.get().then(function(querySnapshot){
  if (querySnapshot.empty) {
    console.log('no documents found');
  } else {
    // do something with the data
    querySnapshot.forEach(function (documentSnapshot) {
      var data = documentSnapshot.data();
      // do something with the data of each document.
    });
  }

}); */


/////////////////////
/* var db= firebase.firestore();

const list_div=document.querySelector("#list_div");
db.collection('User').onSnapshot(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
    list_div.innerHTML+="<div class='list'><p>"+doc.data().eventList+"</p></div>";
    
    }); 
});*/////////////



    this.getEventList();
  }

  ionViewDidLeave(){
    this.user.eventList.forEach((eventRef)=>{
      eventRef.onSnapshot(()=>{});
    })
  }

  getEventList(){
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
      doc.onSnapshot((doc) => {
      if (doc.data() != null){
        this.user.eventList = doc.data().eventList;
        this.user.eventList.forEach((e)=>{
          let event = {} as Event;
          event.eventId = e.id;
          e.onSnapshot((content)=>{
            event.eventName = content.data().eventName;
            // ?
            this.events.push(event);
          });
        })
      }
    });
  }

  viewEvent(eventRef){
    console.log()
    this.navCtrl.push('ViewEventPage',eventRef);
  }




}





