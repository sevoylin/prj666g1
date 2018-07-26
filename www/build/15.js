webpackJsonp([15],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
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




var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        // Properties
        this.msgList = [];
        this.user = {};
        this.chatTitle = "";
        this.msgInput = "";
        this.emojiDisplay = false;
        this.user.uid = this.afAuth.auth.currentUser.uid;
        this.user.email = this.afAuth.auth.currentUser.email;
        this.chatRef = navParams.data;
        this.getUser();
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        this.chatListener();
    };
    ChatPage.prototype.getUser = function () {
        var _this = this;
        var doc = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        doc.onSnapshot(function (doc) {
            if (doc.data() != null) {
                if (doc.data().username != "")
                    _this.user = doc.data().username;
            }
        });
        // detach listener
        doc.onSnapshot(function () { });
    };
    // Chat listener
    ChatPage.prototype.chatListener = function () {
        var _this = this;
        this.chatRef.onSnapshot(function (doc) {
            _this.msgList = doc.data().messages;
            _this.chatTitle = doc.data().name;
        }, function (err) {
            console.error("Error: " + err.message);
        });
    };
    // Button Listeners
    ChatPage.prototype.emojiBtn = function () {
        this.emojiDisplay = !this.emojiDisplay;
    };
    ChatPage.prototype.sendBtn = function () {
        // Do nothing if there is nothing but &nbsp;
        if (!this.msgInput.trim())
            return;
        var msg = { sender: this.user, content: this.msgInput.trim() };
        // console.log("From Input : " + msg.sender + " said " + msg.content);
        this.msgList.push(msg);
        this.chatRef.update({ messages: this.msgList });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{chatTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- Message Area -->\n  <div class="message-area">\n    <div *ngFor="let msg of msgList"\n         class="message">\n      <p>{{msg.sender}} :  {{msg.content}}</p>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer no-border [style.height]="emojiDisplay ? \'255px\' : \'55px\'">\n  <div class="input-area">\n    <!-- Emoji Button -->\n    <button ion-button clear icon-only item-right (click)="emojiBtn()">\n      <ion-icon name="md-happy"></ion-icon>\n    </button>\n\n    <!-- Input Area -->\n    <textarea #msg_Input\n              (keyup.enter)="sendBtn()" \n              placeholder="Say Something" \n              [(ngModel)]="msgInput"> &nbsp;\n    </textarea>\n    \n    <!-- Submit Button -->\n    <button ion-button clear icon-only item-right (click)="sendBtn()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=15.js.map