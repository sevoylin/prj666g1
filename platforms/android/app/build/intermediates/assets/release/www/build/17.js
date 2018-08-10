webpackJsonp([17],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(771);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(51);
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



var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Properties
        this.msgList = [];
        this.user = {};
        this.chatTitle = "";
        this.msgInput = "";
        this.emojiDisplay = false;
        this.user.uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        this.user.email = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.email;
        this.chatRef = navParams.data;
        this.getUser();
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        this.chatListener();
    };
    ChatPage.prototype.getUser = function () {
        var _this = this;
        var doc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        doc.get().then(function (doc) {
            if (doc.data() != null) {
                if (doc.data().username != "")
                    _this.user.username = doc.data().username;
                else
                    _this.user.username = doc.data().email;
            }
        });
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
        var msg = {
            sender: this.user.username,
            userId: this.user.uid,
            content: this.msgInput.trim()
        };
        // console.log("From Input : " + msg.sender + " said " + msg.content);
        this.msgList.push(msg);
        this.chatRef.update({ messages: this.msgList });
        this.msgInput = "";
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1-bgGeo/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{chatTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- Message Area -->\n  <div class="message-area">\n    <div *ngFor="let msg of msgList"\n         class="message">\n      <p>{{msg.sender}} :  {{msg.content}}</p>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer no-border [style.height]="emojiDisplay ? \'255px\' : \'55px\'">\n  <div class="input-area">\n    <!-- Emoji Button -->\n    <button ion-button clear icon-only item-right (click)="emojiBtn()">\n      <ion-icon name="md-happy"></ion-icon>\n    </button>\n\n    <!-- Input Area -->\n    <textarea #msg_Input\n              (keyup.enter)="sendBtn()" \n              placeholder="Say Something" \n              [(ngModel)]="msgInput"> &nbsp;\n    </textarea>\n    \n    <!-- Submit Button -->\n    <button ion-button clear icon-only item-right (click)="sendBtn()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1-bgGeo/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=17.js.map