import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';

/**
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html',
})
export class AddFriendPage {
  user = {} as User;
  email = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user = navParams.data;
  }

  ionViewDidLoad() {
    
  }


  submitEmail(){
    var friend_id;
    var ucRef = firebase.firestore().collection('Users').where("email", "==", this.email).get().then((d)=>{
      if (d.docs.length > 0){
        this.pushFriendRequest(d.docs[0].id);
      }
      else{
        // cannot find this guy
        console.log("cannot find user with email: " + this.email);
      }
    });
  }

  scanQR(){
    this.navCtrl.push('QrScanPage');
  }

  pushFriendRequest(fId){
    // find the friend list if it has the user
    let fRef = firebase.firestore().collection('Users').doc(fId);
    let uRef = firebase.firestore().collection('Users').doc(this.user.uid);
    if (fId == this.user.uid){
      console.log("same person");
      return undefined;
    }
    if (this.user.friendList.find((ele)=>{return ele.isEqual(uRef);})){
      console.log("find in list");
    }
  }


}
