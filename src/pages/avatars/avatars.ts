import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AvatarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avatars',
  templateUrl: 'avatars.html',
})
export class AvatarsPage {
  
  data: any = { "toolbarTitle" : "Avatars", 
                items: [ {"id" : 0, "image" : "assests/images/avatars/0.jpg" },
                         {"id" : 1, "image" : "assests/images/avatars/1.jpg" },
                         {"id" : 2, "image" : "assests/images/avatars/2.jpg" },
                         {"id" : 3, "image" : "assests/images/avatars/3.jpg" },
                         {"id" : 4, "image" : "assests/images/avatars/4.jpg" },
                         {"id" : 5, "image" : "assests/images/avatars/5.jpg" },
                         {"id" : 6, "image" : "assests/images/avatars/6.jpg" },
                         {"id" : 7, "image" : "assests/images/avatars/7.jpg" },
                         {"id" : 8, "image" : "assests/images/avatars/8.jpg" },
                         {"id" : 9, "image" : "assests/images/avatars/9.jpg" },
                         {"id" : 10, "image" : "assests/images/avatars/10.jpg" },
                         {"id" : 11, "image" : "assests/images/avatars/11.jpg" },
                         {"id" : 12, "image" : "assests/images/avatars/12.jpg" },
                         {"id" : 13, "image" : "assests/images/avatars/13.jpg" },
                         {"id" : 14, "image" : "assests/images/avatars/14.jpg" },
                         {"id" : 15, "image" : "assests/images/avatars/15.jpg" },
                         {"id" : 16, "image" : "assests/images/avatars/16.jpg" },
                         {"id" : 17, "image" : "assests/images/avatars/17.jpg" }, 
                         {"id" : 18, "image" : "assests/images/avatars/18.jpg" },
                         {"id" : 19, "image" : "assests/images/avatars/19.jpg" },
                         {"id" : 20, "image" : "assests/images/avatars/20.jpg" },
                         {"id" : 21, "image" : "assests/images/avatars/21.jpg" },
                         {"id" : 22, "image" : "assests/images/avatars/22.jpg" },
                         {"id" : 23, "image" : "assests/images/avatars/23.jpg" },
                         {"id" : 24, "image" : "assests/images/avatars/24.jpg" },
                         {"id" : 25, "image" : "assests/images/avatars/25.jpg" },
                         {"id" : 26, "image" : "assests/images/avatars/26.jpg" },
                         {"id" : 27, "image" : "assests/images/avatars/27.jpg" },
                         {"id" : 28, "image" : "assests/images/avatars/28.jpg" },
                         {"id" : 29, "image" : "assests/images/avatars/29.jpg" },
                         {"id" : 30, "image" : "assests/images/avatars/30.jpg" },
                         {"id" : 31, "image" : "assests/images/avatars/31.jpg" },
                         {"id" : 32, "image" : "assests/images/avatars/32.jpg" },
                         {"id" : 33, "image" : "assests/images/avatars/33.jpg" },
                         {"id" : 34, "image" : "assests/images/avatars/34.jpg" },
                         {"id" : 35, "image" : "assests/images/avatars/35.jpg" },
                         {"id" : 36, "image" : "assests/images/avatars/36.jpg" },
                         {"id" : 37, "image" : "assests/images/avatars/37.jpg" },
                         {"id" : 38, "image" : "assests/images/avatars/38.jpg" },
                         {"id" : 39, "image" : "assests/images/avatars/39.jpg" },
                         {"id" : 40, "image" : "assests/images/avatars/40.jpg" },
                         {"id" : 41, "image" : "assests/images/avatars/41.jpg" },
                         {"id" : 42, "image" : "assests/images/avatars/42.jpg" },
                         {"id" : 43, "image" : "assests/images/avatars/43.jpg" },
                         {"id" : 44, "image" : "assests/images/avatars/44.jpg" },
                         {"id" : 45, "image" : "assests/images/avatars/45.jpg" },
                         {"id" : 46, "image" : "assests/images/avatars/46.jpg" },
                         {"id" : 47, "image" : "assests/images/avatars/47.jpg" } ], };          

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvatarsPage');
  }

  loadAvatars(avatars = []) {
  }

  openAvatars = (group: any, index: number): any => {
  }
}
