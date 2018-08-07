webpackJsonp([18],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarsPageModule", function() { return AvatarsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avatars__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AvatarsPageModule = /** @class */ (function () {
    function AvatarsPageModule() {
    }
    AvatarsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__avatars__["a" /* AvatarsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__avatars__["a" /* AvatarsPage */]),
            ],
        })
    ], AvatarsPageModule);
    return AvatarsPageModule;
}());

//# sourceMappingURL=avatars.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarsPage; });
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
 * Generated class for the AvatarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvatarsPage = /** @class */ (function () {
    function AvatarsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { "toolbarTitle": "Avatars",
            items: [{ "id": 0, "image": "assests/images/avatars/0.jpg" },
                { "id": 1, "image": "assests/images/avatars/1.jpg" },
                { "id": 2, "image": "assests/images/avatars/2.jpg" },
                { "id": 3, "image": "assests/images/avatars/3.jpg" },
                { "id": 4, "image": "assests/images/avatars/4.jpg" },
                { "id": 5, "image": "assests/images/avatars/5.jpg" },
                { "id": 6, "image": "assests/images/avatars/6.jpg" },
                { "id": 7, "image": "assests/images/avatars/7.jpg" },
                { "id": 8, "image": "assests/images/avatars/8.jpg" },
                { "id": 9, "image": "assests/images/avatars/9.jpg" },
                { "id": 10, "image": "assests/images/avatars/10.jpg" },
                { "id": 11, "image": "assests/images/avatars/11.jpg" },
                { "id": 12, "image": "assests/images/avatars/12.jpg" },
                { "id": 13, "image": "assests/images/avatars/13.jpg" },
                { "id": 14, "image": "assests/images/avatars/14.jpg" },
                { "id": 15, "image": "assests/images/avatars/15.jpg" },
                { "id": 16, "image": "assests/images/avatars/16.jpg" },
                { "id": 17, "image": "assests/images/avatars/17.jpg" },
                { "id": 18, "image": "assests/images/avatars/18.jpg" },
                { "id": 19, "image": "assests/images/avatars/19.jpg" },
                { "id": 20, "image": "assests/images/avatars/20.jpg" },
                { "id": 21, "image": "assests/images/avatars/21.jpg" },
                { "id": 22, "image": "assests/images/avatars/22.jpg" },
                { "id": 23, "image": "assests/images/avatars/23.jpg" },
                { "id": 24, "image": "assests/images/avatars/24.jpg" },
                { "id": 25, "image": "assests/images/avatars/25.jpg" },
                { "id": 26, "image": "assests/images/avatars/26.jpg" },
                { "id": 27, "image": "assests/images/avatars/27.jpg" },
                { "id": 28, "image": "assests/images/avatars/28.jpg" },
                { "id": 29, "image": "assests/images/avatars/29.jpg" },
                { "id": 30, "image": "assests/images/avatars/30.jpg" },
                { "id": 31, "image": "assests/images/avatars/31.jpg" },
                { "id": 32, "image": "assests/images/avatars/32.jpg" },
                { "id": 33, "image": "assests/images/avatars/33.jpg" },
                { "id": 34, "image": "assests/images/avatars/34.jpg" },
                { "id": 35, "image": "assests/images/avatars/35.jpg" },
                { "id": 36, "image": "assests/images/avatars/36.jpg" },
                { "id": 37, "image": "assests/images/avatars/37.jpg" },
                { "id": 38, "image": "assests/images/avatars/38.jpg" },
                { "id": 39, "image": "assests/images/avatars/39.jpg" },
                { "id": 40, "image": "assests/images/avatars/40.jpg" },
                { "id": 41, "image": "assests/images/avatars/41.jpg" },
                { "id": 42, "image": "assests/images/avatars/42.jpg" },
                { "id": 43, "image": "assests/images/avatars/43.jpg" },
                { "id": 44, "image": "assests/images/avatars/44.jpg" },
                { "id": 45, "image": "assests/images/avatars/45.jpg" },
                { "id": 46, "image": "assests/images/avatars/46.jpg" },
                { "id": 47, "image": "assests/images/avatars/47.jpg" }], };
        this.openAvatars = function (group, index) {
        };
    }
    AvatarsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvatarsPage');
    };
    AvatarsPage.prototype.loadAvatars = function (avatars) {
        if (avatars === void 0) { avatars = []; }
    };
    AvatarsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avatars',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/avatars/avatars.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-grid *ngIf="data != null">\n        <ion-row>\n            <ion-col no-padding col-4 col-sm-3 col-md-6 col-lg-4 col-xl-3 *ngFor="let item of data.items;let i = index;">\n                <ion-item no-lines *ngFor="let image of data.items; let i = index">\n                    <ion-card background-size [ngStyle]="{\'background-image\': \'url(\' + image.image + \')\'}"></ion-card>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>    \n</ion-content>'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/avatars/avatars.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AvatarsPage);
    return AvatarsPage;
}());

//# sourceMappingURL=avatars.js.map

/***/ })

});
//# sourceMappingURL=18.js.map