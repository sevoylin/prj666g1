webpackJsonp([13],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteUserPageModule", function() { return InviteUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite_user__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InviteUserPageModule = /** @class */ (function () {
    function InviteUserPageModule() {
    }
    InviteUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invite_user__["a" /* InviteUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invite_user__["a" /* InviteUserPage */]),
            ],
        })
    ], InviteUserPageModule);
    return InviteUserPageModule;
}());

//# sourceMappingURL=invite-user.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteUserPage; });
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



var InviteUserPage = /** @class */ (function () {
    function InviteUserPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.eventId = "";
        this.user = {};
        this.email = "";
        this.msg = "";
        this.eventId = navParams.data.toString();
    }
    InviteUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InviteUserPage');
    };
    InviteUserPage.prototype.invite = function () {
        var _this = this;
        var ucRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').where("email", "==", this.email).get().then(function (d) {
            if (d.docs.length > 0) {
                console.log("has !");
                _this.pushInviteRequest(d.docs[0].id);
            }
        });
    };
    InviteUserPage.prototype.pushInviteRequest = function (fId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var uRef_1, eRef_1;
            return __generator(this, function (_a) {
                try {
                    uRef_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(fId);
                    eRef_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Event').doc(this.eventId);
                    // determine if the person is already in list
                    eRef_1.get().then(function (doc) {
                        var canFind = doc.data().participants.find(function (ele) { return ele.isEqual(uRef_1); });
                        if (undefined != canFind) {
                            _this.toastCtrl.create({
                                message: "User already in the event",
                                duration: 3000,
                                position: "bottom"
                            }).present();
                        }
                        else {
                            var fReq_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Request').doc(fId);
                            fReq_1.get().then(function (doc) {
                                var is = doc.data().eventRequest.find(function (fr) { return fr.from.isEqual(eRef_1); });
                                if (undefined == is) {
                                    var fReqList = doc.data().eventRequest;
                                    fReqList.push({
                                        from: eRef_1,
                                        msg: _this.msg.trim()
                                    });
                                    fReq_1.update('eventRequest', fReqList);
                                    _this.toastCtrl.create({
                                        message: "Sent " + _this.email + " a invite request",
                                        duration: 3000,
                                        position: "bottom"
                                    }).present();
                                }
                            });
                        }
                    });
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    InviteUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invite-user',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/invite-user/invite-user.html"*/'<!--\n  Generated template for the InviteUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Invite User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Enter the email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Enter the message:</ion-label>\n      <ion-input type="text" [(ngModel)]="msg"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button block (click)="invite()">Invite</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/invite-user/invite-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], InviteUserPage);
    return InviteUserPage;
}());

//# sourceMappingURL=invite-user.js.map

/***/ })

});
//# sourceMappingURL=13.js.map