export interface User{
    fireRef: any;
    uid: string;
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
    eventList: Array<any>;
    friendList: Array<any>;
    location: any;
}