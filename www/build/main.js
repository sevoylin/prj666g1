webpackJsonp([18],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(afAuth, events, navCtrl, navParams) {
        var _this = this;
        this.afAuth = afAuth;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.home_msg = "";
        events.subscribe('login_status', function (isLogin, user) {
            if (isLogin && user != null) {
                _this.home_msg = 'Hello ' + user.uid;
            }
            else {
                _this.home_msg = "Hello there! Use the left side menue to login!";
            }
        });
    }
    HomePage.prototype.ionViewWillLoad = function () {
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div background-size default-background [ngStyle]="{\'background-image\': \'url(../../assets/images/splashscreen/3.jpg)\'}">\n    <div class="ionic-description" text-center>\n      <h2 item-title>PRJ666 Group 1</h2>\n      <h2 item-title>MeeTogether</h2>\n      <p item-subtitle>Dennis Arul</p>\n      <p item-subtitle>Jay Ansin</p>\n      <p item-subtitle>Shlok Purani</p>\n      <p item-subtitle>Yankai Tian (leader)</p>\n    </div>\n    <a href="https://zenit.senecac.on.ca/~prj666_182a01/" target="_blank">Group 1 Zenit</a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(70);
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



var FriendListPage = /** @class */ (function () {
    function FriendListPage(navCtrl, navParams, alertCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.data = { "toolbarTitle": "Friends",
            "title": "Search for friend",
            "headerImage": "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg" };
        this.user = {};
        this.userDoc = {};
        this.requestDoc = {};
        this.searchTerm = "";
        this.friendList = [];
        this.blockedList = [];
        this.requestList = [];
        this.displayList = [];
        this.listReady = false;
        this.displayFriends = true;
        this.displayRequest = false;
        this.displayBlocked = false;
        this.user.uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        this.searchTerm = "";
        this.getLists();
    }
    FriendListPage.prototype.ionViewDidLoad = function () { };
    FriendListPage.prototype.ionViewDidEnter = function () {
        this.search(""); // use search to initialize
    };
    FriendListPage.prototype.ionViewDidLeave = function () {
        this.userDoc.onSnapshot(function () { });
        this.requestDoc.onSnapshot(function () { });
    };
    FriendListPage.prototype.getLists = function () {
        var _this = this;
        this.displayList.length = 0;
        this.userDoc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        this.requestDoc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Request').doc(this.user.uid);
        this.userDoc.onSnapshot(function (data) {
            _this.friendList.length = 0;
            _this.blockedList.length = 0;
            _this.user.friendList = data.data().friendList;
            _this.user.blockedUsers = data.data().blockedUsers;
            // Retrieve friendlist
            _this.user.friendList.forEach(function (fRef) {
                fRef.get().then(function (friend) {
                    var f = {};
                    f.uid = friend.id;
                    f.firstName = friend.data().firstName;
                    f.lastName = friend.data().lastName;
                    f.username = friend.data().username;
                    f.email = friend.data().email;
                    if (f.avatar == null || f.avatar == "") {
                        f.avatar = "assets/images/avatar/25.jpg";
                    }
                    _this.friendList.push(f);
                    if (_this.searchTerm.trim() == "" && _this.displayFriends)
                        _this.displayList = _this.friendList.slice(0);
                });
            });
            // Retrieve blockedlist
            _this.user.blockedUsers.forEach(function (bRef) {
                bRef.get().then(function (blocked) {
                    var b = {};
                    b.uid = blocked.id;
                    b.firstName = blocked.data().firstName;
                    b.lastName = blocked.data().lastName;
                    b.username = blocked.data().username;
                    b.email = blocked.data().email;
                    if (b.avatar == null || b.avatar == "") {
                        b.avatar = "assets/images/avatar/25.jpg";
                    }
                    _this.blockedList.push(b);
                    if (_this.searchTerm.trim() == "" && _this.displayBlocked)
                        _this.displayList = _this.blockedList.slice(0);
                });
            });
        });
        // Retrieve requestlist
        this.requestDoc.onSnapshot(function (doc) {
            _this.requestList.length = 0;
            var reqList = doc.data().friendRequest;
            reqList.forEach(function (req) {
                req.from.get().then(function (ppl) {
                    var nr = {
                        uid: req.from.id,
                        avatar: "assets/images/avatar/25.jpg",
                        firstName: ppl.data().firstName,
                        lastName: ppl.data().lastName,
                        email: ppl.data().email,
                        username: ppl.data().username,
                        msg: req.msg
                    };
                    _this.requestList.push(nr);
                    if (_this.searchTerm.trim() == "" && _this.displayRequest)
                        _this.displayList = _this.requestList.slice(0);
                });
            });
        });
    };
    FriendListPage.prototype.switchList = function (listIdx) {
        switch (listIdx) {
            case 0: {
                this.displayFriends = true;
                this.displayRequest = false;
                this.displayBlocked = false;
                this.displayList = this.friendList.slice(0);
                break;
            }
            case 1: {
                this.displayFriends = false;
                this.displayRequest = true;
                this.displayBlocked = false;
                this.displayList = this.requestList.slice(0);
                break;
            }
            case 2: {
                this.displayFriends = false;
                this.displayRequest = false;
                this.displayBlocked = true;
                this.displayList = this.blockedList.slice(0);
                break;
            }
        }
    };
    FriendListPage.prototype.addFriend = function () {
        this.navCtrl.push('AddFriendPage', this.user);
    };
    FriendListPage.prototype.search = function (keyword) {
        var _this = this;
        keyword = keyword.trim().toLowerCase();
        this.listReady = false;
        var targetList;
        if (this.displayBlocked)
            targetList = this.blockedList;
        if (this.displayFriends)
            targetList = this.friendList;
        if (this.displayRequest)
            targetList = this.requestList;
        this.displayList.length = 0;
        targetList.forEach(function (f) {
            var isFound = false;
            var fullName = f.firstName + " " + f.lastName;
            var fullNameR = f.lastName + ", " + f.firstName;
            if (!isFound)
                isFound = fullName.toLowerCase().includes(keyword);
            if (!isFound)
                isFound = fullNameR.toLowerCase().includes(keyword);
            if (!isFound)
                isFound = f.username.toLowerCase().includes(keyword);
            if (!isFound)
                isFound = f.email.toLowerCase().includes(keyword);
            if (isFound)
                _this.displayList.push(f);
        });
        this.listReady = true;
        if (keyword.length == 0)
            this.displayList = targetList.slice(0);
    };
    FriendListPage.prototype.presentActionSheet = function (uid) {
        var _this = this;
        var actionSheet;
        // For displaying friend
        if (this.displayFriends)
            actionSheet = this.actionSheetCtrl.create({
                title: '',
                buttons: [
                    {
                        text: 'View Profile',
                        handler: function () {
                            _this.navCtrl.push("ViewProfilePage", uid);
                        }
                    },
                    {
                        text: 'Send Message',
                        handler: function () {
                            _this.sendMessage(uid);
                        }
                    },
                    {
                        text: 'Delete Friend',
                        role: 'destructive',
                        handler: function () {
                            _this.deleteFriend(uid);
                        }
                    },
                    {
                        text: 'Block Friend',
                        handler: function () {
                            _this.blockFriend(uid, true);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ]
            });
        // For displaying request
        if (this.displayRequest)
            actionSheet = this.actionSheetCtrl.create({
                title: '',
                buttons: [
                    {
                        text: 'View Profile',
                        handler: function () {
                            _this.navCtrl.push("ViewProfilePage", uid);
                        }
                    },
                    {
                        text: 'Approve',
                        handler: function () {
                            _this.requestOperate(uid, true);
                        }
                    },
                    {
                        text: 'Decline',
                        role: 'destructive',
                        handler: function () {
                            _this.requestOperate(uid, false);
                        }
                    },
                    {
                        text: 'Block User',
                        handler: function () {
                            _this.blockFriend(uid, false);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () { }
                    }
                ]
            });
        // For displaying blocked
        if (this.displayBlocked)
            actionSheet = this.actionSheetCtrl.create({
                title: '',
                buttons: [
                    {
                        text: 'View Profile',
                        handler: function () {
                            _this.navCtrl.push("ViewProfilePage", uid);
                        }
                    },
                    {
                        text: 'Remove Blocked',
                        role: 'destructive',
                        handler: function () {
                            console.log("remove from block");
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
    FriendListPage.prototype.deleteFriend = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var friendRef, friendData, friend, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        friendRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(uid);
                        return [4 /*yield*/, friendRef.get()];
                    case 1:
                        friendData = _a.sent();
                        friend = {};
                        friend.firstName = friendData.data().firstName;
                        friend.lastName = friendData.data().lastName;
                        alert = this.alertCtrl.create({
                            title: 'Delete Friend',
                            message: 'Are you sure to delete "' + friend.firstName + ' ' + friend.lastName + '"',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () { }
                                },
                                {
                                    text: 'Confirm',
                                    handler: function () {
                                        _this.deleteFriendCommon(uid);
                                    }
                                }
                            ]
                        });
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FriendListPage.prototype.deleteFriendCommon = function (uid) {
        var chatId;
        if (this.user.uid.localeCompare(uid) > 0)
            chatId = this.user.uid + "" + uid;
        else
            chatId = uid + "" + this.user.uid;
        var userRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        var friendRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(uid);
        userRef.get().then(function (doc) {
            var fList = doc.data().friendList;
            var idx = fList.indexOf(fList.find(function (ppl) { return ppl.isEqual(friendRef); }));
            fList.splice(idx, 1);
            userRef.update('friendList', fList);
        });
        friendRef.get().then(function (doc) {
            var fList = doc.data().friendList;
            var idx = fList.indexOf(fList.find(function (ppl) { return ppl.isEqual(userRef); }));
            fList.splice(idx, 1);
            friendRef.update('friendList', fList);
        });
        __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Chat').doc(chatId).delete();
    };
    FriendListPage.prototype.blockFriend = function (uid, isFriend) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var friendRef, friendData, friend, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        friendRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(uid);
                        return [4 /*yield*/, friendRef.get()];
                    case 1:
                        friendData = _a.sent();
                        friend = {};
                        friend.firstName = friendData.data().firstName;
                        friend.lastName = friendData.data().lastName;
                        alert = this.alertCtrl.create({
                            title: 'Block User',
                            message: 'Are you sure to block "' + friend.firstName + ' ' + friend.lastName + '"',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () { }
                                },
                                {
                                    text: 'Confirm',
                                    handler: function () {
                                        if (isFriend)
                                            _this.deleteFriendCommon(uid);
                                        var userRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(_this.user.uid);
                                        userRef.get().then(function (doc) {
                                            _this.user.blockedUsers = doc.data().blockedUsers;
                                            var idx = _this.user.blockedUsers.findIndex(function (u) { return u.isEqual(friendRef); });
                                            if (idx < 0) {
                                                _this.user.blockedUsers.push(friendRef);
                                                userRef.update('blockedUsers', _this.user.blockedUsers);
                                            }
                                        });
                                    }
                                }
                            ]
                        });
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FriendListPage.prototype.requestOperate = function (uid, isApproved) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tRef;
            return __generator(this, function (_a) {
                tRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(uid);
                if (isApproved) {
                    this.userDoc.get().then(function (doc) {
                        var fl = doc.data().friendList;
                        fl.push(tRef);
                        _this.userDoc.update('friendList', fl);
                    });
                    tRef.get().then(function (doc) {
                        var fl = doc.data().friendList;
                        fl.push(_this.userDoc);
                        tRef.update('friendList', fl);
                    });
                }
                this.requestDoc.get().then(function (doc) {
                    var reqList = doc.data().friendRequest;
                    var idx = reqList.findIndex(function (r) {
                        return r.from.id == uid;
                    });
                    if (idx > -1)
                        reqList.splice(idx, 1);
                    _this.requestDoc.update('friendRequest', reqList);
                });
                return [2 /*return*/];
            });
        });
    };
    FriendListPage.prototype.sendMessage = function (uid) {
        var _this = this;
        // get chat id
        var chatId = "";
        if (this.user.uid.localeCompare(uid) > 0)
            chatId = this.user.uid + "" + uid;
        else
            chatId = uid + "" + this.user.uid;
        // find this id in chat id
        var chatRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Chat').doc(chatId);
        chatRef.get().then(function (doc) {
            if (!doc.exists)
                __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Chat').doc(chatId).set({
                    messages: [],
                    name: "Private Chat"
                });
            _this.navCtrl.push("ChatPage", chatRef);
        });
    };
    FriendListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friend-list',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/friend-list/friend-list.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<ion-title *ngIf="data != null">{{data.toolbarTitle}}</ion-title>-->\n  </ion-navbar>\n\n  <ion-toolbar no-padding>\n      <div background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n        <div search-bar-bcg>\n          <!-- Header Title -->\n          <h1 ion-text no-margin padding-left search-bar-title>{{data.title}}</h1>\n          <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="search(searchTerm)"></ion-searchbar>\n        </div>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col (click)="switchList(0)">Friends</ion-col>\n          <ion-col (click)="switchList(1)">Request</ion-col>\n          <ion-col (click)="switchList(2)">Blocked</ion-col>\n          <ion-col (click)="addFriend()">Add</ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Content -->\n<ion-content elastic-header>\n  <!-- Display Friend List -->\n  <ion-list *ngIf="listReady">\n\n    <ion-item>Place Holder</ion-item> <!-- Need to remove after restyle -->\n\n    <ion-item *ngIf="displayList.length == 0 && listReady && searchTerm.length != 0"><p>No results for: "{{searchTerm}}"</p></ion-item>\n    <ion-item border no-lines *ngFor="let friend of displayList; let i = index">\n      <ion-avatar item-start>\n        <img [src]="friend.avatar"/>\n      </ion-avatar>\n      <h2 item-title>{{friend.firstName}} {{friend.lastName}}</h2>\n      <h3 item-subtitle text-wrap>{{friend.username}}</h3>\n      <h4 text-wrap *ngIf="displayRequest">{{friend.msg}}</h4>\n      <!-- Action Sheet Button-->\n      <button text-capitalize button-clear ion-button item-end clear (click)="presentActionSheet(friend.uid)"><ion-icon name="more"></ion-icon></button>\n    </ion-item>\n  </ion-list>\n  <!-- Display Blocked List -->\n</ion-content>\n\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/friend-list/friend-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object])
    ], FriendListPage);
    return FriendListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=friend-list.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(70);
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




var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, events, navCtrl, navParams, toastCtrl) {
        this.afAuth = afAuth;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.data = { "toolbarTitle": "Login",
            "forgotPassword": "Forgot password?",
            "other": "Test User",
            "subtitle": "Welcome",
            "labelEmail": "EMAIL",
            "labelUsername": "USERNAME",
            "labelPassword": "PASSWORD",
            "title": "Login to your account",
            "email": "Enter your email",
            "username": "Enter your username",
            "password": "Enter your password",
            "register": "Register",
            "login": "Login",
            "logo": "assets/images/logo/2.png",
            "errorUser": "Field can't be empty.",
            "errorPassword": "Field can't be empty." };
        this.user = {};
        this.password = "";
        this.err_msg = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, this.password)
                                .then(function () {
                                // to see the email if it is verified
                                _this.afAuth.auth.onAuthStateChanged(function (data) {
                                    if (!data.emailVerified) {
                                        // email not verified
                                        throw { code: 'auth/email-not-verified' };
                                    }
                                    // email verified
                                    _this.afAuth.auth.onAuthStateChanged(function (data) {
                                        _this.password = ""; // delete password
                                        user.uid = data.uid;
                                        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('Users').doc(user.uid).get().then(function (data) {
                                            _this.user.firstName = data.data().firstName;
                                            _this.user.lastName = data.data().lastName;
                                            _this.events.publish('login_status', true, user);
                                            _this.toastCtrl.create({
                                                message: "Welcome! " + _this.user.firstName + " " + _this.user.lastName,
                                                duration: 3000,
                                                position: "bottom"
                                            }).present();
                                            _this.navCtrl.setRoot('HomePage');
                                        });
                                    });
                                });
                            })
                                .catch(function (err) {
                                switch (err.code) {
                                    case ('auth/email-not-verified'): {
                                        _this.err_msg = "Email is not verified! Please check your mailbox!";
                                        break;
                                    }
                                    case ('auth/invalid-email'): {
                                        _this.err_msg = "Please enter a valid email!";
                                        break;
                                    }
                                    case ('auth/user-disabled'): {
                                        _this.err_msg = "User disabled!";
                                        break;
                                    }
                                    case ('auth/user-not-found'):
                                    case ('auth/wrong-password'): {
                                        _this.err_msg = "Incorrect email or password!";
                                        break;
                                    }
                                    default: {
                                        _this.err_msg = err.code;
                                    }
                                }
                                _this.toastCtrl.create({
                                    message: _this.err_msg,
                                    duration: 3000,
                                    position: "bottom"
                                }).present();
                            })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result) {
                            // publish a status for changing 
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.resetPwd = function () {
        this.navCtrl.push('ResetPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<ion-title>{{data.toolbarTitle}}</ion-title>-->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row padding-horizontal align-self-center>\n\n      <ion-col align-self start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <button ion-button button-clear text-capitalize clear float-left (click)="login(user)">{{data.other}}</button>\n        <button ion-button button-clear text-capitalize clear float-right (click)="resetPwd()">{{data.forgotPassword}}</button>\n      </ion-col>\n      \n      <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!--Logo-->\n        <img [src]="data.logo">\n        <!--Logo Subtitle-->\n        <h2 login-subtitle no-margin>{{data.subtitle}}</h2>\n        <!---Logo Title-->\n        <h1 ion-text padding-bottom login-title no-margin>{{data.title}}</h1>\n      </ion-col>\n\n      <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!---Input field username-->\n        <ion-item transparent>\n          <ion-label stacked>{{data.labelEmail}}</ion-label>\n          <ion-input required placeholder="{{data.email}}" type="email" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n\n        <!--Input field password-->\n        <ion-item transparent>\n          <ion-label stacked>{{data.labelPassword}}</ion-label>\n          <ion-input required type="password" placeholder="{{data.password}}" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <!--Share Section-->\n      <ion-col align-self-end bottom-form col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!---Login button-->\n        <button ion-button  full text-capitalize default-button (click)="login(user)">Login</button>\n        <!---Facebook button-->\n        <button ion-button default-button color="facebook" full text-capitalize block><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n        <!---Google button-->\n        <button ion-button default-button google-button color="google" full text-capitalize block><ion-icon name="logo-google"></ion-icon> Login with Google</button>\n      </ion-col>\n\n      <ion-col col-12>\n        <div description text-center>\n          <p>Don\'t have an account? <a text-capitalize ion-text color="primary" (click)="register()">Register</a></p>\n        </div>\n      </ion-col>\n      <!--End Share Section-->\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
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
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams, afAuth, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.events = events;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
    };
    LogoutPage.prototype.logoutBtnListener = function () {
        this.afAuth.auth.signOut();
        this.events.publish('login_status', false, null);
        this.toastCtrl.create({
            message: "You have logout",
            duration: 3000,
            position: "bottom"
        }).present();
        this.navCtrl.setRoot('HomePage');
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/logout/logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h2> Are you sure you want to logout? </h2>\n\n  <p> Note: After Logout you cannot get the notification from others! </p>\n\n  <button ion-button (click)="logoutBtnListener()">Logout</button>\n</ion-content>\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(70);
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



var ManageEventPage = /** @class */ (function () {
    function ManageEventPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.eventIcon = "assets/images/logo/1.png";
        this.data = { "toolbarTitle": "List of Events",
            "title": "Search for events",
            "headerImage": "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg" };
        this.user = {};
        this.events = [];
        this.eventRequests = [];
        this.displayList = [];
        this.searchTerm = "";
        this.displayEvents = true;
        this.listReady = false;
        this.user.uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        this.displayEvents = true;
        this.searchTerm = "";
        this.userRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        this.reqRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Request').doc(this.user.uid);
    }
    ManageEventPage.prototype.ionViewWillEnter = function () {
        this.getLists();
    };
    ManageEventPage.prototype.ionViewDidEnter = function () {
        this.search("");
    };
    ManageEventPage.prototype.ionViewDidLeave = function () {
        this.events.length = 0; // by set count = 0 not erase all data
        this.userRef.onSnapshot(function () { });
        this.reqRef.onSnapshot(function () { });
    };
    ManageEventPage.prototype.getLists = function () {
        var _this = this;
        this.listReady = false;
        this.userRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        this.userRef.onSnapshot(function (doc) {
            if (doc.data() != null) {
                _this.events.length = 0;
                _this.displayList.length = 0;
                _this.user.eventList = doc.data().eventList;
                _this.user.eventList.forEach(function (e) {
                    var event = {};
                    event.eventId = e.id;
                    e.get().then(function (content) {
                        if (content.data() != null) {
                            event.eventName = content.data().eventName;
                            event.date = content.data().date;
                            _this.events.push(event);
                            if (_this.searchTerm.trim() == "" && _this.displayEvents)
                                _this.displayList = _this.events.slice(0);
                        }
                    });
                });
            }
            _this.reqRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Request').doc(_this.user.uid);
            _this.reqRef.onSnapshot(function (doc) {
                _this.eventRequests.length = 0;
                var reqList = doc.data().eventRequest;
                reqList.forEach(function (req) {
                    req.from.get().then(function (e) {
                        var ne = {
                            eventId: req.from.id,
                            eventName: e.data().eventName,
                            date: e.data().date,
                            msg: req.msg
                        };
                        _this.eventRequests.push(ne);
                        if (_this.searchTerm.trim() == "" && !_this.displayEvents)
                            _this.displayList = _this.eventRequests.slice(0);
                    });
                });
            });
            _this.listReady = true;
        });
    };
    ManageEventPage.prototype.viewRequest = function (tf) {
        this.displayEvents = !tf;
        this.search("");
    };
    ManageEventPage.prototype.viewEvent = function (eventId, viewOnly) {
        this.navCtrl.push('ViewEventPage', { 'eventId': eventId,
            'viewOnly': viewOnly });
    };
    ManageEventPage.prototype.groupChat = function (eventId) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Event').doc(eventId).get().then(function (doc) {
            var chatRef = doc.data().chat;
            _this.navCtrl.push('ChatPage', chatRef);
        });
    };
    ManageEventPage.prototype.createEvent = function () {
        this.navCtrl.push('CreateEventPage');
    };
    ManageEventPage.prototype.joinEvent = function () {
        this.navCtrl.push('JoinEventPage');
    };
    ManageEventPage.prototype.search = function (keyword) {
        var _this = this;
        keyword = keyword.trim().toLowerCase();
        var currList;
        if (this.displayEvents)
            currList = this.events;
        else
            currList = this.eventRequests;
        this.listReady = false;
        this.displayList.length = 0;
        currList.forEach(function (e) {
            var isFound = false;
            if (!isFound)
                isFound = e.eventName.toLowerCase().includes(keyword);
            if (isFound)
                _this.displayList.push(e);
        });
        this.listReady = true;
        if (keyword.length == 0)
            this.displayList = currList.slice(0);
    };
    ManageEventPage.prototype.presentActionSheet = function (eid) {
        var _this = this;
        var actionSheet;
        // For displaying event
        if (this.displayEvents)
            actionSheet = this.actionSheetCtrl.create({
                title: '',
                buttons: [
                    {
                        text: 'View Event',
                        handler: function () { _this.viewEvent(eid, false); }
                    },
                    {
                        text: 'Group Chat',
                        handler: function () {
                            _this.groupChat(eid);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ]
            });
        else
            actionSheet = this.actionSheetCtrl.create({
                title: '',
                buttons: [
                    {
                        text: 'View Event',
                        handler: function () { _this.viewEvent(eid, true); }
                    },
                    {
                        text: 'Join',
                        handler: function () {
                            _this.requestOperate(eid, true);
                        }
                    },
                    {
                        text: 'Decline',
                        handler: function () {
                            _this.requestOperate(eid, false);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ]
            });
        actionSheet.present();
    };
    ManageEventPage.prototype.requestOperate = function (eid, isApproved) {
        var _this = this;
        var eRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Event').doc(eid);
        if (isApproved) {
            this.userRef.get().then(function (doc) {
                var el = doc.data().eventList;
                el.push(eRef);
                _this.userRef.update('eventList', el);
            });
            eRef.get().then(function (doc) {
                var pl = doc.data().participants;
                pl.push(_this.userRef);
                eRef.update('participants', pl);
            });
        }
        this.reqRef.get().then(function (doc) {
            var reqList = doc.data().eventRequest;
            var idx = reqList.findIndex(function (r) {
                return r.from.id == eid;
            });
            if (idx > -1)
                reqList.splice(idx, 1);
            _this.reqRef.update('eventRequest', reqList);
        });
    };
    ManageEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manage-event',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/manage-event/manage-event.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar no-padding>\n    <div background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n      <div search-bar-bcg>\n        <!-- Header Title -->\n        <h1 ion-text no-margin padding-left search-bar-title>{{data.title}}</h1>\n        <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="search(searchTerm)"></ion-searchbar>\n      </div>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="viewRequest(false)">Events</ion-col>\n        <ion-col (click)="viewRequest(true)">Request</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content elastic-header>\n  <ion-list *ngIf="events != null && listReady">\n\n    <ion-item>Place Holder</ion-item> <!-- Need to delete -->\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col (click)="createEvent()">Create</ion-col>\n          <ion-col (click)="joinEvent()">Join</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    \n    <ion-item *ngIf="displayList.length == 0 && listReady && searchTerm.length != 0"><p>No results for: "{{searchTerm}}"</p></ion-item>\n    <ion-item *ngFor="let e of displayList" outline>\n      <ion-avatar item-start>\n        <ion-icon ios="ios-calendar" md="md-calendar"></ion-icon>\n      </ion-avatar>\n      <h2 item-title>{{e.eventName}}</h2>\n      <h3 item-subtitle text-wrap>{{e.date | date:\'yyyy MMM dd H:mm\'}}</h3>\n      <h4 *ngIf="!displayEvents" text-wrap>{{e.msg}}</h4>\n      <button text-capitalize button-clear ion-button item-end clear (click)="presentActionSheet(e.eventId)"><ion-icon name="more"></ion-icon></button>\n    </ion-item>\n  </ion-list>\n\n  <!-- IDK why is not working after scss -->\n  <ion-fab bottom right>\n    <button ion-fab>\n        <img [src]="eventIcon"/>\n    </button>\n    <ion-fab-list side="top">\n      <button (click)="createEvent()" ion-fab>Create</button>\n      <button (click)="joinEvent()" ion-fab>Join</button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/manage-event/manage-event.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object])
    ], ManageEventPage);
    return ManageEventPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=manage-event.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(70);
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



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.user = {};
        this.user.uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        this.user.email = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.email;
        /* empty info */
        this.user.username = "";
        this.user.firstName = "";
        this.user.lastName = "";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        /* retrieve data from firestore of current user */
        this.getProfile();
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        /* get avatar
        var img = firebase.storage().ref('avatar').child(this.user.uid+'.png');
        console.log(img);
        */
        // get informations
        var doc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        doc.get().then(function (doc) {
            if (doc.exists) {
                _this.user.username = doc.data().username;
                _this.user.firstName = doc.data().firstName;
                _this.user.lastName = doc.data().lastName;
            }
        });
    };
    ProfilePage.prototype.getQr = function () {
        this.navCtrl.push('QrCodePage', this.user.uid);
    };
    ProfilePage.prototype.editProfile = function () {
        this.navCtrl.push('EditProfilePage', this.user);
    };
    ProfilePage.prototype.changePwd = function () {
        var _this = this;
        var auth = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]();
        return auth.sendPasswordResetEmail(this.user.email)
            .then(function () {
            console.log("email sent");
            _this.toast.create({
                message: "Reset link has been sent to, " + _this.user.email,
                duration: 3000
            }).present();
        })
            .catch(function (error) { return console.log(error); });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-avatar block>\n    <img class="circle-pic" \n    src="https://firebasestorage.googleapis.com/v0/b/meetogether-prj666g1.appspot.com/o/avatar%2Fdefault_avatar.png?alt=media&token=c0c88e7e-71cd-4de5-aa78-27573c8f3f2a" />\n  </ion-avatar>\n  {{user.avatar}}\n  <ion-item (click)="getQr()">\n    <ion-icon ios="ios-finger-print" md="md-finger-print"></ion-icon>\n    Show QR Code\n  </ion-item>\n  <ion-item>\n    <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n    {{user.email}}\n  </ion-item>\n  <ion-item>\n    <ion-icon ios="ios-glasses" md="md-glasses"></ion-icon>\n    {{user.username}}\n  </ion-item>\n  <ion-item>\n    <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n    {{user.firstName}} {{user.lastName}}\n  </ion-item>\n  <button ion-button clear block (click)="editProfile()">Edit Profile</button>\n  <button ion-button block (click) = "changePwd()">Change Password</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-friend/add-friend.module": [
		743,
		8
	],
	"../pages/chat/chat.module": [
		740,
		16
	],
	"../pages/create-event/create-event.module": [
		750,
		15
	],
	"../pages/edit-event/edit-event.module": [
		741,
		14
	],
	"../pages/edit-profile/edit-profile.module": [
		744,
		13
	],
	"../pages/friend-list/friend-list.module": [
		751,
		4
	],
	"../pages/home/home.module": [
		326
	],
	"../pages/join-event/join-event.module": [
		745,
		7
	],
	"../pages/login/login.module": [
		752,
		5
	],
	"../pages/logout/logout.module": [
		753,
		17
	],
	"../pages/manage-event/manage-event.module": [
		754,
		2
	],
	"../pages/profile/profile.module": [
		755,
		0
	],
	"../pages/qr-code/qr-code.module": [
		749,
		1
	],
	"../pages/qr-scan/qr-scan.module": [
		738,
		12
	],
	"../pages/register/register.module": [
		746,
		11
	],
	"../pages/reset/reset.module": [
		747,
		10
	],
	"../pages/view-event-participants/view-event-participants.module": [
		742,
		6
	],
	"../pages/view-event/view-event.module": [
		748,
		3
	],
	"../pages/view-profile/view-profile.module": [
		739,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_storage__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_api_config__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_barcode_scanner__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Page Declaration







// Page Module Import



// Angularfire2





// api file



//  Bar code

// Every api key (like firebase access profile...) 
//    should put into './app.api.config.ts'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__["a" /* ManageEventPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__["a" /* FriendListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-friend/add-friend.module#AddFriendPageModule', name: 'AddFriendPage', segment: 'add-friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-event/create-event.module#CreateEventPageModule', name: 'CreateEventPage', segment: 'create-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend-list/friend-list.module#FriendListPageModule', name: 'FriendListPage', segment: 'friend-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/join-event/join-event.module#JoinEventPageModule', name: 'JoinEventPage', segment: 'join-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage-event/manage-event.module#ManageEventPageModule', name: 'ManageEventPage', segment: 'manage-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-code/qr-code.module#QrCodePageModule', name: 'QrCodePage', segment: 'qr-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-scan/qr-scan.module#QrScanPageModule', name: 'QrScanPage', segment: 'qr-scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-event-participants/view-event-participants.module#ViewEventParticipantsPageModule', name: 'ViewEventParticipantsPage', segment: 'view-event-participants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-event/view-event.module#ViewEventPageModule', name: 'ViewEventPage', segment: 'view-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-profile/view-profile.module#ViewProfilePageModule', name: 'ViewProfilePage', segment: 'view-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_18__app_api_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__["HomePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__["a" /* ManageEventPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__["a" /* FriendListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Page declarations for navigations






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        // default navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'log-in' }
        ];
        // using events subscribe to track login/out status
        events.subscribe('login_status', function (isLogin, user) {
            if (isLogin && user != null) {
                _this.pages = [
                    { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
                    { title: 'My Event', component: __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__["a" /* ManageEventPage */], icon: 'calendar' },
                    { title: 'My Friends', component: __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__["a" /* FriendListPage */], icon: 'people' },
                    { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */], icon: 'person' },
                    { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__["a" /* LogoutPage */], icon: 'exit' }
                    //{ title: 'Register', component: RegisterPage}
                ];
            }
            else {
                _this.pages = [
                    { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
                    { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'log-in' }
                ];
            }
        });
        /*
        firebase.initializeApp({
          apiKey: "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
          authDomain: "meetogether-prj666g1.firebaseapp.com",
          databaseURL: "https://meetogether-prj666g1.firebaseio.com/",
          projectId: "meetogether-prj666g1",
          storageBucket: "meetogether-prj666g1.appspot.com",
          messagingSenderId: "719772453281"
        });
        */
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <div header-background-image padding [ngStyle]="{\'background-image\': \'url(../../assets/images/avatar/25.jpg)\'}">\n    </div>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon ios="ios-{{p.icon}}" md="md-{{p.icon}}"></ion-icon>{{p.title}}\n      </button>\n      <button ion-button clear ><ion-icon name="cog">Settings</ion-icon></button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/soul/Workspace/PRJ/m2gteam/MeeTogether/prj666g1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
/* unused harmony export GOOGLE_MAP_KEY */
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
    authDomain: "meetogether-prj666g1.firebaseapp.com",
    databaseURL: "https://meetogether-prj666g1.firebaseio.com",
    projectId: "meetogether-prj666g1",
    storageBucket: "meetogether-prj666g1.appspot.com",
    messagingSenderId: "719772453281"
};
var GOOGLE_MAP_KEY = "";
//# sourceMappingURL=app.api.config.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map