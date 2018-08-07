webpackJsonp([9],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_profile__ = __webpack_require__(766);
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

/***/ 766:
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
        this.btnList = [];
        this.user = {};
        this.fromEvent = true;
        this.isEventAdmin = false;
        this.eventId = "";
        this.user.uid = navParams.get('uid');
        this.fromEvent = navParams.get('fromEvent');
    }
    ViewProfilePage.prototype.ionViewDidLoad = function () {
        this.fillUserInfo();
    };
    ViewProfilePage.prototype.fillUserInfo = function () {
        var _this = this;
        if (undefined != this.user.uid) {
            var doc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
            doc.get().then(function (doc) {
                if (doc.exists) {
                    _this.user.avatar = doc.data().avatar;
                    _this.user.email = doc.data().email;
                    _this.user.username = doc.data().username;
                    if (_this.fromEvent) {
                        _this.user.lastName = "";
                        _this.user.firstName = "Not Avaliable";
                        _this.eventId = _this.navParams.get('eventId').toString();
                        _this.isEventAdmin = _this.navParams.get('isAdmin');
                    }
                    else {
                        _this.user.firstName = doc.data().firstName;
                        _this.user.lastName = doc.data().lastName;
                    }
                }
            });
        }
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

/***/ })

});
//# sourceMappingURL=9.js.map