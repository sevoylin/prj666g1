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
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {
  user = {} as User;
  event = {} as Event;
  map: GoogleMap;
  marker = {} as Marker;
 
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
    platform.ready().then(() => {
      this.initMap();
    });
  }
  
  saveBtn() {

    var doc = firebase.firestore().collection('Event').doc();
    
    if (!this.hasRadius || this.event.radius==undefined)
      this.event.radius = 0;
    if (!this.hasPassword)
      this.event.password = "";

    if (this.validateValue()){
      //doc.set(this.event);
      console.log("Saved!");
      // wpI1Zae9qHlF9ZxSXtzn should replaced to doc.id
      this.navCtrl.push('ViewEventPage', 'wpI1Zae9qHlF9ZxSXtzn')
    }
    // this.navCtrl.setRoot('HomePage');
  }

  validateValue() {
    var isValid = true;
    // Check Name
    if (this.event.eventName==undefined || this.event.eventName.trim() == "")
      isValid = false;
    // Check

    // Pre-fix
    if (isValid) {
      var owner = firebase.firestore().collection('Users').doc(this.user.uid);
      this.event.creator = owner;
      this.event.admins = [owner];
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
        
        this.addMarker(mylocation,null);
    });
  }
  addMarker(location, image) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image,
      animation: 'Drop',
      draggable: true
    });
    this.marker = marker;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }

}
