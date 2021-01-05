(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'game';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _right_result_right_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./right-result/right-result.component */ "./src/app/right-result/right-result.component.ts");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "./src/app/scoreboard/scoreboard.component.ts");
/* harmony import */ var _shared_call_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/call-api.service */ "./src/app/shared/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var _my_words_my_words_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-words/my-words.component */ "./src/app/my-words/my-words.component.ts");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/auth-guard.service */ "./src/app/shared/auth-guard.service.ts");














var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'scoreboard', component: _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_8__["ScoreboardComponent"], canActivate: [_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
    { path: 'result', component: _right_result_right_result_component__WEBPACK_IMPORTED_MODULE_7__["RightResultComponent"], canActivate: [_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _right_result_right_result_component__WEBPACK_IMPORTED_MODULE_7__["RightResultComponent"],
                _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_8__["ScoreboardComponent"],
                _my_words_my_words_component__WEBPACK_IMPORTED_MODULE_12__["MyWordsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_shared_call_api_service__WEBPACK_IMPORTED_MODULE_9__["CallApiService"], _shared_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"], _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home\">\n  <div class=\"container-fluid\">\n    <div class=\"top-home\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <a data-toggle=\"modal\" data-target=\"#scoreModal\" class=\"score basicstyle\">SCORE BOARD</a>\n          <a href=\"#\" data-toggle=\"modal\" data-target=\"#regModal\" class=\"start basicstyle\">stART</a>\n        </div>\n        <div class=\"modal\" id=\"scoreModal\">\n          <app-scoreboard></app-scoreboard>\n        </div>  <!-- End The Modal -->\n        <!-- The Modal -->\n        <div class=\"modal\" id=\"regModal\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content conts \">\n              <div class=\"inn-left\">\n                <!-- Modal body -->\n                <div class=\"modal-body\">\n                  <!-- Nav tabs -->\n                  <ul class=\"nav nav-tabs\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link \" data-toggle=\"tab\" href=\"#login\">login</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#signup\">signup</a>\n                    </li>\n                  </ul>\n                  <i class=\"border-login\"><img src=\"./assets/images/border-login.png\"></i>\n                  <!-- Tab panes -->\n                  <div class=\"tab-content\">\n                    <div id=\"login\" class=\"container tab-pane fade \"><br>\n                      <h3 class=\"title-lo\">MEMBER <span>LOGIN</span></h3>\n                      <form #formDataLogin=\"ngForm\" (ngSubmit)=\"loginAccount(formDataLogin)\">\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <!--input here -->\n                              <input type=\"text\" class=\"form-control\" name=\"phone\" ngModel placeholder=\"Phone\" required maxlength=\"18\"><span class=\"addon\"><img\n                              src=\"./assets/images/smartphone.png\"></span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <input type=\"password\" class=\"form-control\" name=\"pin\" ngModel required placeholder=\"Pin\"\n                                     minlength=\"4\" maxlength=\"4\"><span class=\"addon\"><img\n                              src=\"./assets/images/lock.png\"></span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                            <div class=\"start-form\">\n                              <p class=\"login-error\" *ngIf=\"loginError\">{{loginError}}</p>\n                              <button type=\"submit\">start</button>\n                            </div>\n                          </div>\n\n\n                        </div><!--row-->\n\n                      </form>\n                    </div>\n                    <div id=\"signup\" class=\"container tab-pane active\"><br>\n                      <h3 class=\"title-lo\">CREATE <span>YOUR ACCOUNT</span></h3>\n                      <form #formData=\"ngForm\" (ngSubmit)=\"createAccount(formData)\">\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Full Name\" ngModel required\n                                     maxlength=\"30\"\n                                     name=\"fullName\"> <span class=\"addon\"><img\n                              src=\"./assets/images/person.png\"></span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control\" name=\"phone\" ngModel required placeholder=\"Phone\"\n                                      maxlength=\"18\"\n                              ><span class=\"addon\"><img\n                              src=\"./assets/images/smartphone.png\"></span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group2\">\n                              <input type=\"password\" class=\"form-control\" name=\"pin\" ngModel required placeholder=\"Pin\"\n\n                                     minlength=\"4\" maxlength=\"4\"><span class=\"addon\"><img\n                              src=\"./assets/images/lock.png\"></span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group2\">\n                              <input type=\"password\" class=\"form-control\" name=\"rePin\" ngModel required placeholder=\"Re-pin\"\n\n                                     minlength=\"4\" maxlength=\"4\"><span class=\"addon\"><img\n                              src=\"./assets/images/lock.png\"></span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                            <div class=\"start-form\">\n                              <p class=\"login-error\" *ngIf=\"signUpError\">{{signUpError}}</p>\n                              <button type=\"submit\">start</button>\n                            </div>\n                          </div>\n\n\n                        </div><!--row-->\n\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <a><img class=\"logo\" src=\"./assets/images/logo.png\"></a>\n        </div><!--col-md-3-->\n        <div class=\"col-md-9\">\n          <div class=\"slider\">\n            <p class=\"head\">Customize your own success formula</p>\n            <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n\n              <!-- The slideshow -->\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <p>Let’s have some fun with this magical words game; try to collect words as much as you can in\n                        one minute ONLY! The one who will going to collect\n                        the largest number of words will be our champion train your brain and let’s play.</p>\n                    </div><!--col-md-3-->\n                    <div class=\"col-md-9\">\n                      <div class=\"img-slide\">\n                        <img src=\"./assets/images/slider/slide.png\">\n                      </div>\n\n                    </div>\n                  </div>\n                </div><!--carousel-item-->\n                <div class=\"carousel-item\">\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <p>Let’s have some fun with this magical words game; try to collect words as much as you can in\n                        one minute ONLY! The one who will going to collect\n                        the largest number of words will be our champion train your brain and let’s play.</p>\n                    </div><!--col-md-3-->\n                    <div class=\"col-md-9\">\n                      <div class=\"img-slide\">\n                        <img src=\"./assets/images/slider/4.png\">\n                      </div>\n                    </div>\n                  </div>\n                </div><!--carousel-item-->\n                <div class=\"carousel-item \">\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <p>Let’s have some fun with this magical words game; try to collect words as much as you can in\n                        one minute ONLY! The one who will going to collect\n                        the largest number of words will be our champion train your brain and let’s play.</p>\n                    </div><!--col-md-3-->\n                    <div class=\"col-md-9\">\n                      <div class=\"img-slide\">\n                        <img src=\"./assets/images/slider/slide2.png\">\n                      </div>\n                    </div>\n                  </div>\n                </div><!--carousel-item-->\n              </div>\n              <!-- Indicators -->\n              <ul class=\"carousel-indicators\">\n                <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n                <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n              </ul>\n\n              <!-- Left and right controls -->\n              <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\"></span>\n              </a>\n              <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\"></span>\n              </a>\n            </div>\n\n\n          </div>\n        </div><!--col-md-9-->\n        <div class=\"col-md-12\">\n          <img class=\"left\" src=\"./assets/images/logo-left.png\">\n          <img class=\"right\" src=\"./assets/images/logo-down.png\">\n        </div><!--col-md-12-->\n      </div><!--row-->\n\n    </div><!--top-home-->\n  </div><!--container-fluid-->\n</section>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_call_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/call-api.service */ "./src/app/shared/call-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        /*$(this.keybd.nativeElement).keyboard();
        $(this.keybd2.nativeElement).keyboard();
        $(this.keybd3.nativeElement).keyboard();
        $(this.keybd4.nativeElement).keyboard();
        $(this.keybd5.nativeElement).keyboard();
        $(this.keybd6.nativeElement).keyboard();*/
    };
    HomeComponent.prototype.createAccount = function (data) {
        var _this = this;
        var obj = {
            fullName: null,
            phone: null,
            pin: null,
            rePin: null,
        };
        if (obj.pin == obj.rePin && obj.pin.length == 4) {
            this.apiService.signUp(obj).subscribe(function (res) {
                if (res.status == 200) {
                    localStorage.setItem('token', res.access_token);
                    localStorage.setItem('user_id', res.user_id);
                    _this.router.navigate(['/result']);
                }
            }, function (error) {
                _this.signUpError = error.error.error;
            });
        }
        else if (obj.pin.length != 4) {
            this.signUpError = 'Pin must be 4 digits!';
        }
        else {
            this.signUpError = 'Pin does not match re-pin!';
        }
    };
    HomeComponent.prototype.loginAccount = function (data) {
        var _this = this;
        var obj = {
            phone: null,
            pin: null
        };
        this.apiService.login(obj).subscribe(function (res) {
            if (res.status == 200) {
                localStorage.setItem('token', res.access_token);
                localStorage.setItem('user_id', res.user_id);
                _this.router.navigate(['/result']);
            }
        }, function (error) {
            _this.loginError = error.error.error;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_call_api_service__WEBPACK_IMPORTED_MODULE_2__["CallApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/my-words/my-words.component.css":
/*!*************************************************!*\
  !*** ./src/app/my-words/my-words.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXdvcmRzL215LXdvcmRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/my-words/my-words.component.html":
/*!**************************************************!*\
  !*** ./src/app/my-words/my-words.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <!-- Modal Header -->\n    <div class=\"modal-header\">\n      <a class=\"close close-word\" data-dismiss=\"modal\" (click)=\"close()\"><img src=\"./assets/images/close.png\"></a>\n    </div>\n\n    <!-- Modal body -->\n    <div class=\"modal-body\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n          </div><!--col-md-12-->\n        <div class=\"col-md-6\">\n          <div class=\"left-box\">\n            <div class=\"inn-left\">\n            <h3 class=\"tit\">WORDS</h3>\n            <p class=\"det dets\">These are the words you’ve to collect, be ready and read it well.</p>\n            <div class=\"scrollbar\" id=\"style-2\">\n              <ul class=\"list-scroll\">\n                <li *ngFor=\"let word of words\">{{word}}</li>\n              </ul>\n              <div class=\"force-overflow\"></div>\n            </div>\n          </div>\n          </div><!--left-box-->\n        </div><!--col-md-6-->\n        <div class=\"col-md-6\">\n          <div class=\"left-box\">\n              <div class=\"inn-left\">\n            <h3 class=\"tit tit-word\">Score</h3>\n            <p class=\"det dets\">These are the words you’ve collected.</p>\n            <div class=\"scrollbar\" id=\"style-2\">\n              <ul class=\"list-scroll\">\n                <li *ngFor=\"let element of myWords\">{{element.word}}</li>\n              </ul>\n              <div class=\"force-overflow\"></div>\n            </div>\n            </div>\n          </div><!--left-box-->\n        </div><!--col-md-6-->\n      </div><!--row-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-words/my-words.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-words/my-words.component.ts ***!
  \************************************************/
/*! exports provided: MyWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWordsComponent", function() { return MyWordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyWordsComponent = /** @class */ (function () {
    function MyWordsComponent() {
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.words = [];
        this.myWords = [];
        this.firstEnter = true;
    }
    MyWordsComponent.prototype.ngOnInit = function () {
    };
    MyWordsComponent.prototype.close = function () {
        this.closeModal.emit(this.firstEnter);
        this.firstEnter = false;
        console.log(this.myWords);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MyWordsComponent.prototype, "closeModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MyWordsComponent.prototype, "words", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MyWordsComponent.prototype, "myWords", void 0);
    MyWordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-words',
            template: __webpack_require__(/*! ./my-words.component.html */ "./src/app/my-words/my-words.component.html"),
            styles: [__webpack_require__(/*! ./my-words.component.css */ "./src/app/my-words/my-words.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyWordsComponent);
    return MyWordsComponent;
}());



/***/ }),

/***/ "./src/app/right-result/right-result.component.css":
/*!*********************************************************!*\
  !*** ./src/app/right-result/right-result.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LXJlc3VsdC9yaWdodC1yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/right-result/right-result.component.html":
/*!**********************************************************!*\
  !*** ./src/app/right-result/right-result.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"result\">\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <a data-toggle=\"modal\" data-target=\"#myModal2\" class=\"score basicstyle\">SCORE BOARD</a>\n      </div><!--col-md-2-->\n      <!-- The Modal -->\n      <div class=\"modal\" id=\"myModal2\">\n        <app-scoreboard></app-scoreboard>\n      </div>  <!-- End The Modal -->\n\n      <div class=\"col-md-8\">\n        <div class=\"count\">\n          <ul>\n           <li><img class=\"img-count\" src=\"./assets/images/count.png\"> </li>\n           <li class=\"counts\">\n             <i class=\"top-count\"><img src=\"./assets/images/border.png\"></i>\n              <span>{{timer.mins}}</span>:<span>{{timer.secs}}</span>\n             <i class=\"bottom-count\"><img src=\"./assets/images/border2.png\"></i>\n            </li>\n            <p class=\"time\">time</p>\n\n          </ul>\n\n\n\n        </div><!--count-->\n      </div><!--col-md-8-->\n\n      <div class=\"col-md-2\">\n        <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"start basicstyle\">words</a>\n      </div><!--col-md-2-->\n      <!-- The Modal -->\n      <div class=\"modal\" id=\"myModal\" data-backdrop=\"static\" data-keyboard=\"false\">\n        <app-my-words (closeModal)=\"toggleModal($event)\" [words]=\"words\" [myWords]=\"myWords\"></app-my-words>\n      </div>  <!-- End The Modal -->\n\n      <div class=\"col-md-12\">\n        <div class=\"plays\">\n          <ul *ngFor=\"let row of rows; let r = index\">\n            <li *ngFor=\"let col of cols; let c = index\" (click)=\"keyClicked(r, c)\" [ngClass]=\"getClass(r, c)\">{{getKey(r, c)}}</li>\n          </ul>\n        </div><!--plays-->\n      </div><!--col-md-8-->\n\n      <div class=\"col-md-7 offset-md-3\" *ngIf=\"collectedWordArray.length > 0\">\n        <div class=\"down-play\">\n          <ul>\n            <li *ngFor=\"let key of collectedWordArray\" [ngStyle]=\"{'background-color': key.status ? '' : 'red' }\">{{key.char}}</li>\n\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-1\" *ngIf=\"collectedWordArray.length > 0\">\n        <div class=\"down-play\">\n          <ul>\n            <li (click)=\"clearKey()\">clear</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-12\" *ngIf=\"showSuccess\">\n        <p class=\"success-word\"><span>{{collectedWord}}</span> successfully added to your words.</p>\n      </div>\n\n      <div class=\"icons\">\n        <a routerLink=\"/home\"><img class=\"home-icon\" src=\"./assets/images/home.png\"></a>\n        <a (click)=\"logout()\"> <img class=\"user-icon\" src=\"./assets/images/user.png\"> </a>\n      </div>\n\n    </div><!--row-->\n  </div><!--container-fluid-->\n</section>\n"

/***/ }),

/***/ "./src/app/right-result/right-result.component.ts":
/*!********************************************************!*\
  !*** ./src/app/right-result/right-result.component.ts ***!
  \********************************************************/
/*! exports provided: RightResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightResultComponent", function() { return RightResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_call_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/call-api.service */ "./src/app/shared/call-api.service.ts");



var RightResultComponent = /** @class */ (function () {
    function RightResultComponent(apiService) {
        this.apiService = apiService;
        this.rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        this.cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        this.keys = [];
        this.collectedWordArray = [];
        this.words = [];
        this.myWords = [];
        this.showSuccess = false;
        this.scoreBoard = [];
        this.timer = {
            mins: '01',
            secs: '00'
        };
    }
    RightResultComponent.prototype.ngOnInit = function () {
        this.user_id = localStorage.getItem('user_id');
        this.toggleModal();
        this.initKeys();
        this.initWords();
        this.initMyWords();
        this.initScoreBoard();
    };
    RightResultComponent.prototype.initScoreBoard = function () {
        var _this = this;
        this.apiService.getScoreBoard().subscribe(function (res) {
            if (res.status == 200) {
                _this.scoreBoard = res.data;
                _this.scoreBoard.forEach(function (element) {
                    if (element.user_id == _this.user_id) {
                        _this.userScore = element.scor;
                    }
                });
            }
        }, function (error) {
            console.log(error.error);
        });
    };
    RightResultComponent.prototype.initKeys = function () {
        var _this = this;
        this.apiService.getKeys().subscribe(function (res) {
            _this.keys = res.data;
        });
    };
    RightResultComponent.prototype.initWords = function () {
        var _this = this;
        this.apiService.getWords().subscribe(function (res) {
            _this.words = res.data;
        });
    };
    RightResultComponent.prototype.initMyWords = function () {
        var _this = this;
        this.apiService.getMyWords(this.user_id).subscribe(function (res) {
            _this.myWords = res.data;
        }, function (error) {
            console.log(error.error);
        });
    };
    RightResultComponent.prototype.toggleModal = function (event) {
        $('#myModal').modal('toggle');
        $('.modal-backdrop').remove();
        if (event) {
            this.startTimer();
        }
    };
    RightResultComponent.prototype.startTimer = function () {
        var _this = this;
        this.timer.mins = '00';
        this.timer.secs = '59';
        var t = setInterval(function () {
            _this.timer.secs = (+_this.timer.secs - 1).toString();
            if (+_this.timer.secs == 0) {
                clearInterval(t);
                $('#myModal').modal('hide');
                $('#myModal2').modal('hide');
                _this.apiService.logout();
            }
        }, 1000);
    };
    RightResultComponent.prototype.logout = function () {
        this.apiService.logout();
    };
    RightResultComponent.prototype.getKey = function (r, c) {
        if (this.keys.length > 0) {
            var key = this.keys.filter(function (obj) { return obj.x == r && obj.y == c; });
            return key[0].char;
        }
    };
    RightResultComponent.prototype.getClass = function (r, c) {
        if (this.keys.length > 0) {
            var key = this.keys.filter(function (obj) { return obj.x == r && obj.y == c; });
            return key[0].class;
        }
    };
    RightResultComponent.prototype.keyClicked = function (r, c) {
        var _this = this;
        this.showSuccess = false;
        this.collectedWord = '';
        var key = this.keys.filter(function (obj) { return obj.x == r && obj.y == c; });
        if (key[0].class != 'disabled') {
            this.collectedWordArray.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, key[0], { status: false }));
        }
        this.collectedWordArray.forEach(function (element) {
            _this.collectedWord += element.char;
        });
        this.words.forEach(function (word) {
            if (word.toLowerCase().search(_this.collectedWord) != -1) {
                _this.collectedWordArray[_this.collectedWordArray.length - 1].status = true;
            }
        });
        this.words.forEach(function (word) {
            if (word.toLowerCase() == _this.collectedWord) {
                _this.showSuccess = true;
                _this.collectedWordArray = [];
                var user_id = localStorage.getItem('user_id');
                var obj = {
                    user_id: user_id,
                    word: _this.collectedWord
                };
                _this.apiService.setWord(obj).subscribe(function (res) {
                    if (res.status == 200) {
                        _this.initMyWords();
                    }
                });
                var myWordsFilter = _this.myWords.filter(function (obj) { return obj.word.toLowerCase() == _this.collectedWord; });
                if (myWordsFilter.length == 0) {
                    var obj_1 = {
                        user_id: user_id,
                        scor: (+_this.userScore) + (+_this.collectedWord.length)
                    };
                    console.log('score', obj_1.scor);
                    _this.apiService.setScore(obj_1).subscribe(function (res) {
                        _this.initScoreBoard();
                    });
                }
            }
        });
    };
    RightResultComponent.prototype.clearKey = function () {
        this.collectedWordArray.splice(-1, 1);
    };
    RightResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right-result',
            template: __webpack_require__(/*! ./right-result.component.html */ "./src/app/right-result/right-result.component.html"),
            styles: [__webpack_require__(/*! ./right-result.component.css */ "./src/app/right-result/right-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_call_api_service__WEBPACK_IMPORTED_MODULE_2__["CallApiService"]])
    ], RightResultComponent);
    return RightResultComponent;
}());



/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlYm9hcmQvc2NvcmVib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.html":
/*!******************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content modal-content2\">\n      <div class=\"inn-left\">\n          <img class=\"stars\" src=\"./assets/images/starts.png\">\n    <!-- Modal Header -->\n    <div class=\"modal-header\">\n      <a class=\"close\" data-dismiss=\"modal\"><img src=\"./assets/images/close.png\"></a>\n    </div>\n\n    <!-- Modal body -->\n    <div class=\"modal-body\">\n      <p class=\"det\">The final score of all the Attendees.</p>\n      <div class=\"scrollbar\" id=\"style-1\">\n        <div class=\"row box\" *ngFor=\"let item of scoreBoard; let i = index\">\n          <div class=\"col-md-2 \">\n            <img class=\"score-img\" src=\"./assets/images/left-img.png\">\n          </div><!--col-md-2-->\n          <div class=\"col-md-7\">\n            <h3 class=\"head-dr\">{{item?.user?.fullName}}</h3>\n            <div class=\"progress\">\n              <div class=\"progress-bar w-75\" role=\"progressbar\" [ngStyle]=\"{'width': item.scor? (item.scor*100/256) + '%': ''}\"></div>\n            </div>\n          </div><!--col-md-7-->\n          <div class=\"col-md-2\">\n            <p class=\"score-num\">{{item.scor}}</p>\n          </div><!--col-md-2-->\n        </div><!--row-->\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.ts ***!
  \****************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_call_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/call-api.service */ "./src/app/shared/call-api.service.ts");



var ScoreboardComponent = /** @class */ (function () {
    function ScoreboardComponent(apiService) {
        this.apiService = apiService;
        this.scoreBoard = [];
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
        this.initScoreBoard();
    };
    ScoreboardComponent.prototype.initScoreBoard = function () {
        var _this = this;
        this.apiService.getScoreBoard().subscribe(function (res) {
            if (res.status == 200) {
                _this.scoreBoard = res.data;
            }
        }, function (error) {
            console.log(error.error);
        });
    };
    ScoreboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scoreboard',
            template: __webpack_require__(/*! ./scoreboard.component.html */ "./src/app/scoreboard/scoreboard.component.html"),
            styles: [__webpack_require__(/*! ./scoreboard.component.css */ "./src/app/scoreboard/scoreboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_call_api_service__WEBPACK_IMPORTED_MODULE_2__["CallApiService"]])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _call_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-api.service */ "./src/app/shared/call-api.service.ts");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService) {
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        this.token = localStorage.getItem('token');
        if (this.token) {
            return true;
        }
        else {
            this.authService.logout();
            return false;
        }
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_call_api_service__WEBPACK_IMPORTED_MODULE_2__["CallApiService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/call-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/call-api.service.ts ***!
  \********************************************/
/*! exports provided: CallApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallApiService", function() { return CallApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CallApiService = /** @class */ (function () {
    function CallApiService(http, config, router) {
        this.http = http;
        this.config = config;
        this.router = router;
    }
    CallApiService.prototype.signUp = function (obj) {
        return this.http.post(this.config.baseURL() + 'register', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }, function (err) {
            throw err;
        }));
    };
    CallApiService.prototype.login = function (obj) {
        return this.http.post(this.config.baseURL() + 'login', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }, function (err) {
            throw err;
        }));
    };
    CallApiService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/home']);
    };
    CallApiService.prototype.getKeys = function () {
        return this.http.get('./assets/keys.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CallApiService.prototype.getWords = function () {
        return this.http.get('./assets/words.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CallApiService.prototype.getScoreBoard = function () {
        return this.http.get(this.config.baseURL() + 'User/getAllScors').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CallApiService.prototype.getMyWords = function (id) {
        return this.http.get(this.config.baseURL() + 'User/getMyWord/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }, function (err) {
            throw err;
        }));
    };
    CallApiService.prototype.getAllWords = function () {
        return this.http.get(this.config.baseURL() + 'User/1111111').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }, function (err) {
            throw err;
        }));
    };
    CallApiService.prototype.setWord = function (obj) {
        return this.http.post(this.config.baseURL() + 'User/setWord', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }, function (err) {
            throw err;
        }));
    };
    CallApiService.prototype.setScore = function (obj) {
        return this.http.post(this.config.baseURL() + 'User/setScor', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }, function (err) {
            throw err;
        }));
    };
    CallApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CallApiService);
    return CallApiService;
}());



/***/ }),

/***/ "./src/app/shared/config.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.prototype.baseURL = function () {
        // return 'http://doctor.events.brandmark-corp.com/';
        // return 'http://game.elabs-corp.com/api/api/';
        return 'http://localhost/formula_game/public/api/';
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORKSPACE\COMPANIES\Elabs\formula_game-front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map