import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

async register(user: User){
  try{
const result = await this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
    console.log(result);
if(result){
  this.navCtrl.push('HomePage')
}

}
catch(e){
  console.error(e);
 }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}