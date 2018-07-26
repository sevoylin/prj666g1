webpackJsonp([7,11],{

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

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendPageModule", function() { return AddFriendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_friend__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qr_scan_qr_scan_module__ = __webpack_require__(738);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddFriendPageModule = /** @class */ (function () {
    function AddFriendPageModule() {
    }
    AddFriendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_friend__["a" /* AddFriendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_friend__["a" /* AddFriendPage */]),
                __WEBPACK_IMPORTED_MODULE_3__qr_scan_qr_scan_module__["QrScanPageModule"],
            ],
        })
    ], AddFriendPageModule);
    return AddFriendPageModule;
}());

//# sourceMappingURL=add-friend.module.js.map

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

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendPage; });
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



/**
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddFriendPage = /** @class */ (function () {
    function AddFriendPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.email = "";
        this.user = navParams.data;
    }
    AddFriendPage.prototype.ionViewDidLoad = function () {
    };
    AddFriendPage.prototype.submitEmail = function () {
        var _this = this;
        var ucRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').where("email", "==", this.email).get().then(function (d) {
            if (d.docs.length > 0) {
                console.log("has !");
                _this.pushFriendRequest(d.docs[0].id);
            }
            else {
                // cannot find this guy
                var err = _this.toastCtrl.create({
                    message: "Cannot find user with email: " + _this.email,
                    duration: 3000,
                    position: "bottom"
                });
                err.present();
            }
        });
    };
    AddFriendPage.prototype.scanQR = function () {
        this.navCtrl.push('QrScanPage');
    };
    AddFriendPage.prototype.pushFriendRequest = function (fId) {
        return __awaiter(this, void 0, void 0, function () {
            var fRef, uRef, err, err, isBlocked, ref, is, err, fReq, fReqGet, fReqList, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(fId);
                        uRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
                        // if it is same person, function return
                        if (fId == this.user.uid) {
                            err = this.toastCtrl.create({
                                message: "You cannot add yourself",
                                duration: 3000,
                                position: "bottom"
                            });
                            err.present();
                            return [2 /*return*/, undefined]; // skip out
                        }
                        // determine if the person is already in list
                        if (this.user.friendList.length > 0 && undefined == this.user.friendList.find(function (ele) { return ele.isEqual(fRef); })) {
                            err = this.toastCtrl.create({
                                message: "You've already add your friend",
                                duration: 3000,
                                position: "bottom"
                            });
                            err.present();
                            return [2 /*return*/, undefined]; // skip out
                        }
                        isBlocked = false;
                        return [4 /*yield*/, fRef.get()];
                    case 1:
                        ref = _a.sent();
                        return [4 /*yield*/, ref.data().blockedUsers.find(function (bu) { return bu.isEqual(uRef); })];
                    case 2:
                        is = _a.sent();
                        if (undefined != is) {
                            err = this.toastCtrl.create({
                                message: "Cannot find user with email: " + this.email,
                                duration: 3000,
                                position: "bottom"
                            });
                            err.present();
                            isBlocked = true;
                        }
                        if (!!isBlocked) return [3 /*break*/, 4];
                        fReq = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Request').doc(fId);
                        return [4 /*yield*/, fReq.get()];
                    case 3:
                        fReqGet = _a.sent();
                        is = fReqGet.data().friendRequest.find(function (fr) { return fr.from.isEqual(uRef); });
                        if (undefined == is) {
                            fReqList = fReqGet.data().friendRequest;
                            fReqList.push({
                                from: uRef,
                                msg: ""
                            });
                            fReq.update('friendRequest', fReqList);
                        }
                        msg = this.toastCtrl.create({
                            message: "Sent " + this.email + " a friend request",
                            duration: 3000,
                            position: "bottom"
                        });
                        msg.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddFriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-friend',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/add-friend/add-friend.html"*/'<!--\n  Generated template for the AddFriendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Friend</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Enter the email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n  </ion-list>\n  <span (click)="scanQR()">OR Scan their QR Code</span>\n  <button ion-button (click)="submitEmail()">Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/add-friend/add-friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AddFriendPage);
    return AddFriendPage;
}());

//# sourceMappingURL=add-friend.js.map

/***/ })

});
//# sourceMappingURL=7.js.map