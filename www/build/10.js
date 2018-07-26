webpackJsonp([10],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { GoogleLoginComponent} from '../../components/google-login/google-login'; 
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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



var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.password = "";
        this.retypePwd = "";
        this.user = {
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            eventList: [],
            friendList: [],
            blockedUsers: [],
            location: new __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].GeoPoint(0, 0)
        };
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1, err_msg, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (this.user.email.trim().length == 0 || this.user.email.indexOf('@') < 0) {
                            throw { code: "auth/invalid-email" };
                        }
                        if (this.password.length < 6 || this.password.length > 18) {
                            throw { code: "pwd/length" };
                        }
                        if (this.password != this.retypePwd) {
                            throw { code: "pwd/match" };
                        }
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(user.email, this.password)
                                .then(function (res) {
                                var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
                                user.sendEmailVerification();
                                _this.initialDoc(user.uid);
                                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
                                _this.navCtrl.pop();
                            })];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        err_msg = "";
                        switch (e_1.code) {
                            case ('auth/invalid-email'): {
                                err_msg = "Please Using an email to register!";
                                break;
                            }
                            case ('pwd/match'): {
                                err_msg = "Re-Type password didn't match!";
                                this.password = this.retypePwd = "";
                                break;
                            }
                            case ('auth/email-already-in-use'): {
                                err_msg = "Email already registered!";
                                break;
                            }
                            case ('pwd/length'): {
                                err_msg = "Password should be 6-18 digits!";
                                break;
                            }
                            default: {
                                err_msg = e_1.code;
                                break;
                            }
                        }
                        err = this.toastCtrl.create({
                            message: err_msg,
                            duration: 3000,
                            position: 'bottom'
                        });
                        err.present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.initialDoc = function (userId) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(userId).set(this.user);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Request').doc(userId).set({
            eventRequest: [],
            friendRequest: []
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid no-padding>\n    <ion-row center>\n      <!--Big Image Header-->\n      <!--TODO: figure out how to randomize the image from the folder-->\n      <ion-col no-padding col-12 background-size [ngStyle]="{\'background-image\': \'url(../../assets/images/background/2.jpg)\'}">\n        <!--Header Title-->\n        <h1 ion-text register-title text-wrap>Register</h1>\n      </ion-col>\n\n      <ion-col form col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!--Form-->\n        <ion-item>\n          <!--Input field username-->\n          <ion-label stacked>Username</ion-label>\n          <ion-input placeholder="username (optional)" [(ngModel)]="user.username" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <!--Input field email-->\n          <ion-label stacked>Email</ion-label>\n          <ion-input required placeholder="email" type="text" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <!--Input field password-->\n          <ion-label stacked>Password</ion-label>\n          <ion-input required placeholder="password" type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <!--Input field retype password-->\n          <ion-label stacked>Retype Password</ion-label>\n          <ion-input required placeholder="retype password" type="password" [(ngModel)]="retypePwd"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <!--Input field first name-->\n          <ion-label stacked>First Name</ion-label>\n          <ion-input placeholder="first name (optional)" [(ngModel)]="user.firstName" type="text" pattern="[a-zA-Z]"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <!--Input field last name-->\n          <ion-label stacked>Last Name</ion-label>\n          <ion-input placeholder="last name (optional)" [(ngModel)]="user.lastName" type="text" pattern="[a-zA-Z]"></ion-input>\n        </ion-item>\n\n        <!--Register button-->\n        <button ion-button float-right clear button-clear text-capitalize (click)="register(user)">Register</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=10.js.map