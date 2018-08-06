import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';
import { callUserCallback } from '@firebase/database/dist/src/core/util/util';

@IonicPage()
@Component({
  selector: 'page-view-event-participants',
  templateUrl: 'view-event-participants.html',
})
export class ViewEventParticipantsPage {

  data: any = { "toolbarTitle"  : "Participants",
                "title"         : "Search for participant",
                "headerImage"  : "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg" };

  searchTerm: any = "";
  participants= [];
  listReady = false;
  isAdmin = true;
  displayList = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
    this.searchTerm = "";
  }

  getParticipants(pRef){
    this.listReady = false;
    this.participants.length = 0;
    this.displayList.length = 0;
    pRef.forEach((participant) => {
      participant.get().then((doc)=>{
        let p = {} as User;
        // need to change there
        p.avatar = "assets/images/avatar/25.jpg";
        p.uid = participant.id;
        p.email = doc.data().email;
        p.username = doc.data().username;
        this.participants.push(p);
        if (this.searchTerm.trim() == "") this.displayList.push(p);
      });
    });
    this.listReady = true;
  }

  search(keyword: any) {
    keyword = keyword.trim().toLowerCase();
    this.listReady = false;
    this.displayList.length = 0;
    this.participants.forEach(ppl =>{
      var isFound = false;
      if (!isFound)
        isFound = ppl.username.toLowerCase().includes(keyword);
      if (!isFound)
        isFound = ppl.email.toLowerCase().includes(keyword);

      if (isFound)
        this.displayList.push(ppl);
    });
    this.listReady = true;
    if (keyword.length == 0)
      this.displayList = this.participants.slice(0);
  }

  presentActionSheet(uid) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: 'View Profile',
          handler: () => {
            this.navCtrl.push("ViewProfilePage", uid);
          }
        },
        {
          text: 'Block',
          handler: () => {
            console.log("Block " + uid);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    this.getParticipants(this.navParams.data);
  }

  ionViewDidLeave(){
    // detach listener
    this.navParams.data.forEach((p) => {
      p.onSnapshot(()=>{});
    })
  }
}
