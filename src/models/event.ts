import { User } from "./user";
import * as firebase from 'firebase';

export interface Event {
    eventId: string;
    admins: Array<any>;
    participants: Array<any>;
    blockedUsers: Array<any>;
    creator: any;
    eventName: string;
    description: string;
    location: firebase.firestore.GeoPoint;
    isPrivate: boolean;
    password: string;
    radius: number;
    date: Date;
    dateCreated: Date;
    chat: any;
}