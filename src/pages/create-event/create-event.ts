import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps,GoogleMap, GoogleMapsEvent, Marker} from '@ionic-native/google-maps';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import * as firebase from 'firebase';
/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {
  user = {} as User;
  event = {} as Event;
 
  @ViewChild('map') mapElement:ElementRef;
  
  map: any;
  marker = {} as Marker;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,private geolocation:Geolocation) {
    platform.ready().then(() => {
      this.initMap();
    });
  }
  
  saveBtn() {
    var doc = firebase.firestore().collection('Event').doc();
    
    doc.set({
      eventName: this.event.eventName,
      isPrivate: this.event.isPrivate,
      setPassword:this.event.setPassword,
      password:this.event.password
    });
    this.navCtrl.setRoot('HomePage');
    
  }

  initMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
        let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          zoom: 15,
          center: mylocation
        });
      });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
      this.addMarker(updatelocation,null);
    });
    /*
    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(
      (data) => {
        console.log("Click MAP");
      }
    );
    */
  }

  addMarker(location, image) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image
    });
    this.marker = marker;
  }
  
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }

}
