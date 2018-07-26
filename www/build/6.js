webpackJsonp([6,11],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrScanPageModule", function() { return QrScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_scan__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var QrScanPageModule = /** @class */ (function () {
    function QrScanPageModule() {
    }
    QrScanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qr_scan__["a" /* QrScanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qr_scan__["a" /* QrScanPage */]),
            ],
        })
    ], QrScanPageModule);
    return QrScanPageModule;
}());

//# sourceMappingURL=qr-scan.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinEventPageModule", function() { return JoinEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_scan_qr_scan_module__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__join_event__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JoinEventPageModule = /** @class */ (function () {
    function JoinEventPageModule() {
    }
    JoinEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__join_event__["a" /* JoinEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__join_event__["a" /* JoinEventPage */]),
                __WEBPACK_IMPORTED_MODULE_2__qr_scan_qr_scan_module__["QrScanPageModule"],
            ],
        })
    ], JoinEventPageModule);
    return JoinEventPageModule;
}());

//# sourceMappingURL=join-event.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QrScanPage = /** @class */ (function () {
    function QrScanPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.code = "";
    }
    QrScanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrScanPage');
    };
    QrScanPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.code = barcodeData.text;
            _this.navCtrl.pop();
        }, function (err) {
            console.log("Cannot Read QR Code!");
        });
    };
    QrScanPage.prototype.ionViewWillEnter = function () {
        this.callback = this.navParams.get("callback");
    };
    QrScanPage.prototype.ionViewDidEnter = function () {
        this.scanCode();
    };
    QrScanPage.prototype.ionViewWillLeave = function () {
        this.callback(this.code);
    };
    QrScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr-scan',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/qr-scan/qr-scan.html"*/'<!--\n  Generated template for the QrScanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scan the QR code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h6>Cannot Read QR Code<br></h6>\n  <button ion-button block outline (click)="scanQR()">Scan Again?</button>\n</ion-content>\n'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/qr-scan/qr-scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], QrScanPage);
    return QrScanPage;
}());

//# sourceMappingURL=qr-scan.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JoinEventPage = /** @class */ (function () {
    function JoinEventPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.event = {};
        this.targetId = "";
        this.hasPasswd = false;
        this.needScan = true;
        this.user.uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
    }
    JoinEventPage.prototype.scanQR = function () {
        var _this = this;
        var cbFunction = function (params) {
            return new Promise(function (resolve, reject) {
                _this.targetId = params;
                _this.needScan = false;
                resolve();
            });
        };
        this.navCtrl.push('QrScanPage', { callback: cbFunction });
    };
    JoinEventPage.prototype.joinBtn = function () {
        if (this.verifyPwd())
            this.joinEvent(this.targetId);
        else
            this.toastCtrl.create({
                message: "Incorrect Password",
                duration: 3000,
                position: "bottom"
            }).present();
    };
    JoinEventPage.prototype.verifyPwd = function () {
        if (this.hasPasswd) {
            // verify password
            return false;
        }
        return true;
    };
    JoinEventPage.prototype.joinEvent = function (eventId) {
        var _this = this;
        var userRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        var eventRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Event').doc(eventId);
        eventRef.get().then(function (data) {
            var isBlocked = data.data().blockedUsers.find(function (bu) { return bu.isEqual(userRef); });
            if (undefined == isBlocked) {
                var userDoc = userRef.get().then(function (data) {
                    _this.user.eventList = data.data().eventList;
                    _this.user.eventList.push(eventRef);
                    userRef.update('eventList', _this.user.eventList);
                });
                var eventDoc = eventRef.get().then(function (da) {
                    _this.event.participants = da.data().participants;
                    _this.event.participants.push(userRef);
                    eventRef.update('participants', _this.event.participants);
                });
            }
            else {
                _this.toastCtrl.create({
                    message: "Cannot join this event",
                    duration: 3000,
                    position: "bottom"
                }).present();
            }
        });
    };
    JoinEventPage.prototype.ionViewDidLoad = function () {
        this.targetId = this.navParams.get('fromQR');
        if (undefined == this.targetId)
            this.targetId = "";
        else
            this.needScan = false;
        console.log(this.targetId);
    };
    JoinEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-join-event',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/join-event/join-event.html"*/'<!--\n  Generated template for the JoinEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Join Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <button *ngIf="needScan" ion-button full outline (click)="scanQR()">ScanQR</button>\n  </ion-item>\n  <ion-item *ngIf="!needScan">\n    {{targetId}}\n  </ion-item>\n  <ion-item *ngIf="hasPasswd">\n    <ion-label color="primary">Password</ion-label>\n    <ion-input [(ngModel)]="eventPwd"></ion-input>\n  </ion-item>\n  <button *ngIf="!needScan" ion-button block (click)="joinBtn()">Join</button>\n</ion-content>\n'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/join-event/join-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], JoinEventPage);
    return JoinEventPage;
}());

//# sourceMappingURL=join-event.js.map

/***/ })

});
//# sourceMappingURL=6.js.map