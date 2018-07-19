import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, CameraPosition, GoogleMapOptions, Marker, Circle, MarkerOptions, LatLng} from '@ionic-native/google-maps';
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
  eventRef: any;
  map: GoogleMap;
  marker = {} as Marker;
  circle = {} as Circle;
  othersMarker = [];
  isAdmin = false as boolean;
 
  @ViewChild('map') mapElement:ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public platform:Platform) {
    this.user.uid = afAuth.auth.currentUser.uid;
    this.event.eventId = navParams.data;
    this.initialEmptyEvent();
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
    this.eventRef = firebase.firestore().collection('Event').doc(eventId);
    this.eventRef.onSnapshot((doc)=>{
      if (doc.data() != null){
        this.event.eventName = doc.data().eventName;
        this.event.description = doc.data().description;
        this.event.date = doc.data().date;
        this.event.creator = doc.data().creator;
        this.event.admins = doc.data().admins;
        this.event.blockedUsers = doc.data().blockedUsers;
        this.event.dateCreated = doc.data().dateCreated;
        this.event.participants = doc.data().participants;
        this.event.chat = doc.data().chat;
        this.event.radius = doc.data().radius;
        this.event.location = doc.data().location;
        var userRef = firebase.firestore().collection('Users').doc(this.user.uid);
        this.event.admins.forEach( (adminRef) => {
          if (adminRef.isEqual(userRef)) this.isAdmin = true;
        });
        this.platform.ready().then(()=>{
          let location = new LatLng(this.event.location.latitude, this.event.location.longitude);
          this.map = new google.maps.Map(this.mapElement.nativeElement, {
          zoom: 15,
          center: location
          });
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            animation: 'Drop',
            draggable: false
          });
          if (0 != this.event.radius){
            this.circle = new google.maps.Circle({
              strokeColor: '#21E7B6',
              strokeOpacity: 0.8,
              strokeWeight: 1,
              fillColor: '#21E7B6',
              fillOpacity: 0.1,
              map: this.map,
              center: location,
              radius: Number.parseInt(this.event.radius+"")
            });
          }
          this.trackListener();
        });
      }
    });
  }

  groupChatBtn(){
    this.navCtrl.push('ChatPage',this.event.chat);
  }

  trackListener(){
    this.event.participants.forEach((userRef)=>{
      let marker = new google.maps.Marker({
        position: new LatLng(this.event.location.latitude, this.event.location.longitude),
        map: this.map,
        draggable: false
      });
      userRef.onSnapshot((doc)=>{
        let position = new LatLng(doc.data().location.latitude,doc.data().location.longitude);
        marker.setPosition(position);
        marker.setLabel(doc.data().username);
        // if event has radius calculate the distance
        if (this.event.radius > 0){
          var distance;
          distance = this.getDistance(doc.data().location.latitude,
                                      doc.data().location.longitude,
                                      this.event.location.latitude,
                                      this.event.location.longitude);
          if (this.event.radius < distance)
            marker.setVisible(false);
          else
            marker.setVisible(true);
        }
      });
      this.othersMarker.push(marker);
    });
  }

  viewParticipants(){
    this.navCtrl.push('ViewEventParticipantsPage', this.event.participants);
  }

  editEventBtn(){
    this.navCtrl.push('EditEventPage', this.eventRef);
  }

  leaveEventBtn(){
    let userRef = firebase.firestore().collection('Users').doc(this.user.uid);
    userRef.get().then((doc)=>{
      this.user.eventList = doc.data().eventList;
      var index = this.user.eventList.indexOf(
        this.user.eventList.find((e)=>{return e.isEqual(this.eventRef);})
      );
      if (index > -1)
        this.user.eventList.splice(index,1);
      userRef.update('eventList',this.user.eventList);
    });
    var index = this.event.participants.indexOf(
      this.event.participants.find((p)=>{return p.isEqual(userRef);})
    );
    if (index > -1){
      this.event.participants.splice(index,1);
      this.eventRef.update('participants',this.event.participants);
    }
    var index = this.event.admins.indexOf(
      this.event.admins.find((p)=>{return p.isEqual(userRef);})
    );
    if (index > -1){
      this.event.admins.splice(index,1);
      this.eventRef.update('admins',this.event.admins);
    }

    //delete event
    this.eventRef.get().then((e)=>{
      var admins = e.data().admins;
      if (admins.length == 0){
        e.data().chat.delete();
        this.eventRef.delete();
      }
    });
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.loadEvent(this.event.eventId);
  }

  ionViewDidLeave(){
    this.eventRef.onSnapshot(()=>{});
    this.event.participants.forEach((userRef)=>{
      userRef.onSnapshot(()=>{});
    })
  }

  // private functions
  private getDistance(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c * 1000; // Distance in km
    return d;
  }
  
  private deg2rad(deg) {
    return deg * (Math.PI/180);
  }
}
