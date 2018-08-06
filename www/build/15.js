webpackJsonp([15],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventPageModule", function() { return EditEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_event__ = __webpack_require__(766);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_event__["a" /* EditEventPage */]),
            ],
        })
    ], EditEventPageModule);
    return EditEventPageModule;
}());

//# sourceMappingURL=edit-event.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(379);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var EditEventPage = /** @class */ (function () {
    function EditEventPage(navCtrl, navParams, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
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
            if (this.event.description == undefined)
                this.event.description = " ";
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
    EditEventPage.prototype.endBtn = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Elimilate Event',
            message: 'Are you sure to elimilate event: ' + this.event.eventName,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminate',
                    handler: function () {
                        _this.endEvent();
                        _this.navCtrl.remove(2, 1);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    EditEventPage.prototype.endEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.eventRef.get().then(function (doc) {
                                _this.event.participants = doc.data().participants;
                                doc.data().chat.delete();
                                _this.event.participants.forEach(function (ppl) {
                                    ppl.get().then(function (data) {
                                        var pplEvent = data.data().eventList;
                                        var pplEventIdx = pplEvent.indexOf(pplEvent.find(function (e) { return e.isEqual(_this.eventRef); }));
                                        console.log(pplEventIdx);
                                        if (pplEventIdx > -1)
                                            pplEvent.splice(pplEventIdx, 1);
                                        ppl.update('eventList', pplEvent);
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.eventRef.delete().then(function () {
                            console.log("Document successfully deleted!");
                            //window.history.go(-2);
                        }).catch(function (error) {
                            console.error("Error removing document: ", error);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
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
            selector: 'page-edit-event',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/edit-event/edit-event.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Event Title</ion-label>\n      <ion-input type="text" [(ngModel)]="event.eventName"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Event Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY H:mm" [(ngModel)]="event.date"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-textarea type="text" [(ngModel)]="event.description"></ion-textarea>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Private Event</ion-label>\n      <ion-toggle [(ngModel)]="event.isPrivate"></ion-toggle>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Set Password</ion-label>\n      <ion-toggle [(ngModel)]="hasPassword"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="hasPassword">\n      <ion-input [(ngModel)]="event.password" type="password" placeholder="enter password" ></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Set Range</ion-label>\n      <ion-toggle [(ngModel)]="hasRadius" (ngModelChange)="setCircle()"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="hasRadius">\n      <ion-input [(ngModel)]="event.radius" type="number" placeholder="range in meter" (ngModelChange)="setCircle()">0</ion-input>\n    </ion-item>\n  </ion-list>\n  <div #map id="map"></div>\n  <button ion-button block (click)="saveBtn()">Save</button>\n  <button ion-button block (click)="endBtn()">Eliminate</button>\n</ion-content>\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/edit-event/edit-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditEventPage);
    return EditEventPage;
}());

//# sourceMappingURL=edit-event.js.map

/***/ })

});
//# sourceMappingURL=15.js.map