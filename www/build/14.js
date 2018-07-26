webpackJsonp([14],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventPageModule", function() { return CreateEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_event__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateEventPageModule = /** @class */ (function () {
    function CreateEventPageModule() {
    }
    CreateEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_event__["a" /* CreateEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_event__["a" /* CreateEventPage */]),
            ],
        })
    ], CreateEventPageModule);
    return CreateEventPageModule;
}());

//# sourceMappingURL=create-event.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateEventPage = /** @class */ (function () {
    function CreateEventPage(navCtrl, navParams, afAuth, platform, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.platform = platform;
        this.geolocation = geolocation;
        this.user = {};
        this.event = {};
        this.marker = {};
        this.circle = {};
        // Toggle
        this.hasRadius = false;
        this.hasPassword = false;
        this.user.uid = afAuth.auth.currentUser.uid;
        this.event.isPrivate = false;
        this.event.date = new Date();
        platform.ready().then(function () {
            _this.initMap();
        });
    }
    CreateEventPage.prototype.saveBtn = function () {
        var _this = this;
        var eventDoc = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('Event').doc();
        var userDoc = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        var chatDoc = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('Chat').doc();
        if (!this.hasRadius || this.event.radius == undefined)
            this.event.radius = 0;
        if (!this.hasPassword)
            this.event.password = "";
        if (this.validateValue()) {
            // save in "chat" collection
            chatDoc.set({
                name: this.event.eventName,
                messages: []
            });
            this.event.chat = chatDoc;
            // save in "event" collection
            eventDoc.set(this.event);
            // save in "users" collection
            var saved = false;
            userDoc.onSnapshot(function (doc) {
                if (!saved) {
                    _this.user.eventList = doc.data().eventList;
                    _this.user.eventList.push(eventDoc);
                    userDoc.update("eventList", _this.user.eventList);
                    saved = true;
                }
            });
            userDoc.onSnapshot(function () { });
            this.navCtrl.pop();
        }
        else {
            // * handle pop msg
        }
    };
    CreateEventPage.prototype.validateValue = function () {
        var isValid = true;
        // Check Name
        if (this.event.eventName == undefined || this.event.eventName.trim() == "")
            isValid = false;
        // Check Radius
        if (this.event.radius < 0)
            isValid = false;
        // Pre-fix
        if (isValid) {
            var owner = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('Users').doc(this.user.uid);
            this.event.creator = owner;
            this.event.admins = [owner];
            this.event.participants = [owner];
            this.event.blockedUsers = [];
            this.event.eventName = this.event.eventName.trim();
            this.event.password = this.event.password.trim();
            this.event.dateCreated = new Date();
            /* Trick things here:
              marker.getPostion().lat and marker.getPostion().lng supposed to be 2 number
              in this plugin it turned to 2 getter function
              it act like function when I add 2 bracket after them
              it won't compile because cordova treat it as an error
              it will work after `ionic serve`
              so I decided transfer position to string and re-form it to number
            */
            var loc = this.marker.getPosition().toString();
            var lat = Number.parseFloat(loc.substring(loc.indexOf('(') + 1, loc.indexOf(',')));
            var lng = Number.parseFloat(loc.substring(loc.indexOf(' ') + 1, loc.indexOf(')')));
            this.event.location = new __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"].GeoPoint(lat, lng);
        }
        return isValid;
    };
    CreateEventPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true })
            .then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                center: mylocation
            });
            _this.marker = new google.maps.Marker({
                position: mylocation,
                map: _this.map,
                animation: 'Drop',
                draggable: true
            });
            _this.circle = new google.maps.Circle({
                strokeColor: '#21E7B6',
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: '#21E7B6',
                fillOpacity: 0.35,
                map: _this.map,
                center: mylocation,
                radius: 0
            });
            google.maps.event.addListener(_this.marker, 'dragend', function () { _this.setCircle(); });
        });
    };
    CreateEventPage.prototype.setCircle = function () {
        if (this.hasRadius) {
            this.circle.setCenter(this.marker.getPosition());
            this.circle.setRadius(Number.parseInt(this.event.radius + ""));
        }
        else {
            this.circle.setCenter(this.marker.getPosition());
            this.circle.setRadius(0);
        }
    };
    CreateEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateEventPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CreateEventPage.prototype, "mapElement", void 0);
    CreateEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-event',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/create-event/create-event.html"*/'<!--\n  Generated template for the CreateEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Create Event</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Event Title</ion-label>\n      <ion-input type="text" [(ngModel)]="event.eventName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Event Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY H:mm" [(ngModel)]="event.date"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-textarea type="text" [(ngModel)]="event.description"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Private Event</ion-label>\n      <ion-toggle [(ngModel)]="event.isPrivate"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Set Password</ion-label>\n      <ion-toggle [(ngModel)]="hasPassword"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="hasPassword">\n      <ion-input [(ngModel)]="event.password" type="password" placeholder="enter password" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Set Range</ion-label>\n      <ion-toggle [(ngModel)]="hasRadius" (ngModelChange)="setCircle()"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="hasRadius">\n      <ion-input [(ngModel)]="event.radius" type="number" placeholder="range in meter" (ngModelChange)="setCircle()">0</ion-input>\n    </ion-item>\n\n  </ion-list>\n<!--  <button class="button button-block button-positive" ng-disabled="$invalid" ng-click="create">Create Event</button>\n -->\n  <div #map id="map"></div>\n  <button ion-button block (click)="saveBtn()">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/create-event/create-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], CreateEventPage);
    return CreateEventPage;
}());

//# sourceMappingURL=create-event.js.map

/***/ })

});
//# sourceMappingURL=14.js.map