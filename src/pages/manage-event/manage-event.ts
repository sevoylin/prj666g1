import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-manage-event',
  templateUrl: 'manage-event.html',
})
export class ManageEventPage {
  data: any = {
    "toolbarTitle": "Events List",
    "headerImage": "assets/images/places/" + Math.ceil(Math.random() * 8) + ".jpg",
    //"backgroundImage": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg",
    "backgroundImage" : "assets/images/maps/0.jpg",
  };
  //backgroundImage = "assets/images/places/" + Math.ceil(Math.random() * 9) + ".jpg"

  user = {} as User;
  events = [];
  eventRequests = [];
  displayList = [];
  searchTerm: any = "";
  userRef: any;
  reqRef: any;
  displayEvents = true as boolean;
  listReady = false as boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
    this.user.uid = firebase.auth().currentUser.uid;
    this.displayEvents = true;
    this.searchTerm = "";
    this.userRef = firebase.firestore().collection('Users').doc(this.user.uid);
    this.reqRef = firebase.firestore().collection('Request').doc(this.user.uid);
  }

  ionViewWillEnter() {
  }

  ionViewDidEnter() {
    this.displayList = [];
    this.getLists();
    this.search("");
  }

  ionViewDidLeave(){
    this.events.length = 0; // by set count = 0 not erase all data
    this.userRef.onSnapshot(()=>{});
    this.reqRef.onSnapshot(()=>{});
  }

  getLists(){
    this.listReady = false;
    this.userRef = firebase.firestore().collection('Users').doc(this.user.uid);
    this.userRef.onSnapshot((doc) => {
      if (doc.data() != null){
        this.events.length = 0;
        this.displayList.length = 0;
        this.user.eventList = doc.data().eventList;
        this.user.eventList.forEach((e)=>{
          let event = {} as Event;
          event.eventId = e.id;
          e.get().then((content)=>{
            if (content.data() != null){
              event.eventName = content.data().eventName;
              event.description = content.data().description;
              event.date = content.data().date;
              event.creator = content.data().creator;
              this.events.push(event);
              if (this.searchTerm.trim() == "" && this.displayEvents)
                this.displayList = this.events.slice(0);
            }
          });
        })
      }
      this.reqRef = firebase.firestore().collection('Request').doc(this.user.uid);
      this.reqRef.onSnapshot((doc)=>{
        this.eventRequests.length = 0;
        var reqList = doc.data().eventRequest;
        reqList.forEach( req=> {
          req.from.get().then( e =>{
            var ne = {
              eventId: req.from.id,
              eventName : e.data().eventName,
              date : e.data().date,
              msg : req.msg
            }
            this.eventRequests.push(ne);
            if (this.searchTerm.trim() == "" && !this.displayEvents)
              this.displayList = this.eventRequests.slice(0);
          });
        });
      });
      this.listReady = true;
    });
  }

  viewRequest(tf: boolean){
    this.displayEvents = !tf;
    this.search("");
  }

  viewEvent(eventId, viewOnly){
    this.navCtrl.push('ViewEventPage',{ 'eventId': eventId,
                                        'viewOnly': !this.displayEvents});
  }
  
  createEvent(){
    this.navCtrl.push('CreateEventPage');
  }

  joinEvent(){
    this.navCtrl.push('JoinEventPage');
  }

  search(keyword: any) {
    keyword = keyword.trim().toLowerCase();
    var currList;
    if (this.displayEvents) currList = this.events;
    else currList = this.eventRequests;
    this.listReady = false;
    this.displayList = [];
    currList.forEach(e =>{
      var isFound = false;
      if (!isFound)
        isFound = e.eventName.toLowerCase().includes(keyword);
      if (isFound)
        this.displayList.push(e);
    });
    this.listReady = true;
    if (keyword.length == 0)
      this.displayList = currList.slice(0);
  }

  requestOperate(eid, isApproved: boolean){
    var eRef = firebase.firestore().collection('Event').doc(eid);
    if (isApproved){
      this.userRef.get().then(doc=>{
        var el = doc.data().eventList;
        el.push(eRef);
        this.userRef.update('eventList',el);
      });
      eRef.get().then(doc=>{
        var pl = doc.data().participants;
        pl.push(this.userRef);
        eRef.update('participants',pl);
      })
    }
    this.reqRef.get().then((doc)=>{
      var reqList = doc.data().eventRequest;
      var idx = reqList.findIndex( r =>{
        return r.from.id == eid;
      });
      if (idx > -1)
        reqList.splice(idx,1);
      this.reqRef.update('eventRequest',reqList);
    });
  }
}