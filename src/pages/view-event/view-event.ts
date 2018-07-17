import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, CameraPosition, GoogleMapOptions, Marker, MarkerOptions, LatLng} from '@ionic-native/google-maps';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import * as firebase from 'firebase';

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-view-event',
  templateUrl: 'view-event.html',
})
export class ViewEventPage {
  user = {} as User;
  event = {} as Event;
  map: GoogleMap;
  marker = {} as Marker;
 
  @ViewChild('map') mapElement:ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public platform:Platform,
              private geolocation:Geolocation) {
    var eventId = navParams.data;
    this.initialEmptyEvent();
    this.loadEvent(eventId);
    console.log(this.event.eventName);
  }

  initialEmptyEvent(){
    this.event.eventName = "";
    this.event.description = "";
    this.event.creator = null;
    this.event.admins = null;
    this.event.blockedUsers = null;
    this.event.date = new Date();
    this.event.dateCreated = new Date();
    this.event.isPrivate = false;
    this.event.location = null;
    this.event.participants = null;
    this.event.password = "";
    this.event.radius = 0;
  }

  loadEvent(eventId){
    let eventDoc = firebase.firestore().collection('Event').doc(eventId);
    eventDoc.onSnapshot((doc)=>{
      if (doc.data() != null){
        this.event.eventName = doc.data().eventName;
        this.event.description = doc.data().description;
        /*
        this.event.creator = doc.data().creator;
        this.event.admins = doc.data().admins;
        this.event.blockedUsers = doc.data().blockedUsers;
        this.event.date = doc.data().date;
        this.event.dateCreated = doc.data().dateCreated;
        this.event.isPrivate = doc.data().isPrivate;
        this.event.location = doc.data().location;
        this.event.participants = doc.data().participants;
        this.event.password = doc.data().password;
        this.event.radius = doc.data().radius;
        */
      }
    });
    //eventDoc.onSnapshot(()=>{});
  }


  ionViewDidLoad() {
  }

}
