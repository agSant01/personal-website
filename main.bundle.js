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

/***/ "../../../../../src/app/constanst.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConstantsService = (function () {
    function ConstantsService() {
    }
    ConstantsService.prototype.getLinks = function () {
        return [
            { logo: "../assets/PNG/GitHub-Mark-Light-120px-plus.png", link: "https://www.github.com/agSant01", name: "Github" },
            { logo: "../assets/In-White-115px-TM.png", link: "https://www.linkedin.com/in/agSant01", name: "LinkedIn" },
            { logo: "../assets/ic_file_download_white_48dp_2x.png", link: "../assets/GabrielSantiagoRESUME.pdf", name: "Resume" }
        ];
    };
    return ConstantsService;
}());
ConstantsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ConstantsService);

//# sourceMappingURL=constanst.service.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/main_background.jpg") + ");\n      /* Full height */\n    /*height: 100%; !important\n\n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    height: 100vh;\n    opacity: 0.7;\n}\n.center {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  font-family: 'Open Sans', sans-serif;\n  color: white;\n}\n#name {\n  font-size: 48px;\n  background-color: black;\n  padding: 16px;\n  padding-bottom: 12px;\n  padding-top: 12px;\n  margin: 0px;\n}\n\n#text {\n  font-size: 26px;\n  background-color: black;\n  margin-left: 15%;\n  margin-right: 15%;\n  font-weight: 100;\n}\n\n\n@media (max-width: 812px) {\n    #name {\n      font-size: 36px;\n\n    }\n    #text {\n      font-size: 22px;\n    }\n}\n@media (max-width: 480px) {\n    #name {\n      font-size: 28px;\n    }\n    #text {\n      padding-left: 12px;\n      padding-right: 12px;\n    }\n}\n\n@media (max-width: 358px) {\n    #name {\n      font-size: 28px;\n    }\n    #text {\n      visibility: hidden;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"landing\">\n  <div class=\"center\">\n      <h1 id=\"name\">Gabriel Santiago</h1>\n      <div id=\"text\">Interactive Resume</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
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

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n}\n\nli {\n    font-family: sans-serif;\n    float: left;\n}\n\nli a {\n    display: block;\n    color: white;\n    float: left;\n   text-align: center;\n   padding: 14px 16px;\n   text-decoration: none;\n}\n\n/* Change the link color to #111 (black) on hover */\nli a:hover {\n    background-color: #111;\n}\n.navbar {\n  overflow: hidden;\n    background-color: #333;\n    position: fixed ; /* Set the navbar to fixed position */\n    top: 0; /* Position the navbar at the top of the page */\n    width: 100%; /* Full width */\n    z-index: 10;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar\">\n    <div class=\"container\">\n          <ul routerLinkActive=\"active\">\n              <li class=\"nav-item\"><a href=\"#skills\">Contact</a></li>\\\n          </ul>\n    </div>\n</nav>\n<div class=\"main\">\n  <landing></landing>\n  <skills id=\"skills\"></skills>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/app.component.ts":
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'nav-bar',
        template: __webpack_require__("../../../../../src/app/nav-bar/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/nav-bar/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constanst_service__ = __webpack_require__("../../../../../src/app/constanst.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdGridListModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_5__skills_skills_component__["a" /* SkillsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdGridListModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__constanst_service__["a" /* ConstantsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gridwrapper {\n  width: 100%;\n  margin: 0 auto 0 auto;\n  text-align: center;\n  background-color: #696969;\n}\n\n.card {\n  position: relative;\n  display: inline-block;\n  width: 250px;\n  height: 200px;\n  margin: 30px;\n  text-align: center;\n  overflow: hidden;\n}\n\n.img-wrapper {\n  position: absolute;\n  padding-top: 10%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: inline-block;\n  width: auto;\n  height: auto;\n}\n\nh1.skill {\n  top: 80%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  position: relative;\n  display: inline-block;\n  color: white;\n  font-family: monospace;\n  font-size: 18px;\n}\n\nh2.header {\n  text-align: center;\n  background-color: #696969;\n  font-family: 'Open Sans', sans-serif !important;\n  margin: 0px;\n  padding-top: 42px;\n  color: white;\n  font-size: 54px;\n  font-weight: 100;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"header\">Contact</h2>\n<div class=\"gridwrapper\">\n  <div *ngFor=\"let link of links\" class=\"card\">\n    <a href=\"{{link.link}}\" target=\"_blank\" title=\"{{link.name}}\"> <img src=\"{{link.logo}}\" alt=\"{{link.name}}\" class=\"img-wrapper\"></a> \n    <h1 class=\"skill\">{{link.name}}</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constanst_service__ = __webpack_require__("../../../../../src/app/constanst.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = (function () {
    function SkillsComponent(constants) {
        this.constants = constants;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.links = this.constants.getLinks();
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'skills',
        template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */]) === "function" && _a || Object])
], SkillsComponent);

var _a;
//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/assets/main_background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "main_background.2193644ece3cbfc0f88b.jpg";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_nav_bar_app_module__ = __webpack_require__("../../../../../src/app/nav-bar/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_nav_bar_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map