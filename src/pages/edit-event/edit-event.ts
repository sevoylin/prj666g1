import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, CameraPosition, GoogleMapOptions, Circle, Marker, MarkerOptions, LatLng} from '@ionic-native/google-maps';
import { Event } from '../../models/event';
import * as firebase from 'firebase';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html',
})
export class EditEventPage {

  event = {} as Event;
  eventRef: any;
  map: GoogleMap;
  marker = {} as Marker;
  circle = {} as Circle;
  @ViewChild('map') mapElement:ElementRef;

  hasPassword = false as boolean;
  hasRadius = false as boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform:Platform,
              public alertCtrl: AlertController) {
    this.eventRef = navParams.data;
  }

  initialEvent(){
    this.eventRef.onSnapshot((doc)=>{
      if (doc.data() != null){
        this.event.eventName = doc.data().eventName;
        this.event.description = doc.data().description;
        this.event.date = new Date(doc.data().date);
        this.event.blockedUsers = doc.data().blockedUsers;
        this.event.participants = doc.data().participants;
        this.event.password = doc.data().password;
        this.event.isPrivate = doc.data().isPrivate;
        this.event.radius = doc.data().radius;
        this.event.location = doc.data().location;
        this.event.dateCreated = doc.data().dateCreated;
        if (this.event.radius > 0) this.hasRadius = true;
        if (this.event.password != "") this.hasPassword = true;
        this.platform.ready().then(()=>{ this.initMap(); });
      }
    });
    this.eventRef.onSnapshot(()=>{});
  }

  initMap() {
    let location = new LatLng(this.event.location.latitude, this.event.location.longitude);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: location
    });
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      animation: 'Drop',
      draggable: true
    });
    if (this.hasRadius){
      this.circle = new google.maps.Circle({
        strokeColor: '#21E7B6',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#21E7B6',
        fillOpacity: 0.35,
        map: this.map,
        center: location,
        radius: Number.parseInt(this.event.radius+"")
      });
    }
    google.maps.event.addListener(this.marker, 'dragend',()=>{this.setCircle()});
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

  saveBtn(){
    // Save function here
    if (this.validateValue()){
      if (!this.hasRadius)
        this.event.radius = 0;
      if (!this.hasPassword)
        this.event.password = "";
      console.log(this.event);
      this.eventRef.update(this.event);
      this.navCtrl.pop();
    }
    else{
      // Pop out here
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
      this.event.eventName = this.event.eventName.trim();
      this.event.password = this.event.password.trim();
      if (this.event.description == undefined)
        this.event.description = " ";
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

  endBtn(){
    let alert = this.alertCtrl.create({
      title: 'Elimilate Event',
      message: 'Are you sure to elimilate event: ' + this.event.eventName,
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Eliminate',
          handler:()=>{
            this.endEvent();
            this.navCtrl.remove(2,1);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }


  async endEvent(){
    try{
      await this.eventRef.get().then((doc)=>{
        this.event.participants=doc.data().participants;
        doc.data().chat.delete();
        this.event.participants.forEach(ppl => {
          ppl.get().then(data => {
            var pplEvent = data.data().eventList;
            var pplEventIdx = pplEvent.indexOf(pplEvent.find(e => {return e.isEqual(this.eventRef);}));
            console.log(pplEventIdx);
            if (pplEventIdx > -1) pplEvent.splice(pplEventIdx,1);
            ppl.update('eventList',pplEvent);
          });
        });
      });
      this.eventRef.delete().then(function(){
        console.log("Document successfully deleted!");
        //window.history.go(-2);
      }).catch(function(error){
        console.error("Error removing document: ",error);
      });
    }
    catch(e){
      console.log(e);
    }
  }

  ionViewDidLoad() {
    this.initialEvent();
  }

}
