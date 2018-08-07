import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  data: any = { "toolbarTitle"  : "Friends",
                "title"         : "Search for friend",
                "headerImage"  : "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg" }; 
  user = {} as User;
  userDoc = {} as any;
  requestDoc = {} as any;
  searchTerm: any = "";
  allItems: any;
  friendList = [];
  blockedList = [];
  requestList = [];
  displayList = [];
  listReady = false as boolean;
  displayFriends = true as boolean;
  displayRequest = false as boolean;
  displayBlocked = false as boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController) {
    this.user.uid = firebase.auth().currentUser.uid;
    this.searchTerm = "";
    this.getLists();
  }

  ionViewDidLoad(){ }

  ionViewDidEnter(){
    this.search("");  // use search to initialize
  }

  ionViewDidLeave(){
    this.userDoc.onSnapshot(()=>{});
    this.requestDoc.onSnapshot(()=>{});
  }

  getLists(){
    this.displayList.length = 0;
    this.userDoc = firebase.firestore().collection('Users').doc(this.user.uid);
    this.requestDoc = firebase.firestore().collection('Request').doc(this.user.uid);
    this.userDoc.onSnapshot((data)=>{
      this.friendList.length = 0;
      this.blockedList.length = 0;
      this.user.friendList = data.data().friendList;
      this.user.blockedUsers = data.data().blockedUsers;
      // Retrieve friendlist
      this.user.friendList.forEach((fRef)=>{
        fRef.get().then((friend)=>{
          let f = {} as User;
          f.uid = friend.id;
          f.firstName = friend.data().firstName;
          f.lastName = friend.data().lastName;
          f.username = friend.data().username;
          f.email = friend.data().email;
          if (f.avatar == null || f.avatar == "") {
            f.avatar = "assets/images/avatar/25.jpg";
          }
          this.friendList.push(f);
          if (this.searchTerm.trim()=="" && this.displayFriends)
            this.displayList = this.friendList.slice(0);
        });
      });
      // Retrieve blockedlist
      this.user.blockedUsers.forEach( bRef =>{
        bRef.get().then((blocked)=>{
          let b = {} as User;
          b.uid = blocked.id;
          b.firstName = blocked.data().firstName;
          b.lastName = blocked.data().lastName;
          b.username = blocked.data().username;
          b.email = blocked.data().email;
          if (b.avatar == null || b.avatar == "") {
            b.avatar = "assets/images/avatar/25.jpg";
          }
          this.blockedList.push(b);
          if (this.searchTerm.trim()=="" && this.displayBlocked)
            this.displayList = this.blockedList.slice(0);
        })
      });
    });
    // Retrieve requestlist
    this.requestDoc.onSnapshot((doc)=>{
      this.requestList.length = 0;
      var reqList = doc.data().friendRequest;
      reqList.forEach( req=> {
        req.from.get().then( ppl =>{
          var nr = {
            uid: req.from.id,
            avatar: "assets/images/avatar/25.jpg",
            firstName: ppl.data().firstName,
            lastName: ppl.data().lastName,
            email: ppl.data().email,
            username : ppl.data().username,
            msg: req.msg
          }
          this.requestList.push(nr);
          if (this.searchTerm.trim()=="" && this.displayRequest)
            this.displayList = this.requestList.slice(0);
        })
      });
    });
  }

  switchList(listIdx: number){
    switch(listIdx){
      case 0:{
        this.displayFriends = true;
        this.displayRequest = false;
        this.displayBlocked = false;
        this.displayList = this.friendList.slice(0);
        break;
      }
      case 1:{
        this.displayFriends = false;
        this.displayRequest = true;
        this.displayBlocked = false;
        this.displayList = this.requestList.slice(0);
        break;
      }
      case 2:{
        this.displayFriends = false;
        this.displayRequest = false;
        this.displayBlocked = true;
        this.displayList = this.blockedList.slice(0);
        break;
      }
    }
  }

  addFriend(){
    this.navCtrl.push('AddFriendPage',this.user);
  }

  search(keyword: any) {
    keyword = keyword.trim().toLowerCase();
    this.listReady = false;
    var targetList;
    if (this.displayBlocked) targetList = this.blockedList;
    if (this.displayFriends) targetList = this.friendList;
    if (this.displayRequest) targetList = this.requestList;
    this.displayList.length = 0;
    targetList.forEach(f =>{
      var isFound = false;
      var fullName = f.firstName + " " + f.lastName;
      var fullNameR = f.lastName + ", " + f.firstName;
      if (!isFound)
        isFound = fullName.toLowerCase().includes(keyword);
      if (!isFound)
        isFound = fullNameR.toLowerCase().includes(keyword);
      if (!isFound)
        isFound = f.username.toLowerCase().includes(keyword);
      if (!isFound)
        isFound = f.email.toLowerCase().includes(keyword);
      if (isFound)
        this.displayList.push(f);
    });
    this.listReady = true;
    if (keyword.length == 0)
      this.displayList = targetList.slice(0);
  }

  presentActionSheet(uid) {
    let actionSheet;
    // For displaying friend
    if (this.displayFriends)
      actionSheet = this.actionSheetCtrl.create({
        title: '',
        buttons: [
          {
            text: 'View Profile',
            handler: () => {
              this.navCtrl.push("ViewProfilePage", {'uid': uid,
                                                    'fromEvent': false});
            }
          },
          {
            text: 'Send Message',
            handler: () => {
              this.sendMessage(uid);
            }
          },
          {
            text: 'Delete Friend',
            role: 'destructive',
            handler: () => {
              this.deleteFriend(uid);
            }
          },
          {
            text: 'Block Friend',
            handler: () => {
              this.blockFriend(uid, true);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
          }
        ]
      });

    // For displaying request
    if (this.displayRequest)
      actionSheet = this.actionSheetCtrl.create({
        title: '',
        buttons: [
          {
            text: 'View Profile',
            handler: () => {
              this.navCtrl.push("ViewProfilePage", uid);
            }
          },
          {
            text: 'Approve',
            handler: () => {
              this.requestOperate(uid,true);
            }
          },
          {
            text: 'Decline',
            role: 'destructive',
            handler: () => {
              this.requestOperate(uid,false);
            }
          },
          {
            text: 'Block User',
            handler: () => {
              this.blockFriend(uid, false);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => { }
          }
        ]
      });
    
    // For displaying blocked
    if (this.displayBlocked)
      actionSheet = this.actionSheetCtrl.create({
        title: '',
        buttons: [
          {
            text: 'View Profile',
            handler: () => {
              this.navCtrl.push("ViewProfilePage", uid);
            }
          },
          {
            text: 'Remove Blocked',
            role: 'destructive',
            handler: () => {
              console.log("remove from block");
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

  async deleteFriend(uid){
    try{
      var friendRef = firebase.firestore().collection('Users').doc(uid);
      var friendData = await friendRef.get();
      var friend = {} as User;
      friend.firstName = friendData.data().firstName;
      friend.lastName = friendData.data().lastName;
      let alert = this.alertCtrl.create({
        title: 'Delete Friend',
        message: 'Are you sure to delete "' + friend.firstName + ' ' + friend.lastName + '"',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => { }
          },
          {
            text: 'Confirm',
            handler: () => {
              this.deleteFriendCommon(uid);
            }
          }
        ]
      });
      alert.present();
    }
    catch(e){
      console.log(e);
    }
  }

  private deleteFriendCommon(uid){
    var chatId;
    if (this.user.uid.localeCompare(uid) > 0)
      chatId = this.user.uid + "" + uid;
    else
      chatId = uid + "" + this.user.uid;
    var userRef = firebase.firestore().collection('Users').doc(this.user.uid);
    var friendRef = firebase.firestore().collection('Users').doc(uid);
    userRef.get().then(doc =>{
      var fList = doc.data().friendList;
      var idx = fList.indexOf(
        fList.find( ppl=> {return ppl.isEqual(friendRef);} )
      )
      fList.splice(idx,1);
      userRef.update('friendList',fList);
    });
    friendRef.get().then(doc =>{
      var fList = doc.data().friendList;
      var idx = fList.indexOf(
        fList.find( ppl=> {return ppl.isEqual(userRef);} )
      )
      fList.splice(idx,1);
      friendRef.update('friendList',fList);
    });
    firebase.firestore().collection('Chat').doc(chatId).delete();
  }

  async blockFriend(uid,isFriend: boolean){
    try{
    var friendRef = firebase.firestore().collection('Users').doc(uid);
    var friendData = await friendRef.get();
    var friend = {} as User;
    friend.firstName = friendData.data().firstName;
    friend.lastName = friendData.data().lastName;
    let alert = this.alertCtrl.create({
      title: 'Block User',
      message: 'Are you sure to block "' + friend.firstName + ' ' + friend.lastName + '"',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Confirm',
          handler: () => {
            if (isFriend)
              this.deleteFriendCommon(uid);
            var userRef = firebase.firestore().collection('Users').doc(this.user.uid);
            userRef.get().then(doc=>{
              this.user.blockedUsers = doc.data().blockedUsers;
              var idx = this.user.blockedUsers.findIndex( u => {return u.isEqual(friendRef);});
              if (idx < 0){
                this.user.blockedUsers.push(friendRef);
                userRef.update('blockedUsers',this.user.blockedUsers);
              }
            });
          }
        }
      ]
    });
    alert.present();
    }
    catch(e){
      console.log(e);
    }
  }

  async requestOperate(uid, isApproved: boolean){
    try{
      var tRef = firebase.firestore().collection('Users').doc(uid);
      if (isApproved){
        this.userDoc.get().then(doc=>{
          var fl = doc.data().friendList;
          fl.push(tRef);
          this.userDoc.update('friendList',fl);
        });
        tRef.get().then(doc=>{
          var fl = doc.data().friendList;
          fl.push(this.userDoc);
          tRef.update('friendList',fl);
        });
      }
      this.requestDoc.get().then((doc)=>{
        var reqList = doc.data().friendRequest;
        var idx = reqList.findIndex( r =>{
          return r.from.id == uid;
        });
        if (idx > -1)
          reqList.splice(idx,1);
        this.requestDoc.update('friendRequest',reqList);
      });
    }
    catch(e){
      console.log(e);
    }
  }

  sendMessage(uid){
    // get chat id
    var chatId = "";
    if (this.user.uid.localeCompare(uid) > 0)
      chatId = this.user.uid + "" + uid;
    else
      chatId = uid + "" + this.user.uid;
    // find this id in chat id
    var chatRef = firebase.firestore().collection('Chat').doc(chatId);
    chatRef.get().then( doc =>{
      if (!doc.exists)
        firebase.firestore().collection('Chat').doc(chatId).set({
          messages: [],
          name: "Private Chat"
        });
      this.navCtrl.push("ChatPage", chatRef);
    });
  }

}
