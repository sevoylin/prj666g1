import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, CameraPosition, GoogleMapOptions, Circle, Marker, MarkerOptions, LatLng} from '@ionic-native/google-maps';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import * as firebase from 'firebase';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {
  user = {} as User;
  event = {} as Event;
  map: GoogleMap;
  marker = {} as Marker;
  circle = {} as Circle;
 
  @ViewChild('map') mapElement:ElementRef;

  // Toggle
  hasRadius = false as boolean;
  hasPassword = false as boolean;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public platform:Platform,
              private geolocation:Geolocation) {
    this.user.uid = afAuth.auth.currentUser.uid;
    this.event.isPrivate = false;
    this.event.date = new Date();
    this.event.description = " ";
    platform.ready().then(() => {
      this.initMap();
    });
  }
  
  saveBtn() {

    var eventDoc = firebase.firestore().collection('Event').doc();
    var userDoc = firebase.firestore().collection('Users').doc(this.user.uid);
    var chatDoc = firebase.firestore().collection('Chat').doc();
    
    if (!this.hasRadius || this.event.radius==undefined)
      this.event.radius = 0;
    if (!this.hasPassword)
      this.event.password = "";

    if (this.validateValue()){
      // save in "chat" collection
      chatDoc.set({
        name: this.event.eventName,
        messages: []
      });
      this.event.chat = chatDoc;

      // save in "event" collection
      eventDoc.set(this.event);

      // save in "users" collection
      var saved = false;
      userDoc.onSnapshot((doc)=>{
        if (!saved){
          this.user.eventList = doc.data().eventList;
          this.user.eventList.push(eventDoc);
          userDoc.update("eventList",this.user.eventList);
          saved = true;
        }
      });
      userDoc.onSnapshot(()=>{});
      this.navCtrl.pop();
    }
    else{
      // * handle pop msg
    }
  }

  validateValue() {
    var isValid = true;
    // Check Name
    if (this.event.eventName==undefined || this.event.eventName.trim() == "")
      isValid = false;
    // Check Radius
    if (this.event.radius <0 )
      isValid = false;
    // Pre-fix
    if (isValid) {
      var owner = firebase.firestore().collection('Users').doc(this.user.uid);
      this.event.creator = owner;
      this.event.admins = [owner];
      this.event.participants = [owner];
      this.event.blockedUsers = [];
      this.event.eventName = this.event.eventName.trim();
      this.event.password = this.event.password.trim();
      this.event.dateCreated = new Date();

      /* Trick things here:
        marker.getPostion().lat and marker.getPostion().lng supposed to be 2 number
        in this plugin it turned to 2 getter function
        it act like function when I add 2 bracket after them
        it won't compile because cordova treat it as an error
        it will work after `ionic serve`
        so I decided transfer position to string and re-form it to number
      */
      let loc = this.marker.getPosition().toString();
      let lat = Number.parseFloat(loc.substring(loc.indexOf('(')+1,loc.indexOf(',')));
      let lng = Number.parseFloat(loc.substring(loc.indexOf(' ')+1,loc.indexOf(')')));
      this.event.location = new firebase.firestore.GeoPoint(lat,lng);
    }

    return isValid;
  }

  initMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true })
      .then((resp) => {
        let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          zoom: 15,
          center: mylocation
        });
        
        this.marker = new google.maps.Marker({
          position: mylocation,
          map: this.map,
          animation: 'Drop',
          draggable: true
        });

        this.circle = new google.maps.Circle({
          strokeColor: '#21E7B6',
          strokeOpacity: 0.8,
          strokeWeight: 1,
          fillColor: '#21E7B6',
          fillOpacity: 0.35,
          map: this.map,
          center: mylocation,
          radius: 0
        });
        google.maps.event.addListener(this.marker, 'dragend',()=>{this.setCircle()});
    });
  }

  setCircle(){
    if (this.hasRadius){
      this.circle.setCenter(this.marker.getPosition());
      this.circle.setRadius(Number.parseInt(this.event.radius + ""));
    }
    else{
      this.circle.setCenter(this.marker.getPosition());
      this.circle.setRadius(0);
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }

}
