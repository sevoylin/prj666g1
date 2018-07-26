webpackJsonp([8],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventParticipantsPageModule", function() { return ViewEventParticipantsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_event_participants__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewEventParticipantsPageModule = /** @class */ (function () {
    function ViewEventParticipantsPageModule() {
    }
    ViewEventParticipantsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_event_participants__["a" /* ViewEventParticipantsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_event_participants__["a" /* ViewEventParticipantsPage */]),
            ],
        })
    ], ViewEventParticipantsPageModule);
    return ViewEventParticipantsPageModule;
}());

//# sourceMappingURL=view-event-participants.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEventParticipantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewEventParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewEventParticipantsPage = /** @class */ (function () {
    function ViewEventParticipantsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.participants = [];
    }
    ViewEventParticipantsPage.prototype.getParticipants = function (pRef) {
        var _this = this;
        pRef.forEach(function (participant) {
            participant.onSnapshot(function (doc) {
                var p = {};
                p.email = doc.data().email;
                p.username = doc.data().username;
                _this.participants.push(p);
            });
        });
    };
    ViewEventParticipantsPage.prototype.ionViewDidLoad = function () {
        this.getParticipants(this.navParams.data);
        console.log(this.participants);
    };
    ViewEventParticipantsPage.prototype.ionViewDidLeave = function () {
        // detach listener
        this.navParams.data.forEach(function (p) {
            p.onSnapshot(function () { });
        });
    };
    ViewEventParticipantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-event-participants',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/view-event-participants/view-event-participants.html"*/'<!--\n  Generated template for the ViewEventParticipantsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Participants</ion-title>\n  </ion-navbar>\n\n</ion-header>\n \n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let p of participants">\n      <ion-icon ios="ios-person" md="md-person"></ion-icon>\n        {{p.username}}\n        <p>{{p.email}}</p>\n    </ion-item>\n  </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/view-event-participants/view-event-participants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ViewEventParticipantsPage);
    return ViewEventParticipantsPage;
}());

//# sourceMappingURL=view-event-participants.js.map

/***/ })

});
//# sourceMappingURL=8.js.map