webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<app-sign-up></app-sign-up>\n<app-bout></app-bout>\n<app-speakers></app-speakers>\n\n<app-schedule></app-schedule>\n<app-gallery></app-gallery>\n<app-download></app-download>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bout_bout_component__ = __webpack_require__("../../../../../src/app/bout/bout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__speakers_speakers_component__ = __webpack_require__("../../../../../src/app/speakers/speakers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__schedule_schedule_component__ = __webpack_require__("../../../../../src/app/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_data_services_service__ = __webpack_require__("../../../../../src/app/services/data-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__download_download_component__ = __webpack_require__("../../../../../src/app/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_Smooth_Scroll__ = __webpack_require__("../../../../ng2-Smooth-Scroll/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sign_up_sign_up_component__["a" /* SignUPComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bout_bout_component__["a" /* BoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__speakers_speakers_component__["a" /* SpeakersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__schedule_schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_11__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__download_download_component__["a" /* DownloadComponent */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_Smooth_Scroll__["b" /* SmoothScrollToDirective */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_Smooth_Scroll__["a" /* SmoothScrollDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GMapModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_owl_carousel__["OwlModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_data_services_service__["a" /* DataServicesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bout/bout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-sq {\n    margin: 76px auto;\n}\n\n.card-sq .card {\n    background-color: #145d92;\n    border-radius: 0 0 0 0 !important;\n    border: none !important;\n    display: inline-block;\n    float: left;\n    margin-left: 1rem;\n    text-align: center;\n    height: 284px;\n    width: 261px;\n    margin-top: 20px;\n}\n\n.card-sq .card>img {\n    width: auto;\n    margin: 30px auto 40px auto;\n}\n\n.card label {\n    display: block;\n    font-size: 30px;\n    color: #ffffff;\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.site-wrapper {\n    display: table;\n    width: 100%;\n    height: 100vh;\n    /* For at least Firefox */\n    min-height: 100%;\n    background: #ffffff;\n    padding-top: 60px;\n    padding-bottom: 60px;\n}\n\n.s-title {\n    font-size: 48px;\n    font-family: LibreBaskerville-Bold, Arial;\n    color: #636466;\n    margin-left: 120px;\n    text-transform: uppercase;\n}\n\n.s-img {\n    width: 70px;\n    margin-right: 270px;\n}\n\n.s-text {\n    margin: 40px auto;\n}\n\n.s-text,\n.s-text b {\n    color: #636466;\n    font-family: LibreBaskerville-Regular, Arial;\n    font-size: 24px;\n}\n\n.content {\n    display: block;\n    min-height: 680px;\n    height: 778px;\n    width: 100%;\n    padding: 25px;\n    background: #a8cbd2;\n}\n\n.content .body {\n    height: 710px;\n    overflow-y: scroll;\n    color: #636466;\n    font-size: 21px;\n    padding: 0 12px;\n}\n\n.content .body label {\n    background: #d1e4e7;\n    font-size: 21px;\n    color: #145d92;\n    padding: 12px;\n    display: block;\n    text-align: left;\n}\n\n.content .body::-webkit-scrollbar-track {\n    background-color: #d1e4e7;\n}\n\n.content .body::-webkit-scrollbar {\n    width: 3px;\n    background-color: transparent;\n}\n\n.content .body::-webkit-scrollbar-thumb {\n    background-color: #145d92;\n}\n\n.tap-about {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.tap-about li {\n    background-color: #145d92;\n    min-height: 105px;\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    color: #ffffff;\n    font-family: LibreBaskerville-Bold, Arial;\n    font-size: 24px;\n    padding: 40px 20px;\n}\n\n.tap-about li:last-child {\n    margin-bottom: 0;\n}\n\n.img-about {\n    width: 100px;\n    display: inline;\n    margin-right: 320px;\n}\n\n.a-title {\n    display: block;\n    font-size: 52px;\n    font-weight: bold;\n    font-family: LibreBaskerville-Bold, Arial;\n    color: #636466;\n    margin-top: -52px;\n    margin-left: 110px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bout/bout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container card-sq\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\" scrollTo=\"about\">\n        <img src=\"./assets/img/icon/icon_03.png\" class=\"\">\n        <label>About</label>\n      </div>\n      <div class=\"card\" scrollTo=\"speakers\">\n        <img src=\"./assets/img/icon/icon_06.png\" class=\"\">\n        <label>Speakers</label>\n      </div>\n      <div class=\"card\" scrollTo=\"schedule\">\n        <img src=\"./assets/img/icon/icon-c_12.png\" class=\"\">\n        <label style=\"margin-top: 14px;\">schedule</label>\n      </div>\n      <div class=\"card\" scrollTo=\"gallery\">\n        <img src=\"./assets/img/icon/icon_09.png\">\n        <label>Gallery</label>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--<div class=\"container \" smoothScroll id=\"about\">-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-md-12\" style=\"text-align: center\">-->\n      <!--<h1 class=\"s-title mt-60\" style=\"display: block\">WHO we are</h1>-->\n      <!--<p class=\"s-text\"><b>Lorem Ipsum </b>is simply dummy text of the printing and<br>-->\n        <!--typesetting industry.</p>-->\n      <!--<p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown <br>printer took-->\n        <!--a galley of type and scrambled it to make a type specimen book.</p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<!--<div class=\"site-wrapper about\">-->\n<!--<div class=\"container\">-->\n<!--<div class=\"row\">-->\n<!--<div class=\"col-md-12\">-->\n<!--<h1>Lorem Ipsum?</h1>-->\n<!--<p>-->\n<!--Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.-->\n<!--</p>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<div class=\"site-wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" style=\"text-align: center\">\n        <img src=\"./assets/img/about_03.png\" class=\"img-about\">\n        <h1 class=\"a-title\" style=\"margin-bottom: 40px\">\n          ABOUT US\n        </h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <ul class=\"tap-about\">\n          <li *ngFor=\"let cont of contents; let i = index\" (click)=\"onChangeContent(i)\">{{cont?.title}}</li>\n        </ul>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"content\">\n          <div class=\"body\"  [innerHTML]=\"contents[activeNow]?.content\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/bout/bout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoutComponent = (function () {
    function BoutComponent() {
        this.contents = [
            { title: "Expert Summit", content: "Merz Middle East together with Merz Institute of Advanced Aesthetics invites you to join us as an advisor at our Expert Summit 2017 in Muscat. \n<br><br>\nThis global event will be led by top thought leaders from the field of aesthetics. The goal is to discuss the latest trends, scientific developments and treatment techniques with other leading professionals from across the globe \u2013 to generate new ideas for the future of Aesthetics. \n<br><br>\nWe\u2019re looking forward to meeting you in Muscat! \nMerz Middle East\n" },
            { title: "Merz Aesthetics ", content: "<b style=\"color:rgb(46,153,230)\">Merz Aesthetics </b> offers an aesthetic portfolio with range of treatment options (device, injectables and topicals) that allows physicians to use Merz technologies to treat broad range of patient's needs. <br>\nOur comprehensive product offering ranges from botulinum neurotoxin and a full line of dermal fillers to energy-based devices such as skin-tightening and lifting: \n<br><br>\n\n<ul>\n<li>Belotero</li>\n<li>Xeomin</li>\n<li>Radiesse </li>\n<li>Ultherapy</li>\n\n  " },
            { title: "The Merz Institute of Advanced Aesthetics ", content: "  <h3>Patient safety and satisfaction is critical to you...\n...so why not enhance your knowledge and skills \n</h3>\n\n<b style=\"color:rgb(46,153,230)\">The Merz Institute of Advanced Aesthetics</b>  is an expert-led professional educational institution devoted to advancing knowledge and providing physicians with unsurpassed academic knowledge as well as practical skills to successfully compete in area of aesthetics. \n<br><br>\n\n\n<label>EDUCATION THAT EMPOWERS EXCELLENCE</label>\n<ul>\n<li>developed by experts for experts</li> \n<li>flexible learning 24/7</li>\n<li>Truly global - with consideration of different ethnic group</li>\n</ul>\n<label>SCIENTIFIC EDUCATION BEYOND PURE PRODUCT INFORMATION</label>\n<ul>\n<li>interactive 3D animation</li>\n<li>professional injection and cadaver dissection videos</li> \n<li>resuming courses at any time</li>\n<li>course completion certificates </li>\n</ul>\n<label>BENEFIT FROM UNIQUE AND INNOVATIVE TRAINING SOLUTION</label>\n<ul>\n<li>empowers you to deliver the best cosmetic outcome and tolerability </li>\n<li>keeps you up-to-date on the latest developments in the aesthetic field </li>\n<li>expands your scope and helps to grow your business </li>\n</ul>\n<a href=\"http://www.merz-institute.com\"> www.merz-institute.com</a>\n" },
            { title: "Travel Tips", content: "  <h3>\u201CThe country of Oman defies expectations; it shouldn\u2019t, according to the cruel logic of the world, exist. But it does and it\u2019s incredible. An Arab nation on the cusp of what\u2019s next,\u201D \nAnthony Bourdain, CNN\n</h3>\n<br>\nBordered by the Kingdom of Saudi Arabia to the west, Yemen to the southwest, and the United Arab Emirates to the northwest, the <b style=\"color:rgb(46,153,230)\">Sultanate of Oman</b>\u2014a historic seafaring nation of traders and fishermen\u2014has only opened itself up to tourism since the 1980s. <br> \nA visit to the country promises a glimpse at the beautifully preserved Omani culture as well as access to pristine natural wonders. \n<br><br>\nThe grande dame of tourism for Oman, Muscat, which means \u201Csafe anchorage\u201D in Arabic, is where tradition and modernity merge. Explore its beautiful beaches, low-rise architecture, and fascinating cultural sites including Muthra Souq, the Royal Opera House and Sultan Qaboos Grand Mosque. In the newer part of the city you\u2019ll find upscale hotels and modern shopping malls, while a visit to the south or the old part of Muscat is considered the more scenic section of the capital\u2014small-town, coastal Arabia at its finest.\n<br><br>\n\n<label>ATTIRE</label>\nAttire for the meeting is business casual. As meeting room temperatures vary, be sure to bring a sweater or light jacket to ensure your comfort.\n<br><br>\n\n<label>CELL PHONE USAGE</label>\nStandard mobile phones can be operated in Oman with your regular SIM card. The dialing code for Muscat is +968 and then proceed with phone number.\n<br><br>\n\n<label>CREDIT CARD/BANKING/ATM</label>\nAll major credit cards are accepted in Muscat. There are ATM machines available at the airport.<br> \nThere is ATM machine located in Al Waha hotel at Shangri La Barr Al Jissah Resort & Spa. <br>\nIf you are using foreign card at bank machine, your money will be disbursed in Omani Rial.<br>\n<br>\n\n<label>CURRENCY</label>\nOmani Rial (OMR) is the currency of Oman. Coins are issued in Baisa and Rial.\n<br>\n<br>\n<label>ELECTRICITY/POWER SOCKET</label>\nThe standard voltage is 240 V and the standard frequency is 50 Hz.\nThe power sockets are of type G with 3 rectangular blades. You should consider bringing travel adaptor if this is not your standard type. \n\n<br><br>\n<label>LANGUAGE</label>\nArabic is the official language, however English is widely spoken in Muscat. \n<br><br>\n\n<label>SMOKING</label>\nIt is prohibited to smoke in enclosed areas. You will find outside designated smoking areas, this also applies for the hotel complex. \n<br><br>\n\n<label>TIME ZONE</label>\nMuscat is located in Gulf Time Zone (+4 UTC).\n<br><br>\n\n<label>TIPPING</label>\nService charges are added to most bills; if they are not, 10% is typically sufficient. In hotels, tips are not expected, but are appreciated. For taxi drivers and gas stations attendants, rounding up your bill and letting them keep the change is generally the custom.\n<br><br>\n\n<label>VISA INFORMATION</label>\nForeign nationals must obtain a visa to enter Oman, which can be secured on arrival at Muscat International Airport or online through the <b style=\"color:rgb(46,153,230)\"> Royal Oman Police (ROP) website.</b> \n<a style=\"color:rgb(46,153,230)\" href=\"https://www.rop.gov.om/arabic/index.html\">https://www.rop.gov.om/arabic/index.html</a>\n<br><br>\nWe suggest checking the ROP website before planning your trip, as Oman\u2019s visa regulations change frequently.\n<br><br>\n\n<label>WEATHER</label>\nTypical weather condition in December: \n<br>\n<ul>\n<li>Maximum temperature by day: 27\u00B0C</li>\n<li>Minimum temperature by night: 19\u00B0C</li>\n<li>Rain: rare, maximum of 10 millimeter</li>\n</ul>\n\n<label>WIFI</label>\nThe Shangri La Barr Al Jissah Resort & Spa has WIFI access throughout the hotel. There is also full-service business center accessible to the guests. \n" },
            { title: "Hotel Information", content: " <label>AIRPORT TRANSFER</label>\n\n<b>1. Arrival</b><br> \nMerz Middle East will provide shuttle transportation from Muscat International Airport (MCT) to<br> \nShangri La Barr Al Jissah Resort & Spa throughout Wednesday December 13. <br> Please meet transportation respresentative at arrival area of the airport. The representative will be holding sign with the meeting logo. <br><br>\n\n<b>2. Departure</b><br>\nAt close of the meeting, shuttle transportation to Muscat International Airport will be provided. Departure information will be given during the meeting. \n<br><br>\n<b>3. Pre- or post meeting dates</b><br> \nAttendees arriving pre- or post-meeting dates are to utilize taxi service to Shangri La Barr Al Jissah Resort & Spa. It is approximately a 40 minutes ride and taxi fare ranges between OMR 15-17.<br><br>\n\n\n<label>BREAKFAST</label>\nBreakfast will be served at <b>Samba Restaurant </b> at <b>Al Waha</b> hotel from 06.30 to 11:00. <br><br>\n\nAt <b>Al Bandar</b> hotel, breakfast will be served at <b>Al Tanoor</b> from 06.30 to 11:00.\n<br><br>\n\n<label>CHECK IN/CHECK OUT</label>\nOn your arrival day you room will be ready for check in at 15:00. <br><br>\n\nOn Friday in order to avoid queuing, please check out prior to conference start at 09:00. \n<br><br>\n\n\n<label>CONFERENCE VENUE</label>\nThe congress will take place at BARR AL JISSAH BALLROOM at AL BANDAR HOTEL. \n<br><br>\n\n<label>LUNCH</label>\nLunch will be served on the terrace of Al Jissr ballroom which is located on the Ground Level. \n<br><br>\n\n\n<label>PERSONAL EXPENSES</label>\nWe kindly request that you pay for personal expenses such as telephone, mini-bar and room service yourself. Please be sure to pay for the extras at the hotel reception when checking out.\n " },
            { title: "Emergency Contact ", content: " In case of emergency call (00968) <b>9999</b> for police, ambulance and fire department.  " }
        ];
        this.activeNow = 0;
    }
    BoutComponent.prototype.ngOnInit = function () {
    };
    BoutComponent.prototype.onChangeContent = function (i) {
        this.activeNow = i;
    };
    return BoutComponent;
}());
BoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bout',
        template: __webpack_require__("../../../../../src/app/bout/bout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bout/bout.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], BoutComponent);

//# sourceMappingURL=bout.component.js.map

/***/ }),

/***/ "../../../../../src/app/download/download.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".down-lap {\n  width: 64vw;\n  margin: -95px auto auto;\n  /*margin: 0 auto*/\n}\n\n.down p label {\n  font-size: 36px !important;\n  font-family: LibreBaskerville-Bold !important;\n\n}\n\n.down p {\n  font-size: 24px;\n  color: #636466;\n  font-family: LibreBaskerville-Regular !important;\n}\n\n.down-img {\n  width: 50%;\n  display: block;\n  margin: 0 auto;\n}\n\n.t-down {\n\n  display: block;\n  margin: 25px auto 90px auto;\n  font-size: 20px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container down mt-60\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"text-align: center\">\n      <img src=\"./assets/img/lap_03.png\" class=\"down-lap\">\n      <p><label>Simply download</label> the iOS or Android app when\n        <br>you’re good to go.</p>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\" style=\"text-align: center\">\n    <div class=\"col-md-6\">\n      <a href=\"http://download.expert-summit.com/ios\"><img src=\"./assets/img/apple-2_07.png\" class=\"down-img\"></a>\n      <label class=\"t-down\">Download for iOS</label>\n    </div>\n    <div class=\"col-md-6\">\n      <a href=\"http://download.expert-summit.com/android\">\n        <img src=\"./assets/img/android-2_07.png\" class=\"down-img\">\n      </a>\n      <label class=\"t-down\">Download for Android</label>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/download/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadComponent = (function () {
    function DownloadComponent() {
    }
    DownloadComponent.prototype.ngOnInit = function () {
    };
    return DownloadComponent;
}());
DownloadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-download',
        template: __webpack_require__("../../../../../src/app/download/download.component.html"),
        styles: [__webpack_require__("../../../../../src/app/download/download.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DownloadComponent);

//# sourceMappingURL=download.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".site-wrapper {\n    display: table;\n    width: 100%;\n    height: auto;\n    /* For at least Firefox */\n    min-height: 100%;\n    background: #636466;\n    padding-top: 0!important;\n    padding-bottom: 0!important;\n}\n\n.bg-footer {\n    width: 100%;\n    height: 130px;\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/icon/footer-icon_16.png")) + ");\n    background-size: 75% 100%;\n    margin-top: 18px;\n}\n\n.footer-copyRight {\n    font-size: 16px;\n    float: left;\n    color: #ffffff;\n    margin-top: 80px;\n}\n\n.logo-footer {\n    float: left;\n    margin-top: 70px;\n    width: 45px;\n    margin-right: 30px;\n}\n\n.social {\n    margin-top: 70px;\n    width: 45px;\n    float: right;\n    margin-left: 9px;\n}\n\n.text-now {\n    font-size: 73px;\n    font-family: LibreBaskerville-Bold;\n}\n\n.text-find-us {\n    font-size: 52px;\n    font-family: LibreBaskerville-Regular;\n    margin-left: 20px;\n}\n\n.up-footer {\n    color: #ffffff;\n    display: block;\n    background: #145d92;\n    height: 100px;\n    width: 100%;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrapper\">\n    <div class=\"up-footer\">\n        <p><label class=\"text-now\">NOW..</label><label class=\"text-find-us\">You can find us</label></p>\n    </div>\n    <div class=\"map\" smoothScroll id=\"map\">\n        <p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"{'width':'100%','height':'320px'}\"></p-gmap>\n\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <img src=\"./assets/img/icon/footer-icon_03.png\" class=\"logo-footer\">\n                <p class=\"footer-copyRight\">Copyright &copy; Expert Summit. All rights reserved.</p>\n            </div>\n            <div class=\"col-md-6\">\n                <a href=\"#\">\n                    <img src=\"./assets/img/icon/footer-icon_10.png\" class=\"social\">\n                </a>\n\n                <a href=\"#\">\n                    <img src=\"./assets/img/icon/footer-icon_08.png\" class=\"social\">\n                </a>\n                <a href=\"#\">\n                    <img src=\"./assets/img/icon/footer-icon_06.png\" class=\"social\">\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"bg-footer\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.options = {
            center: { lat: 23.552473, lng: 58.659731 },
            zoom: 16
        };
        this.overlays = [
            new google.maps.Marker({ position: { lat: 23.552473, lng: 58.659731 }, title: "Shangri-La Al Husn Resort & Spa" }),
        ];
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-title {\n    font-size: 48px;\n    font-family: LibreBaskerville-Bold, Arial;\n    color: #ffffff;\n    margin-left: 120px;\n    margin-top: -49px;\n    text-transform: uppercase;\n}\n\n.s-img {\n    width: 130px;\n    margin-right: 300px;\n}\n\n.s-text {\n    margin: 40px auto;\n}\n\n.s-text,\n.s-text b {\n    color: #ffffff;\n    font-family: LibreBaskerville-Regular, Arial;\n    font-size: 24px;\n}\n\n.site-wrapper {\n    display: table;\n    margin-top: 60px;\n    width: 100%;\n    height: auto;\n    /* For at least Firefox */\n    min-height: 100%;\n    background: #145d92;\n}\n\n.error {\n    color: red;\n    margin: 10px;\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrapper\" smoothScroll id=\"gallery\">\n<div class=\"container mt-60\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"text-align: center\">\n      <!--<img src=\"./assets/img/gallery_03.png\" class=\"s-img\">-->\n      <h1 class=\"s-title\" style=\"margin-bottom: 40px\">ASK Now</h1>\n      <!--<p class=\"s-text\" ><b>Lorem Ipsum </b>is simply dummy text of the printing and<br>-->\n        <!--typesetting industry.</p>-->\n    </div>\n  </div>\n</div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <form #question=\"ngForm\" (ngSubmit)=\"_onSubmit(question)\">\n          <input type=\"text\" placeholder=\"Type your question\" name=\"name\"\n                 class=\"form-control\" [(ngModel)]=\"question.name\" #name=\"ngModel\" required>\n            <p style=\"color: #ffffff\">{{msg}}</p>\n            <p class=\"error\" *ngIf=\"name.invalid && question.submitted\">\n            Enter user name or email\n          </p>\n            <button class=\"btn btn-success\">Send</button>\n          </form>\n        </div>\n\n        <!--<owl-carousel-->\n          <!--[options]=\"{items: 4, dots: true, navigation: false}\"-->\n          <!--[items]=\"images\"-->\n          <!--[carouselClasses]=\"['owl-theme', 'row', 'sliding']\" #owlElement>-->\n          <!--<div class=\"item\" *ngFor=\"let image of images;let i = index\">-->\n            <!--<div class=\"thumbnail-image\" style=\"height: 350px; width: 200px\" >-->\n              <!--<img [src]=\"image?image:'./assets/img/img-s_03.png'\">-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</owl-carousel>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_services_service__ = __webpack_require__("../../../../../src/app/services/data-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent(DS) {
        this.DS = DS;
        this.images = ["", "", "", "", "", "", ""];
        this.msg = "";
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype._onSubmit = function (data) {
        var _this = this;
        if (!data.valid) {
            return;
        }
        this.DS.sendQestion(data.value).subscribe(function (res) {
            _this.msg = res.message;
        });
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_services_service__["a" /* DataServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_services_service__["a" /* DataServicesService */]) === "function" && _a || Object])
], GalleryComponent);

var _a;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Extra markup and styles for table-esque vertical and horizontal centering */\n\n.site-wrapper {\n    display: table;\n    width: 100%;\n    height: 100vh;\n    min-height: 100%;\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/banner_01.png")) + ");\n    /* background-origin: content-box; */\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.site-wrapper-inner {\n    display: table-cell;\n    vertical-align: top;\n}\n\n.cover-container {\n    margin-right: auto;\n    margin-left: auto;\n}\n\n\n/* Padding for spacing */\n\n.inner {\n    padding: 2rem;\n}\n\n\n/*\n * Header\n */\n\n.masthead {\n    margin-bottom: 2rem;\n}\n\n.masthead-brand {\n    margin-top: -7px;\n}\n\n.nav-masthead .nav-link {\n    padding: .25rem 0;\n    font-weight: 100;\n    font-size: 23px;\n    color: #636466;\n    background-color: transparent;\n    border-bottom: .25rem solid transparent;\n    text-transform: uppercase;\n}\n\n.navbar-toggler {\n    float: right !important;\n}\n\n.nav-link {\n    text-transform: uppercase !important;\n}\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n    border-bottom-color: #145d92;\n}\n\n.nav-masthead .nav-link:last-child {\n    margin-top: -10px;\n    border-bottom-color: transparent;\n}\n\n.nav-masthead .nav-link+.nav-link {\n    margin-left: 1.7rem;\n}\n\n.nav-masthead .active {\n    color: #636466;\n    border-bottom-color: #145d92;\n}\n\n@media (min-width: 48em) {\n    .masthead-brand {\n        float: left;\n    }\n    .nav-masthead {\n        margin-right: 3rem;\n        float: right;\n    }\n}\n\n.cover {\n    padding: 0 1.5rem;\n}\n\n.cover .btn-lg {\n    padding: .75rem 1.25rem;\n    font-weight: 700;\n}\n\n@media (min-width: 40em) {\n    /* Pull out the header and footer */\n    .masthead {\n        position: absolute;\n        top: 0;\n    }\n    .mastfoot {\n        position: fixed;\n        bottom: 0;\n    }\n    /* Start the vertical centering */\n    .site-wrapper-inner {\n        vertical-align: middle;\n    }\n    /* Handle the widths */\n    .masthead,\n    .mastfoot,\n    .cover-container {\n        width: 100%;\n        /* Must be percentage or pixels for horizontal alignment */\n    }\n}\n\n@media (min-width: 62em) {\n    .masthead,\n    .mastfoot,\n    .cover-container {\n        width: 68rem;\n    }\n}\n\n.merz-logo {\n    position: absolute;\n    right: -7.7vw;\n    top: 49.5vh;\n    transform: scale(.701);\n}\n\n.exp-logo {\n    position: absolute;\n    right: 9vw;\n    transform: scale(.701);\n    /*top: 39.5vh;*/\n    top: 55.5vh;\n}\n\n@media (min-width: 576px) {\n    .merz-logo {\n        right: -2.6vw;\n        top: 30.2vh;\n    }\n    .exp-logo {\n        right: 5.5vw;\n        top: 39.5vh;\n    }\n}\n\n.download-tap {\n    display: block;\n    text-align: center;\n    margin: 0 auto;\n}\n\n.download-tap>a {\n    text-decoration: none;\n    font-size: 12px !important;\n    color: #ffffff !important;\n    display: inline-block;\n}\n\n.download-tap>a:first-child {\n    margin-right: 40px;\n}\n\n.download-tap>a>span {\n    display: block;\n}\n\n@media (min-width: 930px) {\n    /*.merz-logo {*/\n    /*top: 51.5vh;*/\n    /*}*/\n    /*.exp-logo {*/\n    /*top: 55.5vh;*/\n    /*}*/\n    .pop {\n        display: none!important;\n    }\n    .navShowLarg {\n        display: block !important;\n    }\n    .navShow {\n        display: none !important;\n    }\n}\n\n.navShowLarg {\n    display: none;\n}\n\n.navShow {\n    display: block;\n}\n\n.pop {\n    display: block\n}\n\n.close {\n    position: relative!important;\n    right: 0;\n    top: -30px;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"pop\" style=\" position: fixed; height: 100%; width: 100%; background: rgba(0,0,0,.5);\n text-align: center;z-index: 9994999; \" *ngIf=\"flag==true\">\n  <div style=\"width: 400px; padding:  50px 25px; background: #1a1a1a; margin: 20% auto \">\n    <button type=\"button\" (click)=\"flag = false\" class=\"close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"download-tap mt-12\">\n      <a href=\"http://download.expert-summit.com/ios\">\n        <img src=\"./assets/img/apple_07.png\" class=\"img-img-responsive\">\n        <span class=\"mt-12\">Download for iOS</span>\n      </a>\n      <a href=\"http://download.expert-summit.com/android\">\n        <img src=\"./assets/img/android_09.png\" class=\"img-img-responsive\">\n        <span class=\"mt-12\">Download for Android</span>\n      </a>\n      <button class=\"btn btn-danger\" style=\"margin-top: 20px;\" (click)=\"flag=false\"  scrollTo=\"gallery\">Ask Now</button>\n\n    </div>\n  </div>\n</div> -->\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark navShow\">\n    <img src=\"./assets/img/exp-sm-logo_03.png\" class=\"masthead-brand imf-fluid\">\n\n    <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbarCollapse\" style=\"\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" scrollTo=\"about\">About</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" scrollTo=\"speakers\">Speakers</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" scrollTo=\"schedule\">schedule</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" scrollTo=\"gallery\">Gallery</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModal\">Sign up</a>\n            </li>\n\n        </ul>\n    </div>\n</nav>\n\n<div class=\"site-wrapper\">\n\n    <img src=\"./assets/img/merz-logo_03.png\" class=\"img-fluid merz-logo\">\n    <img src=\"./assets/img/logo-exp_03.png\" class=\"img-fluid exp-logo\">\n\n    <div class=\"site-wrapper-inner\">\n\n        <div class=\"cover-container\">\n\n            <header class=\"masthead clearfix navShowLarg\">\n                <div class=\"inner\">\n                    <img src=\"./assets/img/exp-sm-logo_03.png\" class=\"masthead-brand imf-fluid\">\n                    <nav class=\"nav nav-masthead\">\n                        <a class=\"nav-link active\" href=\"#\">Home</a>\n                        <a class=\"nav-link\" href=\"#\" scrollTo=\"about\"> About</a>\n                        <a class=\"nav-link\" href=\"#\" scrollTo=\"speakers\">Speakers</a>\n                        <a class=\"nav-link\" href=\"#\" scrollTo=\"schedule\">schedule</a>\n                        <a class=\"nav-link\" href=\"#\" scrollTo=\"gallery\">Gallery</a>\n                        <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#exampleModal\">Sign up\n              <img src=\"./assets/img/user_03.png\"  class=\"imf-fluid\">\n            </a>\n                    </nav>\n                </div>\n            </header>\n\n            <main role=\"main\" class=\"inner cover\">\n            </main>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.flag = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/schedule/schedule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-title {\n  font-size: 48px;\n  font-family: LibreBaskerville-Bold, Arial;\n  color: #636466;\n  margin-left: 120px;\n  margin-top: -49px;\n  text-transform: uppercase;\n}\n\n.s-img {\n  width: 100px;\n  margin-right: 335px;\n}\n\n.s-text {\n  margin: 40px auto;\n}\n\n.s-text, .s-text b {\n  color: #636466;\n  font-family: LibreBaskerville-Regular, Arial;\n  font-size: 24px;\n}\n\n.panel-card {\n  display: block;\n  width: 100%;\n  border: 1px solid #636466;\n  height: 560px;\n  border-radius: 50px 50px 50px 50px;\n  padding: 0 14px 0 0;\n  margin-top: 130px;\n}\n\n.panel-card .body {\n  margin-top: 40px;\n  height: 429px;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.panel-card .body::-webkit-scrollbar-track {\n  background-color: #c6c6c7;\n}\n\n.panel-card .body::-webkit-scrollbar {\n  width: 3px;\n  background-color: transparent;\n}\n\n.panel-card .body::-webkit-scrollbar-thumb {\n  background-color: #929394;\n}\n\n.panel-card .title {\n  width: 80%;\n  display: block;\n  margin: 0 auto;\n  background: #145d92;\n  text-align: center;\n  font-size: 50px;\n  color: #ffffff;\n  padding: 25px 0;\n  margin-top: -111px;\n}\n\n.topic {\n  display: block;\n  width: 95%;\n}\n\n.t-title {\n  display: block;\n  width: 94%;\n  min-height: 40px;\n  padding: 6px 12px;\n  font-size: 20px;\n  background-color: #a8cbd2;\n  position: relative;\n  left: 30px;\n  top: 10px;\n  color: #ffffff;\n}\n\n.t-time {\n  display: block;\n  width: 200px;\n  height: 40px;\n  padding: 6px 12px;\n  background-color: #145d92;\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.t-speaker {\n  display: block;\n  width: 100%;\n  min-height: 40px;\n  font-size: 18px;\n  padding: 6px 12px;\n  color: #636466;\n}\n.t-speaker label{\n  margin-right: 4px;\n  color:#145d92 ;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-60\" smoothScroll id=\"schedule\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"text-align: center\">\n      <img src=\"./assets/img/cal-2_03.png\" class=\"s-img\">\n      <h1 class=\"s-title\" style=\"margin-bottom: 40px\">schedule</h1>\n      <!--<p class=\"s-text\" ><b>Lorem Ipsum </b>is simply dummy text of the printing and<br>-->\n        <!--typesetting industry.</p>-->\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"panel-card\">\n        <h1 class=\"title\">\n          14<sup>th </sup>  DEC 2017\n        </h1>\n        <div class=\"body\">\n          <!--repeat 1 here -->\n          <div class=\"topic\" *ngFor=\"let topic of dayOne\">\n            <div class=\"t-title\">{{topic.title}}</div>\n            <div class=\"t-time\">{{topic.time}}</div>\n            <div class=\"t-speaker\">\n              <label>Speaker: </label>\n              <span *ngFor=\"let s of topic.speaker; let i = index\">{{s}} <span *ngIf=\"topic.speaker.length>1 && i != topic.speaker.length-1 \">,</span> </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"panel-card\">\n        <h1 class=\"title\">\n          15<sup>th </sup> DEC 2017\n        </h1>\n        <div class=\"body\">\n          <!--repeat 1 here -->\n          <div class=\"topic\" *ngFor=\"let topic of dayTwo\">\n            <div class=\"t-title\">{{topic.title}}</div>\n            <div class=\"t-time\">{{topic.time}}</div>\n            <div class=\"t-speaker\">\n              <label>Speaker: </label>\n              {{topic.speaker}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleComponent = (function () {
    function ScheduleComponent() {
        this.dayOne = [
            { title: "Welcome", time: "09.00 - 09.10", speaker: ["Dragan Majetic"] },
            { title: "Midface Anatomy: Useful Hints", time: "09.10 - 09.20", speaker: ["Sebastian Cotofana"] },
            { title: "Cheeck Augmentation Volumizer of Choice", time: "09.20 - 09.35", speaker: ["Tatjana Pavicic"] },
            {
                title: "Techniques of volume augmentation of the middle face and cheek area (live injection session)",
                time: "09.35 - 09.55",
                speaker: ["Jani van Loghem"]
            },
            { title: "Lower Face Anatomy: Useful Hints", time: "09.55 - 10.05", speaker: ["Sebastian Cotofana"] },
            { title: "Contouring the Jawline with calcium hydroxilapatite", time: "10.05 - 10.20", speaker: ["Tatjana Pavicic"] },
            {
                title: "Effective techniques of jawline contouring (live injection session)",
                time: "10.20 - 10.40",
                speaker: ["Hassan Galadari"]
            },
            { title: "Upper face Anatomy: Useful Hints", time: "10.40 - 10.50", speaker: ["Sebastian Cotofana"] },
            {
                title: "Rheology of Fillers: How to Choose the Optimal Filler for Upper Face and Periorbital Area",
                time: "10.50 - 11.05",
                speaker: ["Tatjana Pavicic"]
            },
            { title: "The secrets of periorbital injections", time: "11.05 - 11.25", speaker: ["Nabila Azib"] },
            { title: "Coffee-break", time: "11.30 - 12.00", speaker: [""] },
            { title: "Journey of Toxins: A century of evolution", time: "12.00 - 12.40", speaker: ["Juergen Frevert"] },
            {
                title: "Consensus Recommendations for Combined Aesthetic Interventions Using Botulinum Toxin, Fillers and Microfocused Ultrasound",
                time: "12.40 - 13.00",
                speaker: ["Jani van Loghem"]
            },
            { title: "Lunch", time: "13.00 - 14.00", speaker: [""] },
            {
                title: "Panel Discussion: Innovation in Aesthetic Medicine",
                time: "14.00 - 17.30",
                speaker: ["Jani van Loghen (Moderator)", "Tatjana Pavicic (Moderator)", "Gabriela Casabona", "Nabila Azib", "Hassan Galadari", "Bisher Nawras Al-Shanawani"]
            },
            {
                title: "Skin tightening with injectables: Overview of study data",
                time: "14.05 - 14.20",
                speaker: ["Tatjana Pavicic"]
            },
            {
                title: "New technique of neck and decolletage skin tightening (live injection session)",
                time: "14.20 - 14.35",
                speaker: ["Gabriela Casabona"]
            },
            {
                title: "Expanding the borders: Body skin tightening techniques",
                time: "14.35 - 14.45",
                speaker: ["Gabriela Casabona"]
            },
            { title: "Discussion (S1 Ra diluted)", time: "14.45 - 15.00", speaker: [""] },
            {
                title: "Stretch marks: Addressing unmeet needs of patients",
                time: "15.00 - 15.15",
                speaker: ["Gabriela Casabona"]
            },
            { title: "Discussion (S2 Stretch marks)", time: "15.15 - 15.30", speaker: [""] },
            { title: "Coffee-break", time: "15.30 - 16.00", speaker: [""] },
            {
                title: "Tecniques of lifting and recontouring with botulinum toxin (live injection session)",
                time: "16.00 - 16.15",
                speaker: ["Tatjana Pavicic"]
            },
            { title: "Discussion (S3 Innovative approach of cellulite treatment)", time: "16.20 - 16.30", speaker: [""] },
            { title: "Innovative approach of cellulite treatment", time: "16.30 - 16.45", speaker: ["Tatjana Pavicic"] },
            { title: "Q&A, interactive", time: "16.45 - 17.05", speaker: [""] },
            { title: "Conclusion", time: "17.15 - 17.30", speaker: ["Tatjana Pavicic", "Jani van Loghem"] },
        ];
        this.dayTwo = [
            { title: "Opening", time: "10.00 - 10.05", speaker: ["Jani van Loghem"] },
            { title: "Hands: exploring injectable treatment options", time: "10.05 - 10.20", speaker: ["Nabila Azib"] },
            { title: "Pitfalls of hand anatomy", time: "10.20 - 10.30", speaker: ["Sebastian Cotofana"] },
            {
                title: "Hands: exploring techniques of injection (live injection session)",
                time: "10.30 - 10.40",
                speaker: ["Nabila Azib"]
            },
            {
                title: "Talking about beauty restoration: Different nations-different approaches?",
                time: "10.40 - 12.20",
                speaker: ["Jani van Loghem (Moderator)"]
            },
            { title: "Arabic face: view from Dubai", time: "10.45 - 10.55", speaker: ["Hassan Galadari"] },
            { title: "Arabic face: view from Rabat", time: "10.55 - 11.05", speaker: ["Nabila Azib"] },
            { title: "Arabic face: view from Jeddah", time: "11.05 - 11.15", speaker: ["Sami Sawan"] },
            {
                title: "My practice: how do I correct Arabic face? (live injection session)",
                time: "11.15 - 11.40",
                speaker: ["Mohamed Chelbi"]
            },
            {
                title: "My practice: how do I correct Caucasian face? (live injection session)",
                time: "11.40 - 12.05",
                speaker: ["Tatjana Pavicic"]
            },
            { title: "Discussion (S5 Arabic faces)", time: "12.05 - 12.15", speaker: [""] },
            { title: "Conclusion", time: "12.15- 12.20", speaker: ["Jani van Loghem"] },
            { title: "Grand Finale", time: "12.20 - 12.30", speaker: [""] },
        ];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__("../../../../../src/app/schedule/schedule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/schedule/schedule.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ScheduleComponent);

//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServicesService = (function () {
    function DataServicesService(http) {
        this.http = http;
    }
    DataServicesService.prototype.signUp = function (usersDTO) {
        return this.http.post("http://backend.expert-summit.com/users/sign-up", usersDTO)
            .map(function (response) { return response.json(); }, function (err) { return err.json(); });
    };
    DataServicesService.prototype.sendQestion = function (question) {
        return this.http.post("http://backend.expert-summit.com/userQuestions/save ", question)
            .map(function (response) { return response.json(); }, function (err) { return err.json(); });
    };
    return DataServicesService;
}());
DataServicesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataServicesService);

var _a;
//# sourceMappingURL=data-services.service.js.map

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-up-pop {\n  background: transparent !important;\n  border: 4px solid #fff;\n  border-radius: 25px 25px 25px 25px;\n  padding: 0 10px !important;\n\n}\n\n.sign-up-pop > modal-body {\n  width: 427px;\n}\n\n\n.form-control {\n  background: transparent !important;\n  width: 285px !important;\n  height: 75px !important;\n  border: 1.5px solid #ffffff !important;\n  border-radius: 36px 36px 36px 36px !important;\n  color: #ffffff;\n  text-align: center;\n  font-size: 24px;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  outline: none;\n  box-shadow: 0px 0px 27px rgba(255,255,255,.3);\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #ffffff;\n  text-align: center;\n  font-size: 24px;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n}\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ffffff;\n  text-align: center;\n  font-size: 24px;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n}\n\n:-ms-input-placeholder { /* IE 10+ */\n  color: #ffffff;\n  text-align: center;\n  font-size: 24px;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color: #ffffff;\n  text-align: center;\n  font-size: 24px;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n}\n\n.logo {\n  display: block;\n  margin: 34px 0 41px 0;\n  width: 100%;\n}\n\n.close {\n  position: absolute !important;\n  right: 0px;\n  top: 0px;\n  font-size: 2rem !important;\n  color: #ffffff !important;\n  opacity: 1 !important;\n}\n\n.form-group {\n  margin-bottom: 1.5rem !important;\n}\n\n.form-radiobutton {\n  font-size: 20px;\n  color: #ffffff;\n  margin-left: 81px;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  position: relative;\n  background: #40464b;\n  height: 100%;\n  padding: 40px 30%;\n  margin: 0;\n}\n\n.btn.btn-submit {\n  background: transparent !important;\n  width: 200px !important;\n  height: 60px !important;\n  border: 1.5px solid #ffffff !important;\n  border-radius: 36px 36px 36px 36px !important;\n  color: #ffffff;\n  transition: all .5s ease-in-out;\n  margin: 0 auto;\n  font-size: 20px;\n  display: block;\n}\n\n.btn.btn-submit:hover {\n  background: #ffffff !important;\n  color: #40464b;\n  cursor: pointer;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n}\n\ninput[type=\"radio\"] + label {\n  color: #f2f2f2;\n  font-family: Arial, sans-serif;\n}\n\ninput[type=\"radio\"] + label span {\n  display: inline-block;\n  width: 19px;\n  height: 19px;\n  margin: -2px 10px 0 0;\n  vertical-align: middle;\n  border: 1.5px #ffffff solid;\n  cursor: pointer;\n  box-shadow: 0px 0px 27px rgba(255,255,255,.3);\n\n}\n\ninput[type=\"radio\"]:checked + label span {\n  background: #ffffff;\n  background-size: 15px 15px;\n}\n\n.btn.btn-link {\n  font-size: 16px;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #ffffff;\n  text-decoration: underline;\n  display: block;\n  text-align: center;\n}\n\n.sol-text {\n  font-size: 15px;\n  font-family: LibreBaskerville-Bold, Arial;\n  color: #ffffff;\n  display: block;\n  text-align: center;\n  font-weight: bold;\n}\n\n.sol-text > span {\n  font-family: LibreBaskerville-Regular, Arial !important;\n  font-weight: normal !important;\n  font-size: 12px;\n}\n\n.download-tap {\n  display: block;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.download-tap > a {\n  text-decoration: none;\n  font-size: 12px !important;\n  color: #ffffff !important;\n  display: inline-block;\n\n}\n.download-tap > a:first-child{\n  margin-right: 40px;\n}\n\n.download-tap > a > span {\ndisplay: block;\n}\n@media (min-width: 576px){\n  .modal-dialog {\n    max-width: 769px !important;\n  }\n  .sign-up-pop {\n    padding: 0 167px !important;\n\n  }\n  .form-control {\n    width: 385px !important;\n  }\n  .close {\n    position: absolute !important;\n    right: -138px;\n    top: 23px;\n  }\n}\n\n.error{\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Modal -->\n<div class=\"modal fade\" data-show=\"true\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"exampleModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content sign-up-pop\">\n      <div class=\"modal-body \">\n        <!-- close button -->\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <!--logo-->\n        <form #userData=\"ngForm\" (ngSubmit)=\"onSignUp(userData)\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <img src=\"./assets/img/exp_logo_03.png\" class=\"img-responsive logo\">\n\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"User Name/Email\" name=\"userName\"\n                       class=\"form-control\" [(ngModel)]=\"userDTO.userName\" #userName=\"ngModel\" required>\n                <p class=\"error\" *ngIf=\"userName.invalid && userData.submitted\">\n                  Enter user name or email\n                </p>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Mobile Number\" name=\"mobile\"\n                       class=\"form-control\" [(ngModel)]=\"userDTO.phone\" #mobile=\"ngModel\" required>\n                <p class=\"error\" *ngIf=\"mobile.invalid && userData.submitted\">\n                  Enter mobile number\n                </p>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" placeholder=\"Password\" name=\"password\"\n                       class=\"form-control\" [(ngModel)]=\"userDTO.password\" required minlength=\"6\" #password=\"ngModel\"  >\n                <p class=\"error\" *ngIf=\"password.invalid&& !password.errors?.minlength && userData.submitted\" >\n                  Enter password\n                </p>\n                <p class=\"error\" *ngIf=\"password.errors?.minlength && userData.submitted\" >\n                  Minimum 6 characters\n                </p>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" placeholder=\"Confirm Password\" name=\"confirm\"\n                       class=\"form-control\" ngModel #confirm=\"ngModel\" required>\n                <p class=\"error\" *ngIf=\"confirm.invalid && userData.submitted\">\n                  Enter confirm password\n                </p>\n                <p class=\"error\" *ngIf=\"!confirm.invalid&&confirm.value!=password.value && userData.submitted\">\n                  Password not matching\n                </p>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-radiobutton\">\n                  <input type=\"radio\" class=\"form-radio\" id=\"male\" name=\"gender\" value=\"Male\" required\n                         [(ngModel)]=\"userDTO.gender\">\n                  <label for=\"male\"><span></span></label>Male\n                </label>\n                <label class=\"form-radiobutton\">\n                  <input type=\"radio\" class=\"form-radio\" id=\"female\" name=\"gender\" value=\"Female\" required\n                         [(ngModel)]=\"userDTO.gender\">\n                  <label for=\"female\"><span></span></label>Female\n                </label>\n                <p class=\"error\" *ngIf=\"!userDTO.gender&& userData.submitted\">\n                  Select gender\n                </p>\n              </div>\n              <div class=\"form-group\">\n                <button class=\"btn btn-submit\" type=\"submit\">SIGN UP</button>\n              </div>\n              <div class=\"form-group \">\n                <a href=\"#\" class=\"btn btn-link\">Already have an account</a>\n                <div class=\"sol-text mt-12\">Simply download\n                  <span>the ios or Android app when <br>you'r good to go.</span></div>\n\n              </div>   <div class=\"download-tap mt-12\">\n              <a href=\"http://download.expert-summit.com/ios\">\n                <img src=\"./assets/img/apple_07.png\" class=\"img-img-responsive\">\n                <span class=\"mt-12\">Download for iOS</span>\n              </a>\n              <a href=\"http://download.expert-summit.com/android\">\n                <img src=\"./assets/img/android_09.png\" class=\"img-img-responsive\">\n                <span class=\"mt-12\">Download for Android</span>\n              </a>\n            </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<p-growl [(value)]=\"msgs\"></p-growl>\n"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUPComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_services_service__ = __webpack_require__("../../../../../src/app/services/data-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUPComponent = (function () {
    function SignUPComponent(DS) {
        this.DS = DS;
        this.userDTO = {};
        this.msgs = [];
    }
    SignUPComponent.prototype.ngOnInit = function () {
    };
    SignUPComponent.prototype.onSignUp = function (data) {
        var _this = this;
        if (data.invalid) {
            return;
        }
        this.userDTO.email = this.userDTO.userName;
        this.DS.signUp(this.userDTO).subscribe(function (res) {
            if (res) {
                if (res.success) {
                    _this.msgs = [{ severity: 'success', summary: 'Success Message', detail: res.message }];
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: 'Error Message', detail: res.message }];
                }
            }
        });
    };
    return SignUPComponent;
}());
SignUPComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_data_services_service__["a" /* DataServicesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_services_service__["a" /* DataServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_services_service__["a" /* DataServicesService */]) === "function" && _a || Object])
], SignUPComponent);

var _a;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/speakers/speakers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-title {\n  font-size: 48px;\n  font-family: LibreBaskerville-Bold, Arial;\n  color: #636466;\n  margin-left: 120px;\n  margin-top: -49px;\n  text-transform: uppercase;\n}\n\n.s-img {\n  width: 70px;\n  margin-right: 270px;\n}\n\n.s-text {\n  margin: 40px auto;\n}\n\n.s-text, .s-text b {\n  color: #636466;\n  font-family: LibreBaskerville-Regular, Arial;\n  font-size: 24px;\n}\n\n.item {\n  text-align: center;\n  width: 250px;\n}\n\n.item label {\n  font-size: 22px;\n  text-align: center;\n  display: block;\n  margin: 24px auto 5px;\n  font-style: italic;\n  color: #636466;\n}\n\n.item span {\n  font-size: 18px;\n  text-align: center;\n  display: block;\n  color: #636466;\n}\n\n.s-info {\n  border: 1px solid #636466;\n  border-radius: 50px 50px 50px 50px;\n  padding: 25px;\n}\n\n.s-s-info h3 {\n  font-style: italic;\n  font-size: 36px;\n  color: #636466;\n  margin-top: 25px;\n}\n\n.s-s-info p {\n  font-size: 24px;\n  color: #636466;\n  margin: 0 !important;\n}\n\n.s-s-info span {\n  font-size: 20px;\n  color: #636466;\n  margin: 0 !important;\n\n}\n\n.s-s-dec {\n  margin-top: 40px;\n}\n\n.s-s-dec label {\n  font-size: 28px;\n  color: #636466;\n  font-weight: bold;\n\n}\n\n.s-s-s-info {\n  border-top: 1px solid #636466;\n}\n\n.s-s-s-info label {\n  width: 160px;\n  color: #ffffff;\n  padding: 12px;\n  background: #145d92;\n  background-repeat: no-repeat;\n  font-size: 28px;\n  font-weight: bold;\n\n}\n\n.s-s-title {\n  font-size: 24px;\n  color: #636466;\n  font-weight: bold;\n}\n\n.s-s-title span {\n  width: 15px;\n  height: 15px;\n  border-radius: 10px;\n  background: #145d92;\n  display: inline-block;\n  margin-right: 12px;\n}\n\n.s-session {\n  padding: 30px;\n  border-bottom: 1px solid #636466;\n}\n\n.s-session:last-child {\n  border-bottom: none;\n}\n\n.card-s-s {\n  display: block;\n  text-align: center;\n  margin-top: 40px;\n  border-right: 1px solid #636466;\n}\n\n.card-s-s.no-b {\n  border-right: none;\n}\n\n.card-s-s > .img-s-s {\n  margin-bottom: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/speakers/speakers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-60\" smoothScroll id=\"speakers\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"text-align: center\">\n      <img src=\"./assets/img/mic_03.png\" class=\"s-img\">\n      <h1 class=\"s-title\" style=\"margin-bottom: 40px\">Speakers</h1>\n      <!--<p class=\"s-text\"><b>Lorem Ipsum </b>is simply dummy text of the printing and<br>-->\n        <!--typesetting industry.</p>-->\n    </div>\n  </div>\n</div >\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <owl-carousel\n        [options]=\"{items: 4, dots: true, navigation: false}\"\n        [items]=\"speakers\"\n        [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" #owlElement>\n        <div class=\"item\" *ngFor=\"let speaker of speakers;let i = index\">\n          <div class=\"thumbnail-image\" style=\"height: 320px; width: 200px\" (click)=\"openDetials(i)\">\n            <img [src]=\"speaker?.img?speaker?.img:'./assets/img/003_07.png'\">\n            <label>{{speaker?.name}}</label>\n            <!--<span>{{speaker?.position}}</span>-->\n          </div>\n        </div>\n      </owl-carousel>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"s-info\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <img class=\"img-fluid\" [src]=\"speakers[indexNow]?.img?speakers[indexNow]?.img:'./assets/img/003_07.png'\">\n          </div>\n          <div class=\"col-md-10 s-s-info\">\n            <h3>{{speakers[indexNow]?.name}}</h3>\n            <p>{{speakers[indexNow]?.position}}</p>\n            <span>{{speakers[indexNow]?.company}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 s-s-dec\">\n            <label>Description</label>\n            <p [innerHTML]=\"speakers[indexNow]?.description\">\n\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 \">\n            <div class=\"s-s-s-info\">\n              <label>Sessions</label>\n              <div class=\"s-session\" *ngFor=\"let session of speakers[indexNow]?.sessions\">\n                <h1 class=\"s-s-title\"><span></span>{{session?.day}}<sup>th</sup> DEC 2017</h1>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"card-s-s\">\n                      <img class=\"img-s-s\" src=\"./assets/img/003_11.png\">\n                      <p>{{session?.title}}</p>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"card-s-s\">\n                      <img class=\"img-s-s\" src=\"./assets/img/003_14.png\">\n                      <p>{{session?.time}}</p>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"card-s-s no-b\">\n                      <img class=\"img-s-s\" src=\"./assets/img/003_16.png\">\n                      <p>{{session?.room}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/speakers/speakers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeakersComponent = (function () {
    function SpeakersComponent() {
        this.speakers = [{
                name: "Dr. Bisher Shanawani",
                position: "Plastic Surgeon and owner",
                company: "specialized cosmetic surgery center in Riyadh, Saudi Arabia",
                img: "./assets/img/speakers/Dr Bisher pic.png",
                description: "He completed his graduation at King Saud University, KSA, with the highest honors. Dr. Shanawani developed his plastic surgery expertise further with fellowship at University of Toronto; as the Chairman at Riyadh Plastic Surgery Club, and as an Executive Committee Member at the American College of Surgeons Saudi Chapter.\n  <br>His comprehensive knowhow and practice with all plastic surgery procedures as a specialized Consultant at the prestigious Al Safwa Hospital, Riyadh; has provided a boost to Dr. Shanawani\u2019s career and respect in the Saudi and Gulf Plastic Surgery community.\n<br>He has also published professional articles regarding plastic and reconstructive surgery in medical local and international journals and presented scientific papers at well-known professional associations in USA and Europe.",
                sessions: [{
                        title: "Panel Discussion: Innovation in Aesthetic Medicine",
                        time: "14.00 - 17.30",
                        room: "__",
                        day: "14"
                    }]
            },
            {
                name: "Dr. Mohamed Chelbi",
                position: "Cosmetic and Reconstructive Plastic Surgeon",
                company: "",
                img: "./assets/img/speakers/dr chelbi2.png",
                description: "He graduated from University of Tunis in 2002 with his medical degree and continued his education in France. Dr. Chelbi worked as Plastic and Reconstructive Surgeon at Saint Josef Saint Luc hospital in Lyon, France before he successfully received Surgery Diploma from University of Claude Bernard in Lyon, France\n<br> He returned to Tunisia and worked as an Assistant Professor at the department of maxillo facial and plastic surgery at Sahloul teaching hospital in Sousse, Tunisia.\n  Dr. Chelbi is currently working in private practice in Dubai.\n<br> He is member of the French as well as the Tunisian Society of maxilla-facial surgery and French and Tunisian Society of Plastic Reconstructive and Aesthetic Surgery.",
                sessions: [{
                        title: "My practice: how do I correct Arabic face? (live injection session)",
                        time: "11.15 - 11.40",
                        room: "__",
                        day: "15"
                    }]
            },
            {
                name: "Dr Gabriela Casabona",
                position: "a dermatologist practicing in Brazil",
                company: "",
                img: "./assets/img/speakers/Dr Gabriela pic.png",
                description: "She has dedicated the first 10 years of her career to mastering cosmetic rejuvenation of both the face and body. She then traveled to the USA to serve a variety of externships with experts in various procedures and technologies. Dr Casabona had spent a great deal of her time as a collaborator in the Laser department of Universidade ABC- Brazil. Since 2010, Dr Casabona shifted her career to more the surgical side. \n<br> She spent much of the last 5 years in many training programs in the USA, Latin America and Europe furthering her expertise in skin cancer surgery, Mohs surgery, and honing her reconstruction skills (especially oculoplastics). She is also trained in cosmetic surgery including, fat grafting, endoscopic browlifting and blepharoplasty. For 15 Years Dr Casabona has built her own clinic where 85% of her patients are cosmetic, mainly fillers, botulinum toxin combined with technology treatments and the newest generation of thread lifting procedures. The other 15% are surgical patients (cosmetic and oncology).\n<br> Dr Casabona is presently an International Speaker for Allergan Medical, Merz Medical, and also Medical consultant and Speaker for Mesoestetic Spain and author of many book chapters and publications regarding aesthetic deramatology and reconstructive surgery.",
                sessions: [{
                        title: "Panel Discussion: Innovation in Aesthetic Medicine",
                        time: "14.00 - 17.30",
                        room: "__",
                        day: "14"
                    },
                    {
                        title: "New technique of neck and decolletage skin tightening (live injection session)",
                        time: "14.20 - 14.35",
                        room: "__",
                        day: "14"
                    },
                    { title: "Expanding the borders: Body skin tightening techniques", time: "14.35 - 14.45", room: "__", day: "14" },
                    { title: "Stretch marks: Addressing unmeet needs of patients", time: "15.00 - 15.15", room: "__", day: "14" }
                ]
            },
            {
                name: "Dr Hassan",
                position: "",
                company: "",
                img: "./assets/img/speakers/Hassan pic.png",
                description: "An American board certified graduate of the Boston University/Tufts University dermatology program in the USA, Dr. Galadari completed a dermatologic surgery and laser fellowship in the University of California-San Francisco and is currently a fellow of the American Academy of Dermatology. \n<br>He is a member of numerous committees in many international societies, the Treasurer General of the International Society of Dermatology as well as board member of the International League of Dermatological Societies, a body that represents 100,000 dermatologists worldwide.\n<br>He was the recipient of the Presidential Citation Award awarded to him by the American Academy of Dermatology for the promotion of excellence in the field of dermatology in 2016.\n  <br>His main area of interest is cosmetic dermatology, particularly the field of soft tissue augmentation, where he currently holds a patent. He has lectured in numerous international congresses, published in many peer reviewed journals and authored book chapters.",
                sessions: [{
                        title: "Effective techniques of jawline contouring (live injection session)",
                        time: "10.20 - 10.40",
                        room: "__",
                        day: "14"
                    },
                    { title: "Panel Discussion: Innovation in Aesthetic Medicine", time: "14.00 - 17.30", room: "__", day: "14" },
                    { title: "Arabic face: view from Dubai", time: "10.45 - 10.55", room: "__", day: "15" }
                ]
            },
            {
                name: "Dr. Jani van Loghem",
                position: "medical biologist and a medical doctor by training and has specialized in Aesthetic Medicine.",
                company: "",
                img: "./assets/img/speakers/Dr Jani pic2.png",
                description: "He is now working in his own clinic in Amsterdam \u2013 Doctors Inc. Doctors Inc provides the full spectrum of aesthetic treatments, from beautician treatments to plastic surgery, with a heavy focus on injectables. \n<br>Dr. van Loghem is vice president of the Dutch Society of Aesthetic Medicine (NVCG). Within this society, he is Chairman of the Product and Complication Registration Committee, focusing on complications that occur in the field of injectables, and chairman of the Education Committee, responsible for the official Dutch curriculum for aesthetic medicine.\n<br>Dr. van Loghem has started the first independent Academy for Aesthetic Medicine in the Netherlands (Doctors Inc Academy) from which he organizes a range of training programs from basic to advanced, including liquid facelifts, independent from pharmaceutical company commercial strategies.\n<br>Dr. van Loghem also has extensive experience in providing training for pharmaceutical companies such as Merz Aesthetics, where he is also a member of the Medical Advisory Board and Medical Education Faculty.",
                sessions: [
                    {
                        title: "Techniques of volume augmentation of the middle face and cheek area (live injection session)",
                        time: "09.35 - 09.55",
                        room: "__",
                        day: "14"
                    },
                    {
                        title: "Consensus Recommendations for Combined Aesthetic Interventions Using Botulinum Toxin, Fillers and Microfocused Ultrasound",
                        time: "12.40 - 13.00",
                        room: "__",
                        day: "14"
                    },
                    { title: "Panel Discussion: Innovation in Aesthetic Medicine", time: "14.00 - 17.30", room: "__", day: "14" },
                    { title: "Conclusion", time: "17.15 - 17.30", room: "__", day: "14" },
                    { title: "Opening", time: "10.00 - 10.05", room: "__", day: "15" },
                    {
                        title: "Talking about beauty restoration: Different nations-different approaches?",
                        time: "10.40 - 12.20",
                        room: "__",
                        day: "15"
                    },
                    { title: "Conclusion", time: "12.15- 12.20", room: "__", day: "15" }
                ]
            },
            {
                name: "Dr. Sami Sawan",
                position: "is Cosmetic Dermatology Consultant",
                company: "Own practice in Jeddah, Saudi Arabia",
                img: "./assets/img/speakers/Dr Sami pic.png",
                description: "He studied Medicine and Surgery at King Abdulaziz University in Jeddah. Dr. Sawan gained international experience in Paris during his dermatology residence at University of Paris in France. \n<br>After his graduation in 2010 as Dermatologist, he returned to Saudi Arabia and worked as Section Head of Dermatology and Cosmetic Dermatology at International Medical Centre in Jeddah.\n<br>He has dedicated most of his clinical work to all types of injectables; speaking and organizing multiple congresses in the region all related to injections and injection techniques.\n<br>He currently works in his private practice and is well respected trainer locally and internationally for fillers, injectables, and beauty in general.\n<br>With his vast experience in multiples cultures, he can easily understand and plan the appropriate treatment for different patients from different cultures with different needs.",
                sessions: [{ title: "Arabic face: view from Jeddah", time: "11.05 - 11.15", room: "__", day: "15" }]
            },
            {
                name: "Dr Tatjana Pavicic",
                position: "Medical specialist in dermatology and venereology",
                company: "Her own practice in Munich",
                img: "./assets/img/speakers/Dr Tatjana pic.png",
                description: "She is an internationally leading speaker and trainer in aesthetic dermatology with a specific focus on botulinum toxin, fillers, laser and energy-based devices and cosmeceuticals. \n<br>Dr Pavicic is a member of several national and international dermatological and cosmetic societies. She is the General Secretary of the International Peeling Society, board member of the International Society for Derm Surgery and IMCAS academy and founding member of Merz Institute of Advanced Aesthetics.\n<br>Dr. Pavicic has extensively published in international journals both in dermatological and aesthetics fields since 2001. One of her main areas of research is filler complications and she has been involved in multiple studies with different molecules and compounds (botulinum toxin, dermal filler, native hyaluronic acid, dermocosmetics, lasers, peels etc.).",
                sessions: [
                    { title: "09.20 - 09.35", time: "Cheeck Augmentation Volumizer of Choice", room: "__", day: "14" },
                    { title: "Contouring the Jawline with calcium hydroxilapatite", time: "10.05 - 10.20", room: "__", day: "14" },
                    {
                        title: "Rheology of Fillers: How to Choose the Optimal Filler for Upper Face and Periorbital Area",
                        time: "10.50 - 11.05",
                        room: "__",
                        day: "14"
                    },
                    { title: "Panel Discussion: Innovation in Aesthetic Medicine", time: "14.00 - 17.30", room: "__", day: "14" },
                    { title: "Skin tightening with injectables: Overview of study data", time: "14.05 - 14.20", room: "__", day: "14" },
                    {
                        title: "Tecniques of lifting and recontouring with botulinum toxin (live injection session)",
                        time: "16.00 - 16.15",
                        room: "__",
                        day: "14"
                    },
                    { title: "Innovative approach of cellulite treatment", time: "16.30 - 16.45", room: "__", day: "14" },
                    { title: "Conclusion", time: "17.15 - 17.30", room: "__", day: "14" },
                    {
                        title: "My practice: how do I correct Caucasian face? (live injection session)",
                        time: "11.40 - 12.05",
                        room: "__",
                        day: "15"
                    }
                ]
            },
            {
                name: "Dr J Frevert BSc",
                position: "PhD",
                company: "",
                img: "./assets/img/speakers/Juergen pic.png",
                description: "Dr. J\u00FCrgen Frevert is Head of Botulinum Toxin Research at Merz Pharmaceuticals GmbH in Potsdam, Germany. \n<br> He studied chemistry at the Philipps-University, Marburg (Germany). After a postdoctoral fellowship at the University of California, Berkeley (USA) he started his career in 1983 at the Battelle Institute in Frankfurt (Germany). Between 1995 and 2006 Dr Frevert was Project Manager and later Chief Scientific Officer of BioteCon Therapeutics GmbH, and during this time he started a cooperation with Merz Pharmaceuticals to develop the pure clostridium botulinum neurotoxin as a pharmaceutical which was later licensed as Xeomin in 2005 in Germany for the treatment of cervical dystonia and blepharospasm and subsequently as Bocouture in the treatment of aesthetic indications.",
                sessions: [{ title: "Journey of Toxins: A century of evolution", time: "12.00 - 12.40", room: "__", day: "14" }]
            },
            {
                name: "Priv.-Doz. Sebastian",
                position: "Cotofana serves as Associate Professor for Anatomy",
                img: "./assets/img/speakers/Sebastian Cotofano pic.png",
                company: ", Department of Medical Education, Albany Medical College, Albany, New York, USA.",
                description: "He earned his PHD at Paracelsus Medical University Salzburg, Austria where he also headed the surgical courses as a Senior Post Doc. He obtained his MD from Ludwig-Maximilian-University Munich, Germany. \n<br> Key-note lecturer, LIVE-Dissector and supervisor on facial dissections hold on international conferences and  international Hands-On courses for Plastic Surgery, Dermatosurgery and Aesthetic Medicine where he specializes on the subject of facial anatomy, facial embryology and histology.\n<br> Dr. Cotofana is a frequent reviewer for more than 10 scientific journals and has (co-) authored many publications.",
                sessions: [
                    { title: "Midface Anatomy: Useful Hints", time: "09.10 - 09.20", room: "__", day: "14" },
                    { title: "Lower Face Anatomy: Useful Hints", time: "09.55 - 10.05", room: "__", day: "14" },
                    { title: "Upper face Anatomy: Useful Hints", time: "10.40 - 10.50", room: "__", day: "14" },
                    { title: "Pitfalls of hand anatomy", time: "10.20 - 10.30", room: "__", day: "15" }
                ]
            },
            {
                name: "Dr Nabila AZIB",
                position: "Plastic Surgeon",
                img: "./assets/img/speakers/Dr Nabila pic.png",
                company: "Rabat - MOROCCO",
                description: "After having the diploma of the Coll\u00E8ge de M\u00E9decine des H\u00F4pitaux de Paris in 2005, she became a member of Expert2Expert group. \n<br> Since 10 years, she is an international speaker and coauthor of different books. She has been Scientific Director of the ICAAM Congress in Dubai for several years. Now she is Scientific Coordinator of Face2F@ce Congress in Cannes.\n<br> As a Plastic Surgeon, she is able to give deep insights into anatomy and the related importance of experience-oriented treatments.",
                sessions: [
                    { title: "The secrets of periorbital injections", time: "11.05 - 11.25", room: "__", day: "14" },
                    { title: "Panel Discussion: Innovation in Aesthetic Medicine", time: "14.00 - 17.30", room: "__", day: "14" },
                    {
                        title: "Hands: exploring techniques of injection (live injection session)",
                        time: "10.30 - 10.40",
                        room: "__",
                        day: "15"
                    },
                    { title: "Hands: exploring injectable treatment options", time: "10.05 - 10.20", room: "__", day: "15" },
                    { title: "Arabic face: view from Rabat", time: "10.55 - 11.05", room: "__", day: "15" }
                ]
            },
        ];
        this.flag = false;
        this.indexNow = 0;
    }
    SpeakersComponent.prototype.ngOnInit = function () {
    };
    SpeakersComponent.prototype.fun = function () {
        this.owlElement.next([200]);
        //duration 200ms
    };
    SpeakersComponent.prototype.openDetials = function (i) {
        this.indexNow = i;
        this.flag = true;
    };
    return SpeakersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('owlElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__["OwlCarousel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__["OwlCarousel"]) === "function" && _a || Object)
], SpeakersComponent.prototype, "owlElement", void 0);
SpeakersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-speakers',
        template: __webpack_require__("../../../../../src/app/speakers/speakers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/speakers/speakers.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SpeakersComponent);

var _a;
//# sourceMappingURL=speakers.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/banner_01.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner_01.5f94506a07796b804fb8.png";

/***/ }),

/***/ "../../../../../src/assets/img/icon/footer-icon_16.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "footer-icon_16.8e14b3d36a6b1b0878b0.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map