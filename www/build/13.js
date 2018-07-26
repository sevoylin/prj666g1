webpackJsonp([13],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventPageModule", function() { return EditEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_event__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditEventPageModule = /** @class */ (function () {
    function EditEventPageModule() {
    }
    EditEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_event__["a" /* EditEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_event__["a" /* EditEventPage */]),
            ],
        })
    ], EditEventPageModule);
    return EditEventPageModule;
}());

//# sourceMappingURL=edit-event.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditEventPage = /** @class */ (function () {
    function EditEventPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.event = {};
        this.marker = {};
        this.circle = {};
        this.hasPassword = false;
        this.hasRadius = false;
        this.eventRef = navParams.data;
    }
    EditEventPage.prototype.initialEvent = function () {
        var _this = this;
        this.eventRef.onSnapshot(function (doc) {
            if (doc.data() != null) {
                _this.event.eventName = doc.data().eventName;
                _this.event.description = doc.data().description;
                _this.event.date = new Date(doc.data().date);
                _this.event.blockedUsers = doc.data().blockedUsers;
                _this.event.participants = doc.data().participants;
                _this.event.password = doc.data().password;
                _this.event.isPrivate = doc.data().isPrivate;
                _this.event.radius = doc.data().radius;
                _this.event.location = doc.data().location;
                _this.event.dateCreated = doc.data().dateCreated;
                if (_this.event.radius > 0)
                    _this.hasRadius = true;
                if (_this.event.password != "")
                    _this.hasPassword = true;
                _this.platform.ready().then(function () { _this.initMap(); });
            }
        });
        this.eventRef.onSnapshot(function () { });
    };
    EditEventPage.prototype.initMap = function () {
        var _this = this;
        var location = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* LatLng */](this.event.location.latitude, this.event.location.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: location
        });
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            animation: 'Drop',
            draggable: true
        });
        if (this.hasRadius) {
            this.circle = new google.maps.Circle({
                strokeColor: '#21E7B6',
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: '#21E7B6',
                fillOpacity: 0.35,
                map: this.map,
                center: location,
                radius: Number.parseInt(this.event.radius + "")
            });
        }
        google.maps.event.addListener(this.marker, 'dragend', function () { _this.setCircle(); });
    };
    EditEventPage.prototype.setCircle = function () {
        if (this.hasRadius) {
            this.circle.setCenter(this.marker.getPosition());
            this.circle.setRadius(Number.parseInt(this.event.radius + ""));
        }
        else {
            this.circle.setCenter(this.marker.getPosition());
            this.circle.setRadius(0);
        }
    };
    EditEventPage.prototype.saveBtn = function () {
        // Save function here
        if (this.validateValue()) {
            if (!this.hasRadius)
                this.event.radius = 0;
            if (!this.hasPassword)
                this.event.password = "";
            console.log(this.event);
            this.eventRef.update(this.event);
            this.navCtrl.pop();
        }
        else {
            // Pop out here
        }
    };
    EditEventPage.prototype.validateValue = function () {
        var isValid = true;
        // Check Name
        if (this.event.eventName == undefined || this.event.eventName.trim() == "")
            isValid = false;
        // Check Radius
        if (this.event.radius < 0)
            isValid = false;
        // Pre-fix
        if (isValid) {
            this.event.eventName = this.event.eventName.trim();
            this.event.password = this.event.password.trim();
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
            this.event.location = new __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"].GeoPoint(lat, lng);
        }
        return isValid;
    };
    EditEventPage.prototype.ionViewDidLoad = function () {
        this.initialEvent();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditEventPage.prototype, "mapElement", void 0);
    EditEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-event',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/edit-event/edit-event.html"*/'<!--\n  Generated template for the EditEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Event Title</ion-label>\n      <ion-input type="text" [(ngModel)]="event.eventName"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Event Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY H:mm" [(ngModel)]="event.date"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-textarea type="text" [(ngModel)]="event.description"></ion-textarea>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Private Event</ion-label>\n      <ion-toggle [(ngModel)]="event.isPrivate"></ion-toggle>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Set Password</ion-label>\n      <ion-toggle [(ngModel)]="hasPassword"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="hasPassword">\n      <ion-input [(ngModel)]="event.password" type="password" placeholder="enter password" ></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Set Range</ion-label>\n      <ion-toggle [(ngModel)]="hasRadius" (ngModelChange)="setCircle()"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="hasRadius">\n      <ion-input [(ngModel)]="event.radius" type="number" placeholder="range in meter" (ngModelChange)="setCircle()">0</ion-input>\n    </ion-item>\n  </ion-list>\n  <div #map id="map"></div>\n  <button ion-button block (click)="saveBtn()">Save</button>\n</ion-content>\n'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/edit-event/edit-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], EditEventPage);
    return EditEventPage;
}());

//# sourceMappingURL=edit-event.js.map

/***/ })

});
//# sourceMappingURL=13.js.map