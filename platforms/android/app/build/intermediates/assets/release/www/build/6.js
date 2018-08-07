webpackJsonp([6,9],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_profile__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewProfilePageModule = /** @class */ (function () {
    function ViewProfilePageModule() {
    }
    ViewProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_profile__["a" /* ViewProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_profile__["a" /* ViewProfilePage */]),
            ],
        })
    ], ViewProfilePageModule);
    return ViewProfilePageModule;
}());

//# sourceMappingURL=view-profile.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventParticipantsPageModule", function() { return ViewEventParticipantsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_event_participants__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_profile_view_profile_module__ = __webpack_require__(738);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_event_participants__["a" /* ViewEventParticipantsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__view_profile_view_profile_module__["ViewProfilePageModule"]
            ],
        })
    ], ViewEventParticipantsPageModule);
    return ViewEventParticipantsPageModule;
}());

//# sourceMappingURL=view-event-participants.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfilePage; });
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



var ViewProfilePage = /** @class */ (function () {
    function ViewProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { "toolbarTitle": "View Profile",
            "title": "",
            "subtitle": "",
            "background": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg" };
        this.user = {};
        this.user.uid = navParams.data;
    }
    ViewProfilePage.prototype.fillUserInfo = function () {
        var _this = this;
        if (undefined != this.user.uid) {
            var doc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
            doc.get().then(function (doc) {
                if (doc.exists) {
                    _this.user.avatar = doc.data().avatar;
                    _this.user.email = doc.data().email;
                    _this.user.username = doc.data().username;
                    _this.user.firstName = doc.data().firstName;
                    _this.user.lastName = doc.data().lastName;
                }
            });
        }
    };
    ViewProfilePage.prototype.ionViewDidLoad = function () {
        this.fillUserInfo();
    };
    ViewProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-profile',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/view-profile/view-profile.html"*/'<ion-header header-ios>\n    <ion-navbar transparent>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <!--<ion-title>{{data.toolbarTitle}}</ion-title>-->\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content  elastic-header>\n  <div padding background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n    <ion-thumbnail *ngIf="user != null">\n      <img [src]="user.avatar" />\n    </ion-thumbnail>\n    <h2 text-center parallax-title *ngIf="user != null">{{user.username}}</h2>\n    <h3 text-center parallax-subtitle *ngIf="user != null">{{user.firstName}} {{user.lastName}}</h3>\n  </div>\n\n  <ion-item>\n    <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n    {{user.email}}\n  </ion-item>\n  <ion-item>\n    <ion-icon ios="ios-glasses" md="md-glasses"></ion-icon>\n    {{user.username}}\n  </ion-item>\n  <ion-item>\n    <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n    {{user.firstName}} {{user.lastName}}\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/view-profile/view-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ViewProfilePage);
    return ViewProfilePage;
}());

//# sourceMappingURL=view-profile.js.map

/***/ }),

/***/ 765:
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


var ViewEventParticipantsPage = /** @class */ (function () {
    function ViewEventParticipantsPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.data = { "toolbarTitle": "Participants",
            "title": "Search for participant",
            "headerImage": "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg" };
        this.searchTerm = "";
        this.participants = [];
        this.listReady = false;
        this.isAdmin = true;
        this.displayList = [];
        this.searchTerm = "";
    }
    ViewEventParticipantsPage.prototype.getParticipants = function (pRef) {
        var _this = this;
        this.listReady = false;
        this.participants.length = 0;
        this.displayList.length = 0;
        pRef.forEach(function (participant) {
            participant.get().then(function (doc) {
                var p = {};
                // need to change there
                p.avatar = "assets/images/avatar/25.jpg";
                p.uid = participant.id;
                p.email = doc.data().email;
                p.username = doc.data().username;
                _this.participants.push(p);
                if (_this.searchTerm.trim() == "")
                    _this.displayList.push(p);
            });
        });
        this.listReady = true;
    };
    ViewEventParticipantsPage.prototype.search = function (keyword) {
        var _this = this;
        keyword = keyword.trim().toLowerCase();
        this.listReady = false;
        this.displayList.length = 0;
        this.participants.forEach(function (ppl) {
            var isFound = false;
            if (!isFound)
                isFound = ppl.username.toLowerCase().includes(keyword);
            if (!isFound)
                isFound = ppl.email.toLowerCase().includes(keyword);
            if (isFound)
                _this.displayList.push(ppl);
        });
        this.listReady = true;
        if (keyword.length == 0)
            this.displayList = this.participants.slice(0);
    };
    ViewEventParticipantsPage.prototype.presentActionSheet = function (uid) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'View Profile',
                    handler: function () {
                        _this.navCtrl.push("ViewProfilePage", uid);
                    }
                },
                {
                    text: 'Block',
                    handler: function () {
                        console.log("Block " + uid);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    ViewEventParticipantsPage.prototype.ionViewDidLoad = function () {
        this.getParticipants(this.navParams.data);
    };
    ViewEventParticipantsPage.prototype.ionViewDidLeave = function () {
        // detach listener
        this.navParams.data.forEach(function (p) {
            p.onSnapshot(function () { });
        });
    };
    ViewEventParticipantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-event-participants',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/view-event-participants/view-event-participants.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n  </ion-navbar>\n\n  <ion-toolbar no-padding>\n      <div background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n        <div search-bar-bcg>\n          <!-- Header Title -->\n          <h1 ion-text no-margin padding-left search-bar-title>{{data.title}}</h1>\n          <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="search(searchTerm)"></ion-searchbar>\n        </div>\n      </div>\n  </ion-toolbar>\n\n</ion-header>\n \n<ion-content elastic-header>\n  <ion-list *ngIf="participants != null && listReady">\n    <ion-item *ngIf="displayList.length == 0"><p>No results for:{{searchTerm}}</p></ion-item>\n    <ion-item border no-lines *ngFor="let p of displayList">\n        <ion-avatar item-start>\n          <img [src]="p.avatar"/>\n        </ion-avatar>\n        <h2 item-title>{{p.username}}</h2>\n        <h3 item-subtitle text-wrap>{{p.email}}</h3>\n        <button *ngIf="isAdmin" text-capitalize button-clear ion-button item-end clear (click)="presentActionSheet(p.uid)"><ion-icon name="more"></ion-icon></button>\n    </ion-item>\n  </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/view-event-participants/view-event-participants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ViewEventParticipantsPage);
    return ViewEventParticipantsPage;
}());

//# sourceMappingURL=view-event-participants.js.map

/***/ })

});
//# sourceMappingURL=6.js.map