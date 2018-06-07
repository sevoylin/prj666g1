import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { Events } from 'ionic-angular';


@Injectable()
export class ChatProvider {

  private docName: string = 'gGjxFggj4TXFdsZP6kk1';
  public fsDoc = firebase.firestore().collection('Chat').doc('gGjxFggj4TXFdsZP6kk1');
  
  constructor(public events: Events) {  }

}
