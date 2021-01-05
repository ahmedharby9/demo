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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<ng-http-loader [spinner]=\"spinkit.skCubeGrid\"></ng-http-loader>\n\n\n\n"

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
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.spinkit = ng_http_loader__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speakers/speakers.component */ "./src/app/speakers/speakers.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./download/download.component */ "./src/app/download/download.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_pipes_speakers_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/pipes/speakers.pipe */ "./src/app/shared/pipes/speakers.pipe.ts");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-account/my-account.component */ "./src/app/my-account/my-account.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"],
                _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_7__["SpeakersComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _download_download_component__WEBPACK_IMPORTED_MODULE_14__["DownloadComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _shared_pipes_speakers_pipe__WEBPACK_IMPORTED_MODULE_17__["SpeakersPipe"],
                _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"],
                _master_master_component__WEBPACK_IMPORTED_MODULE_21__["MasterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_19__["SlickModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([
                    { path: 'home', component: _master_master_component__WEBPACK_IMPORTED_MODULE_21__["MasterComponent"] },
                    { path: 'myAccount', component: _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"] },
                    { path: '**', component: _master_master_component__WEBPACK_IMPORTED_MODULE_21__["MasterComponent"] }
                ], {
                    useHash: false,
                    anchorScrolling: "enabled",
                    onSameUrlNavigation: "reload",
                    enableTracing: false,
                    scrollPositionRestoration: "enabled"
                }),
                ng_http_loader__WEBPACK_IMPORTED_MODULE_18__["NgHttpLoaderModule"].forRoot()
            ],
            providers: [_shared_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _shared_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/download/download.component.css":
/*!*************************************************!*\
  !*** ./src/app/download/download.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/download/download.component.html":
/*!**************************************************!*\
  !*** ./src/app/download/download.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"download\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 lg-offset-2\">\n          <h3 class=\"head-dow\"> get the 5 CME hours</h3>\n          <p class=\"des\">For Better Meeting experience please download the app.</p>\n          <p class=\"des2\">When you're good to go</p>\n          <a href=\"../../assets/apps/android/RevoladeEvent.apk\" class=\"googleplay\" download><img src=\"../../assets/images/play.png\"></a>\n          <a href=\"itms-services://?action=download-manifest&url=https://dl.dropbox.com/s/YourURLHere/manifest.plist\" class=\"appstore\"><img src=\"../../assets/images/app-store.png\"></a>\n      </div>\n    </div>\n  </div><!--container-->\n</section><!--download-->\n"

/***/ }),

/***/ "./src/app/download/download.component.ts":
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DownloadComponent = /** @class */ (function () {
    function DownloadComponent() {
    }
    DownloadComponent.prototype.ngOnInit = function () {
    };
    DownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.component.html */ "./src/app/download/download.component.html"),
            styles: [__webpack_require__(/*! ./download.component.css */ "./src/app/download/download.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 300px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"contact-us\" class=\"footer container-fluid\">\n  <div >\n    <!--<div class=\"row\">-->\n<!--<div class=\"col-md-12\">-->\n\n      <div #mapElement class=\"map\"></div>\n<!--</div>-->\n\n\n      <!--<div class=\"col-md-3\">-->\n        <!--<div class=\"foot\">-->\n          <!--<p></p>-->\n          <!--<a href=\"#\"></a>-->\n        <!--</div>-->\n      <!--</div>&lt;!&ndash;col-md-2&ndash;&gt;-->\n      <!--<div class=\"col-md-3\">-->\n        <!--<div class=\"foot\">-->\n          <!--<ul>-->\n            <!--<li></li>-->\n            <!--<li></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n      <!--</div>&lt;!&ndash;col-md-2&ndash;&gt;-->\n\n      <!--<div class=\"col-md-3\">-->\n        <!--<div class=\"foot\">-->\n          <!--<p></p>-->\n          <!--<a href=\"#\"></a>-->\n        <!--</div>-->\n      <!--</div>&lt;!&ndash;col-md-2&ndash;&gt;-->\n      <!--<div class=\"col-md-3\">-->\n        <!--<div class=\"foot\">-->\n          <!--<ul>-->\n            <!--<li><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>-->\n            <!--<li><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>-->\n            <!--<li><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n      <!--</div>&lt;!&ndash;col-md-2&ndash;&gt;-->\n\n    <!--</div>-->\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.ngAfterViewInit = function () {
        // this.loadMap();
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: 21.6019035, lng: 39.1103151 },
            zoom: 10
        });
        // let marker = this.map.addMarkerSync({
        //   title: 'Noma',
        //   icon: 'gray',
        //   animation: 'DROP',
        //   position: {
        //     lat: 21.6019035,
        //     lng: 39.1103151
        //   }
        //
        // });
        var _this = this.map;
        var vv = new google.maps.Marker({
            position: {
                lat: 21.6019035,
                lng: 39.1103151
            },
            map: _this,
            title: 'Hello World!'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FooterComponent.prototype, "mapElement", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slick-slide img {\n  height: 530px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGljay1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDUzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"gallery\" class=\"schedule\" *ngIf=\"allImages.length>0\">\n  <div class=\"container\">\n    <h3>gallery</h3>\n    <div class=\"row speaker-box\">\n      <div class=\"col-md-6 text-box\">\n\n\n\n        <div class=\" box-gallery\">\n          <h4 class=\"tits\">Moments of pleasures</h4>\n          <p>Thank you for being a part of our journey.\n          </p>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 galler-in\" *ngFor=\"let image of allImages\">\n            <img [src]=\"'http://revoladesaudievent.com/api/Uploads/gallery/'+image.imageName\">\n          </div>\n\n        </div><!--row-->\n      </div><!--col-md-6-->\n      <div class=\"col-md-6\">\n        <ngx-slick class=\"carousel\" [config]=\"config\" #slickModal=\"slick-modal\" >\n          <div ngxSlickItem *ngFor=\"let image of allImages\">\n            <img [src]=\"'http://revoladesaudievent.com/api/Uploads/gallery/'+image.imageName\" alt=\"\" width=\"100%\">\n          </div>\n        </ngx-slick>\n      </div><!--col-md-6-->\n\n    </div><!--row-->\n  </div><!--container-->\n</section><!--schedule-->\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(callApi) {
        this.callApi = callApi;
        this.allImages = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callApi.getGallery().subscribe(function (res) {
            _this.allImages = res.data;
        });
        this.config = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  overflow: auto !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light  \" data-spy=\"affix\" data-offset-top=\"197\" id=\"heads\">\n\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"../../assets/images/logo.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link page-scroll\" (click)=\"goToLocation('home')\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link page-scroll\" (click)=\"goToLocation('schedule')\">Schedule</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link page-scroll\" (click)=\"goToLocation('speakers')\">Speakers</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link page-scroll\" (click)=\"goToLocation('gallery')\">Gallery</a>\n        </li>\n        <!--<li class=\"nav-item\">-->\n        <!--<a class=\"nav-link page-scroll\" (click)=\"goToLocation('contact-us')\">Contact Us</a>-->\n        <!--</li>-->\n\n      </ul>\n    </div>\n    <!--<div class=\"signup\" (click)=\"menuClicked('sign-up')\" ><img src=\"../../assets/images/sign-up.png\">sign up</div>-->\n\n    <!-- <div class=\"signup\" (click)=\"openSignup()\" data-toggle=\"modal\" data-target=\"#myModal\"><img src=\"../../assets/images/sign-up.png\">sign up\n     </div>-->\n    <div *ngIf=\"_userInfo == null\" class=\"signup \" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\"\n         data-keyboard=\"false\"><img src=\"../../assets/images/sign-up.png\">sign up\n    </div>\n    <div *ngIf=\"_userInfo == null\" class=\"signup right-sign\" data-toggle=\"modal\" data-target=\"#myModal2\"\n         data-backdrop=\"static\" data-keyboard=\"false\"><img src=\"../../assets/images/sign-up.png\">login\n    </div>\n\n    <div *ngIf=\"_userInfo \" class=\"signup open-button \" routerLink=\"/myAccount\"><img\n      src=\"../../assets/images/images.jpg\">{{_userInfo?.name}}\n    </div>\n    <div *ngIf=\"_userInfo \" class=\"signup right-sign \" (click)=\"logout()\">Logout\n    </div>\n\n  </div><!--container-->\n  <!-- The Modal -->\n  <div class=\"modal  fade\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body signpage\">\n          <div class=\"sign-content\">\n            <h2>welcome to</h2>\n            <img src=\"../../assets/images/logo-sign.png\">\n            <form (ngSubmit)=\"onSignUp(signUpForm)\" #signUpForm=\"ngForm\">\n              <div class=\"form-group\">\n                <label>Full Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Full Name\" #fullName=\"ngModel\"\n                       name=\"fullName\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label>Email </label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" #email=\"ngModel\" name=\"email\" ngModel\n                       required>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\" name=\"password\"\n                       ngModel required>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"agree\">\n                  <input type=\"checkbox\" class=\"checks\" #agree=\"ngModel\" ngModel name=\"agree\" required>\n                  <span> i Agree with <a href=\"#\">Terms & Conditions</a></span></label>\n              </div>\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"buttonstyle\" [disabled]=\"!signUpForm.valid\">Register Now</button>\n              </div>\n\n            </form>\n          </div><!--sign-content-->\n          <div class=\"alert\" *ngIf=\"showAlert\" [ngClass]=\"alert.success? 'alert-success': 'alert-danger'\">\n            <strong>{{alert.title}}</strong> {{alert.message}}\n          </div>\n\n\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n\n\n  <!-- The Modal 2-->\n  <div class=\"modal  fade\" id=\"myModal2\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body signpage\">\n          <div class=\"sign-content\">\n            <h2>welcome to</h2>\n            <img src=\"../../assets/images/logo-sign.png\">\n            <form (ngSubmit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\n              <div class=\"form-group\">\n                <label>Email </label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" #email=\"ngModel\" name=\"email\" ngModel\n                       required>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\" name=\"password\"\n                       ngModel required>\n              </div>\n\n              <!--<div class=\"form-group\">-->\n              <!--<label class=\"agree\">-->\n              <!--<input type=\"checkbox\" class=\"checks\" #agree=\"ngModel\" ngModel name=\"agree\" required>-->\n              <!--<span> remember your password </span></label>-->\n              <!--</div>-->\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"buttonstyle\" [disabled]=\"!loginForm.valid\">login Now</button>\n              </div>\n\n            </form>\n          </div><!--sign-content-->\n          <div class=\"alert\" *ngIf=\"showAlert\" [ngClass]=\"alert.success? 'alert-success': 'alert-danger'\">\n            <strong>{{alert.title}}</strong> {{alert.message}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!----DOCTOR INFO MODAL----->\n  <div class=\"modal  fade\" id=\"DocInfo\" data-backdrop=\"static\" data-keyboard=\"false\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n\n        <!-- Modal body -->\n        <div class=\"modal-body signpage\">\n          <div class=\"sign-content\">\n            <h2>welcome to</h2>\n            <img src=\"../../assets/images/logo-sign.png\">\n            <form (ngSubmit)=\"onAddDoctor(doctorForm)\" #doctorForm=\"ngForm\">\n              <div class=\"form-group\">\n                <label>Card Number</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Card Number\" #cardId=\"ngModel\"\n                       name=\"cardId\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label>Specialization</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Specialization\" #specialization=\"ngModel\"\n                       name=\"specialization\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label>Degree</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Degree\" #degree=\"ngModel\"\n                       name=\"degree\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label>Company Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" #companyName=\"ngModel\"\n                       name=\"companyName\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label>Phone Number</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" #phone=\"ngModel\"\n                       name=\"phone\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label>Expired Date</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Expired Date\" #expiredDate=\"ngModel\"\n                       name=\"expiredDate\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"buttonstyle\" [disabled]=\"!doctorForm.valid\">You are done</button>\n              </div>\n\n            </form>\n          </div><!--sign-content-->\n          <div class=\"alert\" *ngIf=\"showAlert\" [ngClass]=\"alert.success? 'alert-success': 'alert-danger'\">\n            <strong>{{alert.title}}</strong> {{alert.message}}\n          </div>\n\n\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n  <!----DOCTOR INFO MODAL----->\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.showAlert = false;
        this._userInfo = null;
        this.alert = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _data = localStorage.getItem('userInfo');
        this._userInfo = JSON.parse(_data);
    };
    HeaderComponent.prototype.onSignUp = function (signUpForm) {
        var _this = this;
        var obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, signUpForm.value, { userType: 1, event_id: 1 });
        this.apiService.signUp(obj).subscribe(function (res) {
            if (res.success == false) {
                _this.alert = {
                    message: res.message[0],
                    title: 'Failed!',
                    success: false
                };
                _this.showAlert = true;
                setTimeout(function () {
                    _this.showAlert = false;
                }, 3000);
            }
            else if (res.status == 200) {
                _this.doctor_id = res.data.doctor.id;
                _this.user_id = res.data.doctor.user_id;
                _this.alert = {
                    message: 'Successfully Registered',
                    title: 'Success!',
                    success: true
                };
                _this.showAlert = true;
                setTimeout(function () {
                    _this.showAlert = false;
                    $('#myModal').modal('hide');
                    $('#DocInfo').modal('show');
                }, 1000);
                signUpForm.reset();
            }
        });
    };
    HeaderComponent.prototype.goToLocation = function (fragment) {
        $('#myModal').modal('hide');
        $('.navbar-collapse').collapse('hide');
        this.router.navigate(['./'], { fragment: fragment });
    };
    HeaderComponent.prototype.openSignup = function () {
        this.signupForm.reset();
        $('#myModal').modal('show');
        $('.navbar-collapse').collapse('hide');
    };
    HeaderComponent.prototype.onLogin = function (data) {
        var _this = this;
        if (data.invalid) {
            this.alert = {
                message: 'Invalid username or password.',
                title: 'Failed!',
                success: false
            };
            this.showAlert = true;
            setTimeout(function () {
                _this.showAlert = false;
            }, 3000);
            return;
        }
        var userData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data.value, { userType: 1, event_id: 1 });
        this.apiService.login(userData, 1).subscribe(function (res) {
            _this._userInfo = res;
            localStorage.setItem('userInfo', JSON.stringify(res));
            localStorage.setItem('token', res.access_token);
            _this.doctor_id = res.doctor_id;
            _this.user_id = res.user_id;
            _this.alert = {
                message: 'Successful Login',
                title: 'Success!',
                success: true
            };
            _this.showAlert = true;
            if (res.doctor_cardId == null) {
                setTimeout(function () {
                    _this.showAlert = false;
                    $('#myModal2').modal('hide');
                    $('#DocInfo').modal('show');
                }, 2000);
            }
            else {
                _this.router.navigate(['/myAccount']);
                setTimeout(function () {
                    _this.showAlert = false;
                    $('#myModal2').modal('hide');
                }, 3000);
            }
        });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
        this._userInfo = null;
        this.router.navigate(['/']);
    };
    HeaderComponent.prototype.onAddDoctor = function (doctorForm) {
        var _this = this;
        var token = localStorage.getItem('token');
        console.log('token', token);
        var obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doctorForm.value, { event_id: 1, userType: 1, doctor_id: this.doctor_id, user_id: this.user_id });
        this.apiService.registerDoctor(obj).subscribe(function (res) {
            if (res.status == 200) {
                _this.alert = {
                    message: 'Successfully Registered',
                    title: 'Success!',
                    success: true
                };
                _this.showAlert = true;
                setTimeout(function () {
                    _this.showAlert = false;
                    $('#DocInfo').modal('hide');
                    if (token) {
                        _this.router.navigate(['/myAccount']);
                    }
                    else {
                        $('#myModal2').modal('show');
                    }
                }, 2000);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signUpForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], HeaderComponent.prototype, "signupForm", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/master.component.html":
/*!**********************************************!*\
  !*** ./src/app/master/master.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\n<app-schedule></app-schedule>\n<app-speakers></app-speakers>\n<app-gallery></app-gallery>\n<app-download></app-download>\n"

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/my-account/my-account.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-account/my-account.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-page {\n    float: left;\n    width: 100%;\n    padding: 150px 0;\n    text-align: center;\n}\n.nav {\n    width: 100%;\n    text-align: center;\n    display: block;\n}\n.nav-item{\n display: inline-block;\n margin-left: 10px;\n}\n.nav-pills .nav-link {\n    padding: 15px 100px;\n    font-size: 17px;\n    letter-spacing: .04em;\n    text-transform: uppercase;\n    background-color: #f7f7f7;\n    color: #492f91;\n    border-radius: 25px;\n    margin-bottom: 10px;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show>.nav-link {\n    background-color: #492f91;\n    color: #fff;\n}\n.tab-content {\n    padding-top: 30px;\n}\ntextarea {\n    width: 100%;\n    resize: none;\n    padding: 15px;\n    border-radius: 25px;\n}\n.send-button {\n    float: left;\n    width: 100%;\n    text-align: center;\n    padding-top: 20px;\n}\n.send-button button {\n    background-color: #492f91;\n    color: #fff;\n    padding: 10px 40px;\n    border-radius: 25px;\n    border: none;\n    font-size: 17px;\n    text-transform: capitalize;\n}\n.send-button button:disabled{\n  opacity: .6;\n}\n.box-ask {\n    margin-top: 20px;\n}\n.media {\n    display: inline-flex;\n    margin-top: 40px;\n    width: 100%;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 10px;\n}\n.media:last-child {\n    border-bottom:none;\n}\n.media img {\n    width: 60px;\n}\n.rightspan {\n    float: right;\n    color: #C7BABE;\n    font-size: 13px;\n}\n.rightspan small {\n    margin-top: 10px;\n    display: inline-block;\n}\n.rightspan a{\n   background: #155CC7;\n   text-transform: uppercase;\n   padding: 7px;\n   color: #fff;\n   margin-left: 10px;\n   float: right;\n\n}\n.rightspan .pending {\n    background: #808080;\n\n}\na:hover,\na:focus,\na:active {\n    text-decoration: none;\n}\n.media-body h4 {\n    color:#492F91;\n    font-size: 18px;\n    text-transform: capitalize;\n}\n.media-body h4 ,.media-body p{\ntext-align: left;\n}\n.det-tab {\n    color:#333;\n    font-size:14px;\n    text-transform: capitalize;\n    text-align: left;\n    padding-top: 30px;\n    padding-left: 20px;\n}\n.list-tab {\n    text-align: left;\n    margin:0;\n    padding-left: 20px;\n}\n.list-tab   li {\n        padding: 20px 0;\n        color: #43425D;\n        font-size: 13px;\n        text-transform: capitalize;\n        float: left;\n        width: 100%;\n        list-style: none;\n        opacity: .8;\n    }\n.list-tab   li  span {\n            width: 30px;\n            height: 30px;\n            line-height: 30px;\n            border-radius: 50%;\n            background: #43425D;\n            color: #fff;\n            float: left;\n            text-align: center;\n            font-size: 13px;\n            margin-right: 10px;\n          }\n.list-tab   .active-vote {\n            color: #333;\n            opacity: 1;\n\n        }\n.res {\n            padding: 20px;\n            float: left;\n            width: 100%;\n        }\n.result{\n                border: 1px solid #ccc;\n                padding: 10px;\n                position: relative;\n                width: 100%;\n                text-align: center;\n                border-radius: 8px;\n                margin: 50px 0;\n            }\n.result  img {\n                    width: 60px;\n                    height: 60px;\n                    border-radius: 50%;\n                    margin-top: -50px;\n                }\n.result  p {\n                    text-align: center;\n                    font-size: 14px;\n                    color:#333;\n                    margin-top: 0;\n                    padding-bottom: 10px;\n                    text-transform: capitalize;\n\n\n                }\n.rates {\n            width: 60%;\n            height: 200px;\n            position: relative;\n            text-align: center;\n            margin:45px auto 10px auto;\n        }\n.rates   div {\n                width: 100%;\n                color: #fff;\n                position: absolute;\n                bottom: 0;\n                border-top-left-radius: 35px;\n                border-top-right-radius: 35px;\n        }\n.rates   div   span {\n                    font-size: 20px;\n                    font-weight: bold;\n                    margin-top: -40px;\n                    position:absolute;\n                   width: 100%;\n                   text-align: center;\n                   left: 0;\n                }\n.inn {\n                background:#333;}\n.inn   span {\n                    color:#333;\n                }\n.inn2 {\n                background:#492F91;\n            }\n.inn2   span {\n                    color:#492F91;\n                }\n.inn3 {\n                background: #FD9615;\n            }\n.inn3   span {\n                    color:#FD9615;\n                }\n.numbers {\n            background: #333;\n            width: 45px;\n            height: 45px;\n            border-radius: 50%;\n            text-align: center;\n            line-height: 45px;\n            display: block;\n            color: #fff;\n            margin:0 auto 20px auto;\n        }\n.numbers2 {\n            background:#492F91;\n        }\n.numbers3 {\n            background: #FD9615;\n        }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QjtBQUNEOztJQUVJLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtDQUM5QjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtDQUN6QjtBQUNEO0dBQ0csb0JBQW9CO0dBQ3BCLDBCQUEwQjtHQUMxQixhQUFhO0dBQ2IsWUFBWTtHQUNaLGtCQUFrQjtHQUNsQixhQUFhOztDQUVmO0FBQ0Q7SUFDSSxvQkFBb0I7O0NBRXZCO0FBQ0Q7OztJQUdJLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwyQkFBMkI7Q0FDOUI7QUFDRDtBQUNBLGlCQUFpQjtDQUNoQjtBQUVEO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsbUJBQW1CO0NBQ3RCO0FBQ0c7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQiwyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsWUFBWTtLQUNmO0FBQ0c7WUFDSSxZQUFZO1lBQ1osYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLFlBQVk7WUFDWixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixtQkFBbUI7V0FDcEI7QUFFRDtZQUNFLFlBQVk7WUFDWixXQUFXOztTQUVkO0FBRUQ7WUFDSSxjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7U0FDZjtBQUNHO2dCQUNJLHVCQUF1QjtnQkFDdkIsY0FBYztnQkFDZCxtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLGVBQWU7YUFDbEI7QUFDRDtvQkFDUSxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixrQkFBa0I7aUJBQ3JCO0FBQ0Q7b0JBQ0ksbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLDJCQUEyQjs7O2lCQUc5QjtBQUVUO1lBQ0ksV0FBVztZQUNYLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLDJCQUEyQjtTQUM5QjtBQUNEO2dCQUNRLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsNkJBQTZCO2dCQUM3Qiw4QkFBOEI7U0FDckM7QUFDRDtvQkFDWSxnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixrQkFBa0I7bUJBQ25CLFlBQVk7bUJBQ1osbUJBQW1CO21CQUNuQixRQUFRO2lCQUNWO0FBQ0w7Z0JBQ0ksZ0JBQWdCLENBQUM7QUFDakI7b0JBQ0ksV0FBVztpQkFDZDtBQUdMO2dCQUNJLG1CQUFtQjthQUN0QjtBQUNHO29CQUNJLGNBQWM7aUJBQ2pCO0FBSUw7Z0JBQ0ksb0JBQW9CO2FBQ3ZCO0FBQ0c7b0JBQ0ksY0FBYztpQkFDakI7QUFFTjtZQUNDLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixZQUFZO1lBQ1osd0JBQXdCO1NBQzNCO0FBQ0Q7WUFDSSxtQkFBbUI7U0FDdEI7QUFDRDtZQUNJLG9CQUFvQjtTQUN2QiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1wYWdlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uYXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXYtaXRlbXtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubmF2LXBpbGxzIC5uYXYtbGluayB7XG4gICAgcGFkZGluZzogMTVweCAxMDBweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBjb2xvcjogIzQ5MmY5MTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4ubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5MmY5MTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi50YWItY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5zZW5kLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnNlbmQtYnV0dG9uIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5MmY5MTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnNlbmQtYnV0dG9uIGJ1dHRvbjpkaXNhYmxlZHtcbiAgb3BhY2l0eTogLjY7XG59XG4uYm94LWFzayB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tZWRpYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tZWRpYTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XG59XG4ubWVkaWEgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbn1cbi5yaWdodHNwYW4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogI0M3QkFCRTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ucmlnaHRzcGFuIHNtYWxsIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5yaWdodHNwYW4gYXtcbiAgIGJhY2tncm91bmQ6ICMxNTVDQzc7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgcGFkZGluZzogN3B4O1xuICAgY29sb3I6ICNmZmY7XG4gICBtYXJnaW4tbGVmdDogMTBweDtcbiAgIGZsb2F0OiByaWdodDtcblxufVxuLnJpZ2h0c3BhbiAucGVuZGluZyB7XG4gICAgYmFja2dyb3VuZDogIzgwODA4MDtcblxufVxuYTpob3ZlcixcbmE6Zm9jdXMsXG5hOmFjdGl2ZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1lZGlhLWJvZHkgaDQge1xuICAgIGNvbG9yOiM0OTJGOTE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1lZGlhLWJvZHkgaDQgLC5tZWRpYS1ib2R5IHB7XG50ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZGV0LXRhYiB7XG4gICAgY29sb3I6IzMzMztcbiAgICBmb250LXNpemU6MTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmxpc3QtdGFiIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbiAgICAubGlzdC10YWIgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgY29sb3I6ICM0MzQyNUQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuICAgICAgICAubGlzdC10YWIgICBsaSAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQzNDI1RDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3QtdGFiICAgLmFjdGl2ZS12b3RlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLnJlcyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAgICAgLnJlc3VsdHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzdWx0ICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVzdWx0ICBwIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMzMzM7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIC5yYXRlcyB7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjo0NXB4IGF1dG8gMTBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5yYXRlcyAgIGRpdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yYXRlcyAgIGRpdiAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlubiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMzMzO31cbiAgICAgICAgICAgICAgICAuaW5uICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMzMzM7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5pbm4yIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM0OTJGOTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmlubjIgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzQ5MkY5MTtcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAuaW5uMyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZEOTYxNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5uMyAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojRkQ5NjE1O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAubnVtYmVycyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW46MCBhdXRvIDIwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubnVtYmVyczIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDojNDkyRjkxO1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJzMyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkQ5NjE1O1xuICAgICAgICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/my-account/my-account.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-account/my-account.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"single-page\">\n  <div class=\"container\">\n    <!-- Nav pills -->\n    <ul class=\"nav nav-pills\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [class.active]=\"activeTab==1\" data-toggle=\"pill\" href=\"#ask\" (click)=\"loadAllQuestions(); activeTab=1\">q&a</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  [class.active]=\"activeTab==2\" data-toggle=\"pill\" href=\"#vote\" (click)=\"getCurrentVote(); activeTab=2\">vote</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  [class.active]=\"activeTab==3\" data-toggle=\"pill\" href=\"#vote\" (click)=\"getQr(); activeTab=3\">My QR</a>\n      </li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <div id=\"ask\" class=\"container tab-pane \" [class.active]=\"activeTab==1\">\n        <form #formData=\"ngForm\" (ngSubmit)=\"sendQuestion(formData)\">\n          <div class=\"row\">\n            <div class=\"col-md-8 offset-md-2\">\n              <textarea rows=\"3\" placeholder=\"Your Question...\" required name=\"name\" ngModel></textarea>\n              <div class=\"send-button\">\n                <button type=\"submit\" [disabled]=\"formData.invalid\"> send</button>\n              </div><!--send-button-->\n              <div class=\"clearfix\"></div>\n              <div *ngIf=\"showAlert\" class=\"alert\" [ngClass]=\"_alert?.success? 'alert-success': 'alert-danger'\">\n                <strong>{{_alert?.title}}</strong> {{_alert?.message}}\n              </div>\n\n\n              <div class=\"media\" *ngFor=\"let question of allQuestions?.approve\">\n                <img src=\"../../assets/images/images.jpg\" class=\"mr-3 mt-3 rounded-circle\">\n                <div class=\"media-body\">\n                  <h4>anonymous<span class=\"rightspan\"><small> {{question?.created_at|date:'shortTime'}}</small> <a\n                    *ngIf=\"question?.isAnwsered==1\">answered</a></span></h4>\n                  <p>{{question?.name}}</p>\n                  <!--<p>{{question?.anwsered}}</p>-->\n                </div>\n              </div><!--media-->\n\n\n            </div><!--col-md-6-->\n          </div><!--row-->\n        </form>\n      </div><!--tab-pane -->\n      <div id=\"vote\" class=\"container tab-pane \" [class.active]=\"activeTab==2\">\n        <div class=\"row\" *ngIf=\"voteInfo?.inProcess==0&&voteInfo?.isAnswered==0&&voteInfo?.sendToVote==1&&voteInfo?.startVote==1&&waiting != 'Found'\">\n          <div class=\"col-md-8 offset-md-2\"\n               *ngIf=\"voteInfo?.inProcess==0||(voteInfo?.isAnswered==0&&voteInfo?.sendToVote==1&&voteInfo?.startVote==1)\">\n            <p class=\"det-tab\">{{voteInfo.name}} </p>\n            <ul class=\"list-tab\">\n              <li *ngFor=\"let item of voteInfo?.answers; let i = index\" [class.active-vote]=\"isActive==i\"\n                  (click)=\"isActive=i; voteAnswer=item?.id\"><span>{{i+1}}</span>{{item.name}}\n              </li>\n            </ul>\n\n            <div class=\"send-button\">\n              <form>\n                <button type=\"submit\" (click)=\"myVote()\">Send</button>\n              </form>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div *ngIf=\"showAlert\" class=\"alert\" [ngClass]=\"_alert?.success? 'alert-success': 'alert-danger'\">\n              <strong>{{_alert?.title}}</strong> {{_alert?.message}}\n            </div>\n\n          </div><!--col-md-8-->\n        </div><!--row-->\n        <div  class=\"row\" >\n           <div class=\"col-md-12\" *ngIf=\"voteInfo?.inProcess==0&&voteInfo?.isAnswered==0&&voteInfo?.sendToVote==1&&voteInfo?.startVote==1&&waiting == 'Found'\">Waiting results </div>\n           <div class=\"col-md-12\" *ngIf=\"waiting == null\">\n             <span style=\"color: grey;\">No active voting.</span>\n           </div>\n        </div>\n      </div>\n      <div id=\"qr\" class=\"container tab-pane \" [class.active]=\"activeTab==3\">\n          <img [src]=\"sourceImage\">\n      </div>\n      </div>\n\n  </div><!--container-->\n</section><!--schedule-->\n\n"

/***/ }),

/***/ "./src/app/my-account/my-account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-account/my-account.component.ts ***!
  \****************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent(api, router, sanitizer) {
        this.api = api;
        this.router = router;
        this.sanitizer = sanitizer;
        this.activeTab = 1;
        this.showAlert = false;
        this._alert = {};
        this.isActive = 5;
        // this.router.queryParamMap.subscribe(params => {
        //   this.activeTab = params.get('voting');
        // });
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllQuestions();
        var userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.doctor_id = userInfo.doctor_id;
        setInterval(function () {
            _this.loadAllQuestions();
        }, 300000);
    };
    MyAccountComponent.prototype.loadAllQuestions = function () {
        var _this = this;
        this.api.getAllQuestions().subscribe(function (res) {
            _this.allQuestions = res.data;
        });
    };
    MyAccountComponent.prototype.sendQuestion = function (data) {
        var _this = this;
        if (data.invalid) {
            this._alert = {
                message: 'Invalid username or password.',
                title: 'Failed!',
                success: false
            };
            this.showAlert = true;
            setTimeout(function () {
                _this.showAlert = false;
            }, 3000);
            return;
        }
        var _question = { doctor_id: this.doctor_id, name: data.value.name };
        this.api.setQuestion(_question).subscribe(function (res) {
            _this.loadAllQuestions();
            _this._alert = {
                message: 'Successfully Registered',
                title: 'Success!',
                success: true
            };
            _this.showAlert = true;
            setTimeout(function () {
                _this.showAlert = false;
            }, 3000);
            data.reset();
        });
    };
    MyAccountComponent.prototype.getCurrentVote = function () {
        var _this = this;
        this.api.getVote().subscribe(function (res) {
            _this.voteInfo = res.data;
            _this.checkVote();
        });
    };
    MyAccountComponent.prototype.myVote = function () {
        var _this = this;
        if (this.voteAnswer) {
            var voteObj = { answer_id: this.voteAnswer, question_id: this.voteInfo.id, doctor_id: this.doctor_id };
            this.api.setVote(voteObj).subscribe(function (res) {
                // this.voteInfo = res.data;
                _this.waiting = 'Found';
                _this._alert = {
                    message: 'Successfully Registered',
                    title: 'Success!',
                    success: true
                };
                _this.showAlert = true;
                setTimeout(function () {
                    _this.showAlert = false;
                }, 3000);
            });
        }
    };
    MyAccountComponent.prototype.checkVote = function () {
        var _this = this;
        if (this.voteInfo && this.voteInfo.id) {
            this.api.getCheckVote({ question_id: this.voteInfo.id, doctor_id: this.doctor_id }).subscribe(function (res) {
                _this.waiting = res.success;
            });
        }
        else {
            this.waiting = null;
        }
    };
    MyAccountComponent.prototype.getQr = function () {
        var _this = this;
        var myQr = JSON.parse(localStorage.getItem('userInfo'));
        this.api.getMyQr(myQr.doctor_id).subscribe(function (res) {
            _this.sourceImage = _this.sanitizer.bypassSecurityTrustResourceUrl('data:Image/*;base64,' + res.data);
        });
    };
    MyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-account',
            template: __webpack_require__(/*! ./my-account.component.html */ "./src/app/my-account/my-account.component.html"),
            styles: [__webpack_require__(/*! ./my-account.component.css */ "./src/app/my-account/my-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weekdays {\n    margin: 0;\n  }\n  \n  .weekdays li {\n    display: inline-block;\n    width: 13.6%;\n    color: #fff;\n    text-align: center;\n    font-size: 16px;\n    text-transform: capitalize;\n  }\n  \n  .days {\n    padding: 0;\n    margin: 0;\n  }\n  \n  .days li {\n    list-style-type: none;\n    display: inline-block;\n    width: 13.6%;\n    text-align: center;\n    margin-bottom: 5px;\n    font-size:14px;\n    color: #fff;\n    text-transform: capitalize;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  \n  .days li .active {\n    padding: 10px 13px;\n    background: #FD9615;\n    color: #fff !important;\n    border-radius: 50%;\n  }\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7R0FDWDs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsV0FBVztJQUNYLFVBQVU7R0FDWDs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Vla2RheXMge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLndlZWtkYXlzIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEzLjYlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbiAgXG4gIC5kYXlzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLmRheXMgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEzLjYlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuZGF5cyBsaSAuYWN0aXZlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEzcHg7XG4gICAgYmFja2dyb3VuZDogI0ZEOTYxNTtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiJdfQ== */"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"schedule\" class=\"schedule\">\n  <div class=\"container\">\n    <h3>schedule</h3>\n    <div class=\"calendar\">\n      <ul class=\"weekdays\">\n        <li>Mo</li>\n        <li>Tu</li>\n        <li>We</li>\n        <li>Th</li>\n        <li>Fr</li>\n        <li>Sa</li>\n        <li>Su</li>\n      </ul>\n\n      <ul class=\"days\">\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li><span class=\"active\">3</span></li>\n        <li></li>\n        <li></li>\n\n      </ul>\n\n\n    </div><!--calendar-->\n    <div class=\"your-class first\">\n      <!--start-->\n      <div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                    <p class=\"date\">2:00 PM</p>\n                  </div><!--col-md-2-->\n                  <div class=\"col-md-10\">\n                    <div class=\"vl\"><span class=\"circles\"></span></div>\n                    <div class=\"box-time\">\n                      <h4>Welcome & Introduction</h4>\n                      <div class=\"media\">\n                        <div class=\"media-body\">\n                          <ul>\n                            <li>\n                              <small>deadline</small>\n                              <span class=\"dead\">2:05 PM</span></li>\n                            <li><span class=\"locat\"><img src=\"../../assets/images/loc.png\"></span>Jeddah Hotel (Sofitel Jeddah Corniche)\n                            </li>\n                            <li class=\"speak\"><span>Chairman</span>\n                              <div *ngFor=\"let id of schedule[0]?.speakers; let i = index\">\n                                <img style=\"float: left; margin-right: 5px\" class=\"mask\"\n                                     [src]=\"'../../assets/images/' + getPath(id)\">\n                                <span>Dr. Ahmad Alsaeed</span>\n                              </div>\n                            </li>\n                          </ul>\n                        </div><!--media-body-->\n                        <div class=\"clock mr-3\">\n                          <img src=\"../../assets/images/clock.png\">\n                          <p class=\"cl\">5 Mins</p>\n                        </div><!--clock-->\n                      </div><!--media-->\n                    </div><!--box-time-->\n                  </div><!--col-md-10-->\n                </div>\n\n              </div><!--col-md-6-->\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                    <p class=\"date\">2:05 PM</p>\n                  </div><!--col-md-2-->\n                  <div class=\"col-md-10\">\n                    <div class=\"vl\"><span class=\"circles\"></span></div>\n                    <div class=\"box-time\">\n                      <h4>Pathology Of ITP , Helping To Direct Treatment\n                      </h4>\n                      <div class=\"media\">\n                        <div class=\"media-body\">\n                          <ul>\n                            <li>\n                              <small>deadline</small>\n                              <span class=\"dead\">2:20 PM</span></li>\n                            <li><span class=\"locat\"><img src=\"../../assets/images/loc.png\"></span>Jeddah Hotel (Sofitel Jeddah Corniche)\n                            </li>\n                            <li class=\"speak\"><span>Speaker</span>\n                              <div *ngFor=\"let id of schedule[3]?.speakers; let i = index\">\n                                <img style=\"float: left; margin-right: 5px\" class=\"mask\"\n                                     [src]=\"'../../assets/images/' + getPath(id)\">\n                              </div>\n                            </li>\n                          </ul>\n                        </div><!--media-body-->\n                        <div class=\"clock mr-3\">\n                          <img src=\"../../assets/images/clock.png\">\n                          <p class=\"cl\">15 Mins</p>\n                        </div><!--clock-->\n                      </div><!--media-->\n                    </div><!--box-time-->\n                  </div><!--col-md-10-->\n                </div>\n\n              </div><!--col-md-6-->\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                    <p class=\"date\">2:20 PM</p>\n                  </div><!--col-md-2-->\n                  <div class=\"col-md-10\">\n                    <div class=\"vl\"><span class=\"circles\"></span></div>\n                    <div class=\"box-time\">\n                      <h4>Sequencing Of Second Line Therapy In ITP\n                      </h4>\n                      <div class=\"media\">\n                        <div class=\"media-body\">\n                          <ul>\n                            <li>\n                              <small>deadline</small>\n                              <span class=\"dead\">2:40 PM</span></li>\n                            <li><span class=\"locat\"><img src=\"../../assets/images/loc.png\"></span>Jeddah Hotel (Sofitel Jeddah Corniche)\n                            </li>\n                            <li class=\"speak\"><span>Speaker</span>\n                              <div *ngFor=\"let id of schedule[1]?.speakers; let i = index\">\n                                <img style=\"float: left; margin-right: 5px\" class=\"mask\"\n                                     [src]=\"'../../assets/images/' + getPath(id)\">\n                              </div>\n                            </li>\n                          </ul>\n                        </div><!--media-body-->\n                        <div class=\"clock mr-3\">\n                          <img src=\"../../assets/images/clock.png\">\n                          <p class=\"cl\">20 Mins</p>\n                        </div><!--clock-->\n                      </div><!--media-->\n                    </div><!--box-time-->\n                  </div><!--col-md-10-->\n                </div>\n\n              </div><!--col-md-6-->\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                    <p class=\"date\">2:40 PM</p>\n                  </div><!--col-md-2-->\n                  <div class=\"col-md-10\">\n                    <div class=\"vl\"><span class=\"circles\"></span></div>\n                    <div class=\"box-time\">\n                      <h4>Eltrompobag Data In 2nd Line</h4>\n                      <div class=\"media\">\n                        <div class=\"media-body\">\n                          <ul>\n                            <li>\n                              <small>deadline</small>\n                              <span class=\"dead\">3:10 PM</span></li>\n                            <li><span class=\"locat\"><img src=\"../../assets/images/loc.png\"></span>Jeddah Hotel (Sofitel Jeddah Corniche)\n                            </li>\n                            <li class=\"speak\"><span>Speaker</span>\n                              <div *ngFor=\"let id of schedule[2]?.speakers; let i = index\">\n                                <img style=\"float: left; margin-right: 5px\" class=\"mask\"\n                                     [src]=\"'../../assets/images/' + getPath(id)\">\n                              </div>\n                            </li>\n                          </ul>\n                        </div><!--media-body-->\n                        <div class=\"clock mr-3\">\n                          <img src=\"../../assets/images/clock.png\">\n                          <p class=\"cl\">30 Mins</p>\n                        </div><!--clock-->\n                      </div><!--media-->\n                    </div><!--box-time-->\n                  </div><!--col-md-10-->\n                </div>\n              </div><!--col-md-6-->\n              <!--</div>&lt;!&ndash;row&ndash;&gt;-->\n              <!--<div class=\"row\">-->\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                    <p class=\"date\">3:10 PM</p>\n                  </div><!--col-md-2-->\n                  <div class=\"col-md-10\">\n                    <div class=\"vl\"><span class=\"circles\"></span></div>\n                    <div class=\"box-time\">\n                      <h4>CITP Clinical Cases</h4>\n                      <div class=\"media\">\n                        <div class=\"media-body\">\n                          <ul>\n                            <li>\n                              <small>deadline</small>\n                              <span class=\"dead\">3:45 PM</span></li>\n                            <li><span class=\"locat\"><img src=\"../../assets/images/loc.png\"></span>Jeddah Hotel (Sofitel Jeddah Corniche)\n                            </li>\n                            <li class=\"speak\"><span>Speaker</span>\n                              <div *ngFor=\"let id of schedule[4]?.speakers; let i = index\">\n                                <img style=\"float: left; margin-right: 5px\" class=\"mask\"\n                                     [src]=\"'../../assets/images/' + getPath(id)\">\n                              </div>\n                            </li>\n                          </ul>\n                        </div><!--media-body-->\n                        <div class=\"clock mr-3\">\n                          <img src=\"../../assets/images/clock.png\">\n                          <p class=\"cl\">35 Mins</p>\n                        </div><!--clock-->\n                      </div><!--media-->\n                    </div><!--box-time-->\n                  </div><!--col-md-10-->\n                </div>\n              </div><!--col-md-6-->\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                    <p class=\"date\">3:45 PM</p>\n                  </div><!--col-md-2-->\n                  <div class=\"col-md-10\">\n                    <div class=\"vl\"><span class=\"circles\"></span></div>\n                    <div class=\"box-time\">\n                      <h4>Q&A </h4>\n                      <div class=\"media\">\n                        <div class=\"media-body\">\n                          <ul>\n                            <li>\n                              <small>deadline</small>\n                              <span class=\"dead\">4:00 PM</span></li>\n                            <li><span class=\"locat\"><img src=\"../../assets/images/loc.png\"></span>Jeddah Hotel (Sofitel Jeddah Corniche)\n                            </li>\n                            <li class=\"speak\"><span>Speaker</span>\n                              <div *ngFor=\"let id of schedule[5]?.speakers; let i = index\">\n                                <img style=\"float: left; margin-right: 5px\" class=\"mask\"\n                                     [src]=\"'../../assets/images/' + getPath(id)\">\n                              </div>\n                            </li>\n                          </ul>\n                        </div><!--media-body-->\n                        <div class=\"clock mr-3\">\n                          <img src=\"../../assets/images/clock.png\">\n                          <p class=\"cl\">15 Mins</p>\n                        </div><!--clock-->\n                      </div><!--media-->\n                    </div><!--box-time-->\n                  </div><!--col-md-10-->\n                </div>\n              </div><!--col-md-6-->\n            </div>\n          </div>\n\n        </div><!--row-->\n      </div>\n      <!--end-->\n    </div>\n  </div><!--container-->\n</section><!--schedule-->\n"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(apiService) {
        this.apiService = apiService;
        this.schedule = [];
        this.speakers = [];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.initSchedule();
        this.initSpeakers();
    };
    ScheduleComponent.prototype.initSchedule = function () {
        var _this = this;
        this.apiService.getSchedule().subscribe(function (res) {
            _this.schedule = res;
        });
    };
    ScheduleComponent.prototype.getPath = function (id) {
        if (this.speakers.length > 0) {
            var speakers = this.speakers.filter(function (x) { return x.id == id; });
            return speakers[0].imagePath;
        }
    };
    ScheduleComponent.prototype.getName = function (id) {
        if (this.speakers.length > 0) {
            var speakers = this.speakers.filter(function (x) { return x.id == id; });
            return speakers[0].name;
        }
    };
    ScheduleComponent.prototype.initSpeakers = function () {
        var _this = this;
        this.apiService.getSpeakers().subscribe(function (res) {
            _this.speakers = res;
        });
    };
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");






var httpOptions;
var ApiService = /** @class */ (function () {
    function ApiService(http, config) {
        this.http = http;
        this.config = config;
        this.url = this.config.baseURL() + this.config.apiURL() + this.config.EventId();
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
    }
    ApiService.prototype.setHeader = function () {
        this._token =  false || localStorage.getItem('token');
        httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this._token
            })
        };
        return httpOptions;
    };
    ApiService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        if (token) {
            var isExp = this.jwtHelper.isTokenExpired(token);
            if (isExp) {
                localStorage.removeItem('token');
                localStorage.removeItem('userInfo');
            }
            return isExp;
        }
        else {
            return true;
        }
    };
    ApiService.prototype.signUp = function (obj) {
        return this.http.post(this.config.baseURL() + this.config.apiURL() + 'register', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.registerDoctor = function (obj) {
        return this.http.post(this.config.baseURL() + this.config.apiURL() + '1/Doctor/ceateDocLanding', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.login = function (obj, eventId) {
        return this.http.post(this.config.baseURL() + this.config.apiURL() + eventId + '/' + 'login', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.getGallery = function () {
        return this.http.get(this.config.baseURL() + this.config.apiURL() + 'getAllGallery').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.getSchedule = function () {
        return this.http.get('../../assets/schedule.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.getSpeakers = function () {
        return this.http.get('../../assets/speakers.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.getAllQuestions = function () {
        return this.http.get(this.config.baseURL() + this.config.apiURL() + '1/Question/getAllQuestion', this.setHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.setQuestion = function (body) {
        return this.http.post(this.config.baseURL() + this.config.apiURL() + '1/Question/setQuestion', body, this.setHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.getVote = function () {
        return this.http.get(this.config.baseURL() + this.config.apiURL() + '1/Vote/getQuestionSendToVote', this.setHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.setVote = function (body) {
        return this.http.post(this.config.baseURL() + this.config.apiURL() + '1/Vote/setVote', body, this.setHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.getCheckVote = function (body) {
        return this.http.post(this.config.baseURL() + this.config.apiURL() + '1/Vote/checkDoctor', body, this.setHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService.prototype.getMyQr = function (id) {
        return this.http.get(this.config.baseURL() + this.config.apiURL() + 'qrCode/' + id, this.setHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], ApiService);
    return ApiService;
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
        // return 'http://api.revoladesaudievent.com/';
        return 'http://doctor.events.brandmark-corp.com/';
    };
    ConfigService.prototype.apiURL = function () {
        return 'api/';
    };
    ConfigService.prototype.EventId = function () {
        return '1';
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/pipes/speakers.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/speakers.pipe.ts ***!
  \***********************************************/
/*! exports provided: SpeakersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersPipe", function() { return SpeakersPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpeakersPipe = /** @class */ (function () {
    function SpeakersPipe() {
        this.speakers = [];
    }
    SpeakersPipe.prototype.transform = function (value, arg) {
        // const speakers: SpeakerModel[] = arg.filter(x => x.id == value);
        return '';
    };
    SpeakersPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'speakers'
        })
    ], SpeakersPipe);
    return SpeakersPipe;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"sign-up\" class=\"signpage\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 offset-lg-3\">\n        <div class=\"sign-content\">\n          <h2>welcome to</h2>\n          <img src=\"../../assets/images/logo-sign.png\">\n          <!--<form (ngSubmit)=\"onSignUp(signUpForm)\" #signUpForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label>Full Name</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Full Name\" #fullName=\"ngModel\"\n                     name=\"fullName\" ngModel required>\n            </div>\n            <div class=\"form-group\">\n              <label>Phone or Email </label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" #email=\"ngModel\" name=\"email\" ngModel\n                     required>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\" name=\"password\"\n                     ngModel required>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"agree\">\n                <input type=\"checkbox\" class=\"checks\" #agree=\"ngModel\" ngModel name=\"agree\" required>\n                <span> i Agree with <a href=\"#\">Terms & Conditions</a></span></label>\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"buttonstyle\" [disabled]=\"!signUpForm.valid\">Register Now</button>\n            </div>\n\n          </form>-->\n        </div><!--sign-content-->\n      </div>\n\n    </div>\n  </div>\n</section><!--signpage-->\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.css":
/*!*********************************************!*\
  !*** ./src/app/slider/slider.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/slider/slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\" class=\"slide\">\n  <img src=\"../../assets/images/logo-sign.png\">\n  <p class=\"det\">\n    (Eltrombopag Olamine)\n    <span>once daily oral therapy</span>\n  </p>\n  <!--<div class=\"end-text\">-->\n    <!--<p>For your ITP patients who relapse on corticosteroids </p>-->\n    <!--<p class=\"texts\">IT'S TIME TO LOOK BEYOND<span>-->\n    <!--IMMUNOSUPPRESSION FOR SUSTAINED RESPONSE</span></p>-->\n  <!--</div>-->\n</section>\n\n<section class=\"after-slide\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 offset-lg-3\">\n        <div class=\"circlediv\" routerLink=\".\" fragment=\"schedule\">\n          <div class=\"circle\">\n            <img src=\"../../assets/images/img1.png\">\n          </div><!--circle-->\n          <h3 class=\"tit\">scHEDULE</h3>\n        </div><!--circlediv-->\n      </div><!--col-lg-2-->\n      <div class=\"col-lg-2 \">\n        <div class=\"circlediv\" routerLink=\".\" fragment=\"speakers\">\n          <div class=\"circle\">\n            <img src=\"../../assets/images/img2.png\">\n          </div><!--circle-->\n          <h3 class=\"tit\">SPEAKERS</h3>\n        </div><!--circlediv-->\n      </div><!--col-lg-2-->\n\n      <div class=\"col-lg-2 \">\n        <div class=\"circlediv\" routerLink=\"./\" fragment=\"gallery\">\n          <div class=\"circle\">\n            <img src=\"../../assets/images/img3.png\">\n          </div><!--circle-->\n          <h3 class=\"tit\">GALLERY</h3>\n        </div><!--circlediv-->\n      </div><!--col-lg-2-->\n\n    </div><!--row-->\n  </div><!--container-->\n</section><!--after-slide-->\n"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/speakers/speakers.component.css":
/*!*************************************************!*\
  !*** ./src/app/speakers/speakers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWFrZXJzL3NwZWFrZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/speakers/speakers.component.html":
/*!**************************************************!*\
  !*** ./src/app/speakers/speakers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"speakers\" class=\"schedule\">\n  <div class=\"container\">\n    <h3>SPEAKERS</h3>\n    <div class=\"row speaker-box\">\n      <div class=\"col-md-4 text-box\">\n        <h4 class=\"tits\">{{activeSpeaker.name}}</h4>\n        <h5 class=\"hint\">{{activeSpeaker.title}}</h5>\n        <p>{{activeSpeaker.about}}</p>\n      </div><!--col-md-4-->\n      <div class=\"col-md-8\">\n        <div class=\"your-class speakers\">\n          <!--start-->\n          <div>\n            <div class=\"row\">\n              <div class=\"col-md-4\" *ngFor=\"let speaker of speakers; let i = index;\" (click)=\"selectSpeaker(i)\" (mouseenter)=\"selectSpeaker(i)\">\n                <div class=\"box-speak\">\n                  <img class=\"img-speak\" src=\"{{'../../assets/images/' + speaker.imagePath }}\">\n                  <div class=\"overlay\">\n                    <div class=\"names\"><h4>{{speaker.name}}<span>{{speaker.title}}</span></h4></div>\n                    <div class=\"social\">\n                      <ul>\n                        <li><a href=\"#\"><img src=\"../../assets/images/facebook.png\"></a></li>\n                        <li><a href=\"#\"><img src=\"../../assets/images/twitter.png\"></a></li>\n                        <li><a href=\"#\"><img src=\"../../assets/images/Instagram.png\"></a></li>\n                        <li><a href=\"#\"><img src=\"../../assets/images/web.png\"></a></li>\n                      </ul>\n                    </div>\n                  </div><!--overlay-->\n                </div><!--box-speak-->\n              </div><!--col-md-4-->\n            </div><!--row-->\n          </div>\n          <!--end-->\n\n\n        </div>\n\n      </div><!--col-md-8-->\n    </div><!--row-->\n  </div><!--container-->\n</section><!--schedule-->\n\n"

/***/ }),

/***/ "./src/app/speakers/speakers.component.ts":
/*!************************************************!*\
  !*** ./src/app/speakers/speakers.component.ts ***!
  \************************************************/
/*! exports provided: SpeakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersComponent", function() { return SpeakersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



var SpeakersComponent = /** @class */ (function () {
    function SpeakersComponent(apiService) {
        this.apiService = apiService;
        this.speakers = [];
        this.activeSpeaker = {};
    }
    SpeakersComponent.prototype.ngOnInit = function () {
        this.initSpeakers();
    };
    SpeakersComponent.prototype.initSpeakers = function () {
        var _this = this;
        this.speakers = [];
        this.apiService.getSpeakers().subscribe(function (res) {
            _this.speakers = res;
            _this.activeSpeaker = _this.speakers[0];
        });
    };
    SpeakersComponent.prototype.selectSpeaker = function (i) {
        this.activeSpeaker = this.speakers[i];
    };
    SpeakersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-speakers',
            template: __webpack_require__(/*! ./speakers.component.html */ "./src/app/speakers/speakers.component.html"),
            styles: [__webpack_require__(/*! ./speakers.component.css */ "./src/app/speakers/speakers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SpeakersComponent);
    return SpeakersComponent;
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

module.exports = __webpack_require__(/*! D:\WORKSPACE\COMPANIES\Elabs\event\event-revolade\revolade-landing-page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map