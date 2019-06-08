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
    ConstantsService.prototype.getResume = function () {
        return "assets/GabrielSantiagoRESUME.pdf";
    };
    ConstantsService.prototype.getUniversity = function () {
        return [
            {
                name: "University of Puerto Rico at Mayaguez",
                bs: "Bachelor of Science in Computer Engineering",
                graddate: "May 2022",
                courses: [
                    'Basic Programming (algorithms)',
                    "Advanced Programming (Java, object oriented)",
                    "Fundamentals of Computing",
                    "Data Structures",
		    "Electric Systems Analisys I"
                ],
                gpa: "3.52"
            }
        ];
    };
    ConstantsService.prototype.getExperience = function () {
        return [
            {
                work: "General Electric Company",
                positions: ["Co-Op"],
                date: "Fall 2018 - Spring 2019",
                projects: [
                    {
                        name: null,
                        positions: null,
                        bullets: [
                       	    "Optimized real-time information by creating tools for the explicit access of manufacturing information",
			    "Designed a single automated flow of information and actions for sales order entry, manufacture planing, and inventory tracking",
                            "Implemented tools to accelerate development cycle"
                        ]
                    }, 
		    {
                        name: "Product Catalog Parser",
                        positions: null,
                        bullets: [
                            "With the product code list the necessary parts required to assemble the unit",
                            "Updates current inventory in warehouse"
                        ]
                    },
		    {
                        name: "Manufacture Planner Algorithm",
                        positions: null,
                        bullets: [
                            "Efficient order of manufacturing to avoid bottlenecks in the production line",
                            "Data Mining of historical data to feed into the algorithm"
                        ]
                    }
                ]
            },
	    {
                work: "MCS Healthcare Holdings, LLC",
                positions: ["Co-Op"],
                date: "Spring 2018 - Summer 2018",
                projects: [
                    {
                        name: "Account Password Manager",
                        positions: null,
                        bullets: [
                            "Angular, Flask server, SQL Servers, IBM’s AS400",
                            "Employees can reset their account passwords for internal applications",
                            "Designed to support multiple applications"
                        ]
                    },
		    {
                        name: "Audit Automation System",
                        positions: null,
                        bullets: [
                            "Angular, Flask server, SQL Servers, IBM’s AS400",
                            "Automated monthly security certification process",
			    "Predetermined reports of application accounts privileges in a wide arrage of formats",
			    "Customizable report generation"
                        ]
                    }
                ]
            },
	    {
                work: "Richport Solutions Inc.",
                positions: ["Consultant", "Lead Android Developer"],
                date: "Summer 2017 - Spring 2018",
                projects: [
                    {
                        name: "Marketing Uploader System",
                        positions: null,
                        bullets: [
                            "Involved in the Design of the complete system: front-end & back-end",
                            "Designed database schema",
                            "Webpage design"
                        ]
                    }
                ]
            },
            {
                work: "Research Experience for Undergraduates - North Carolina State University",
                positions: ["Undegraduate Research Student"],
                date: "Summer 2017",
                projects: [
                    {
                        name: "Center for Educational Informatics",
                        positions: null,
                        bullets: [
                            "Worked on an intelligent tutoring system based on a clustering technique of machine learning",
                            "Researched different methods to improve a clustering mode",
                            "Learned different techniques of unsupervised machine learning"
                        ]
                    }
                ]
            },
            {
                work: "APP DEV Team Undergraduate Research",
                positions: ["Lead Android Developer"],
                date: "Fall 2016 - Fall 2017",
                projects: [
                    {
                        name: "IAP App Development Team",
                        positions: null,
                        bullets: [
                            "Voting, registration, and profile managing system",
                            "Involved in designing of the system back-end",
                            "Product & System Development, designed database schema"
                        ]
                    }
                ]
            },
            {
                work: "Artificial Intelligence Undergraduate Research",
                positions: null,
                date: "Spring 2017 - Fall 2017",
                projects: [
                    {
                        name: null,
                        positions: null,
                        bullets: [
                            "Learned concepts and variations of machine learning algorithms",
                            "Long term goal is to develop a general purpose ML algorithm"
                        ]
                    }
                ]
            }
        ];
    };
    ConstantsService.prototype.getSkills = function () {
        return [
            {
                name: "Android Development",
                group: [
                    {
                        skill: "SQLite",
                        img: "assets/skills/android_dev/sqlite.png",
                        stars: "3"
                    },
                    {
                        skill: "Fabric Analytics",
                        img: "assets/skills/android_dev/fabric_analitics.png",
                        stars: "3"
                    },
                    {
                        skill: "User Xperience",
                        img: "assets/skills/android_dev/ux-design.png",
                        stars: "5"
                    },
                    {
                        skill: "Android Studio",
                        img: "assets/skills/android_dev/android_studio.png",
                        stars: "4"
                    }
                ]
            },
            {
                name: "Programming Languages",
                group: [
                    {
                        skill: "Java",
                        img: "assets/skills/programming_lang/Java-logo.png",
                        stars: "4"
                    },
                    {
                        skill: "C",
                        img: "assets/skills/programming_lang/C.png",
                        stars: "3"
                    },
                    {
                        skill: "TypeScript",
                        img: "assets/skills/programming_lang/ts.png",
                        stars: "3"
                    },
                    {
                        skill: "JavaScript",
                        img: "assets/skills/programming_lang/js_logo.png",
                        stars: "2"
                    },
                    {
                        skill: "SQL",
                        img: "assets/skills/programming_lang/logo-sql.png",
                        stars: "3"
                    }
                ]
            },
            {
                name: "Technical",
                group: [
                    {
                        skill: "Ubuntu (+2 years)",
                        img: "assets/skills/technical/Ubuntu.png",
                        stars: "4"
                    },
                    {
                        skill: "GitHub",
                        img: "assets/PNG/GitHub-Mark-120px-plus.png",
                        stars: "5"
                    },
                    {
                        skill: "Terminal",
                        img: "assets/skills/technical/terminal.png",
                        stars: "3"
                    },
                    {
                        skill: "Firebase Cloud Services",
                        img: "assets/skills/technical/firebase.ico",
                        stars: "4"
                    },
                    {
                        skill: "Software Design",
                        img: "assets/skills/technical/design.png",
                        stars: "3"
                    },
                    {
                        skill: "Product Development",
                        img: "assets/skills/technical/development.png",
                        stars: "4"
                    },
                    {
                        skill: "Database Design",
                        img: "assets/skills/programming_lang/logo-sql.png",
                        stars: "3"
                    }
                ]
            }
        ];
    };
    ConstantsService.prototype.getLinks = function () {
        return [
            { logo: "assets/PNG/GitHub-Mark-Light-120px-plus.png", link: "https://www.github.com/agSant01", name: "Github" },
            { logo: "assets/In-White-115px-TM.png", link: "https://www.linkedin.com/in/agSant01", name: "LinkedIn" },
            { logo: "assets/ic_file_download_white_48dp_2x.png", link: "assets/GabrielSantiagoRESUME.pdf", name: "Resume" }
        ];
    };
    return ConstantsService;
}());
ConstantsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ConstantsService);

//# sourceMappingURL=constanst.service.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gridwrapper {\n  width: 100%;\n  margin: 0 auto 0 auto;\n  text-align: center;\n  background-color: #696969;\n}\n\n.card {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 70px;\n  margin: 15px;\n  text-align: center;\n  overflow: hidden;\n}\n\n.container {\n  width: 60%;\n  margin: 0px auto 0px auto;\n  border-color: white;\n}\n\n.col {\n  background-color: #696969;\n}\n\n.img-wrapper {\n  position: absolute;\n  padding-top: 10%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n}\n\nh1.skill {\n  top: 80%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  position: relative;\n  display: inline-block;\n  color: white;\n  font-family: monospace;\n  font-size: 18px;\n  padding: 0px;\n  margin: 0px;\n}\n\nh2.header {\n  text-align: center;\n  background-color: #696969;\n  font-family: 'Open Sans', sans-serif !important;\n  margin: 0px;\n  padding-top: 42px;\n  color: white;\n  font-size: 54px;\n  font-weight: 100;\n}\n@media (max-width: 812px) {\n    h2.header {\n      font-size: 36px;\n    }\n}\n@media (max-width: 545px) {\n  .container {\n    width: 75%;\n    margin: 0px auto 0px auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col\">\n   <h2 class=\"header\">Contact</h2>\n   <hr class=\"container\">\n</div> -->\n<div class=\"gridwrapper\">\n  <div *ngFor=\"let link of links\" class=\"card\">\n    <a href=\"{{link.link}}\" target=\"_blank\" title=\"{{link.name}}\">\n       <img src=\"{{link.logo}}\" alt=\"{{link.name}}\" class=\"img-wrapper\"></a>\n    <h1 class=\"skill\">{{link.name}}</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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


var ContactComponent = (function () {
    function ContactComponent(constants) {
        this.constants = constants;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.links = this.constants.getLinks();
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/education/education.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section {\n  width: 100%;\n  padding: 1px 0px 20px 0px;\n  background-color: #fffbf4;\n}\n\n.school {\n  margin: 20px auto 20px auto;\n  padding-bottom: 20px 0px 20px 0px;\n  width: 55%;\n  font-family: 'Open Sans', sans-serif !important;\n}\n\n.graddate {\n  float: right;\n  margin: 0px auto 0px auto;\n  width: auto;\n  font-family: Times serif;\n  font-style: italic;\n}\n\n.optional {\n  display: inline;\n}\n\n.bs {\n  margin: 10px auto 10px auto;\n  padding-left: 10px;\n}\n\n.courses {\n  margin-top: 20px;\n  margin-bottom: 0px;\n  font-family: serif, cursive, monospace;\n  font-style: oblique;\n  font-size: 16px;\n  padding-left: 10px;\n}\n\n.col {\n   background-color: #fffbf4;\n}\n\nh2.header {\n  text-align: center;\n  font-family: 'Open Sans', sans-serif !important;\n  margin: 0px;\n  padding-top: 42px;\n  color: #696969;\n  background-color: #fffbf4;\n  font-size: 54px;\n  font-weight: 100;\n}\n\nul {\n  margin: 0px auto 10px auto !important;\n  width: auto;\n  padding: 0px 40px;\n}\n\nli {\n  margin: 4px auto 4px auto;\n  font-style: italic;\n  font-family: Helvetica, sans-serif;\n  font-size: 14px;\n}\n\n#name {\n  font-size: 18px;\n}\n\n.container {\n  width: 60%;\n  margin: 0px auto 0px auto;\n  border-color: #fffbf4\n}\n\n@media (max-width: 1000px) {\n  .optional {\n    display: none;\n  }\n  #name {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 812px) {\n    h2.header {\n      font-size: 36px;\n    }\n    .school {\n      width: 60vw;\n      font-size: 14px;\n    }\n    .optional {\n      display: inline;\n    }\n    .graddate {\n      position: relative;\n      float: none;\n      padding: 10px;\n    }\n}\n@media (max-width: 545px) {\n  .bs {\n    text-align: left;\n  }\n  .container {\n    width: 75%;\n    margin: 0px auto 0px auto;\n  }\n}\n\n@media (max-width: 480px) {\n    .school {\n      width: 75vw;\n      font-size: 14px;\n    }\n}\n\n@media (max-width: 358px) {\n    .school {\n      width: 80vw;\n      font-size: 14x;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <h2 class=\"header\">Education</h2>\n  <hr class=\"container\">\n</div>\n<div class=\"section\">\n  <div *ngFor=\"let univ of university\" class=\"school\">\n    <div class=\"school-name\">\n      <span id=\"name\">\n        <b>{{univ.name}}</b>\n      </span>\n      <div class=\"graddate\">\n          <b>\n          <span class=\"optional\">Expected Graduation: </span>\n          {{univ.graddate}}\n        </b>\n      </div>\n      <div class=\"bs\"><i>{{univ.bs}}</i></div>\n      <p class=\"courses\"><b>Comp. Eng. Related Courses: </b></p>\n      <ul>\n        <li *ngFor=\"let course of univ.courses\">{{course}}</li>\n      </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
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


var EducationComponent = (function () {
    function EducationComponent(constants) {
        this.constants = constants;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.university = this.constants.getUniversity();
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'education',
        template: __webpack_require__("../../../../../src/app/education/education.component.html"),
        styles: [__webpack_require__("../../../../../src/app/education/education.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */]) === "function" && _a || Object])
], EducationComponent);

var _a;
//# sourceMappingURL=education.component.js.map

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section {\n  width: 100%;\n  padding: 1px 0px 1px 0px;\n  background-color: #fffbf4;\n}\n.courses {\n  margin-top: 20px;\n  margin-bottom: 0px;\n  font-family: serif, cursive, monospace;\n  font-style: oblique;\n  font-size: 16px;\n  padding-left: 10px;\n}\n\n.col {\n  background-color: #fffbf4;\n}\n.date {\n  float: right;\n  margin: 0px auto 0px auto;\n  width: auto;\n  font-family: sans-serif;\n  font-size: 14px;\n}\n.experience {\n  margin: 60px auto 40px auto;\n  width: 55%;\n  font-family: 'Open Sans', sans-serif !important;\n  font-size: 16px;\n}\n.projects {\n  margin: 10px auto 10px auto;\n  padding-left: 24px;\n}\n.project-name {\n  font-family: Helvetica, sans-serif;\n}\nul.positions {\n  padding: 0px;\n}\n\nli.positions {\n  display: inline;\n  padding: 8px;\n  padding-left: 0px;\n  font-family: serif;\n  text-decoration: underline;\n}\n\nh2.header {\n  text-align: center;\n  font-family: 'Open Sans', sans-serif !important;\n  margin: 0px;\n  padding-top: 42px;\n  color: #696969;\n  font-size: 54px;\n  font-weight: 100;\n}\n\nul {\n  margin: 0px auto 10px auto !important;\n  width: auto;\n  padding: 0px 20px;\n}\n\nli {\n  margin: 4px auto 4px auto;\n  font-style: italic;\n  font-family: Helvetica, sans-serif;\n  font-size: 14px;\n}\n\n.name {\n  font-size: 18px;\n  padding-right: 14px;\n}\n\n.container {\n  width: 60%;\n  margin: 0px auto 0px auto;\n  border-color: #fffbf4\n}\n\n@media (max-width: 1000px) {\n  .optional {\n    display: none;\n  }\n  .name {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 812px) {\n    h2.header {\n      font-size: 36px;\n    }\n    .experience {\n      width: 60vw;\n      font-size: 16px;\n    }\n    .optional {\n      display: inline;\n    }\n    .date {\n      position: relative;\n      float: none;\n      padding-bottom: 4px;\n      font-size: 14px;\n    }\n}\n@media (max-width: 545px) {\n  .container {\n    width: 75%;\n    margin: 0px auto 0px auto;\n  }\n}\n\n@media (max-width: 480px) {\n    .experience {\n      width: 75vw;\n      font-size: 16px;\n    }\n}\n\n@media (max-width: 358px) {\n    .school {\n      width: 80vw;\n      font-size: 14px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <h2 class=\"header\">Experience</h2>\n  <hr class=\"container\">\n</div>\n<div class=\"section\">\n  <div *ngFor=\"let experience of experiences\" class=\"experience\">\n    <div class=\"work-name\">\n      <div class=\"date\"><b>{{experience.date}}</b></div>\n      <div class=\"name\"><b>{{experience.work}}</b></div>\n      <ul class=\"positions\">\n        <li class=\"positions\" *ngFor=\"let position of experience.positions\"><b>{{position}}</b></li>\n      </ul>\n\n      <div class=\"projects\" *ngFor=\"let project of experience.projects\">\n        <div class=\"project-name\"><b>{{project.name}}</b></div>\n        <ul>\n          <li *ngFor=\"let bul of project.bullets\">{{bul}}</li>\n        </ul>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
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


var ExperienceComponent = (function () {
    function ExperienceComponent(constants) {
        this.constants = constants;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.experiences = this.constants.getExperience();
    };
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'experience',
        template: __webpack_require__("../../../../../src/app/experience/experience.component.html"),
        styles: [__webpack_require__("../../../../../src/app/experience/experience.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */]) === "function" && _a || Object])
], ExperienceComponent);

var _a;
//# sourceMappingURL=experience.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner {\n  background-color: black;\n  float: left;\n  color: white;\n  margin-top: 90px;\n  padding: 10px 20px 10px 20px;\n  z-index: 20;\n  font-family: Times, serif;\n  font-style: italic;\n}\n\n.banner:hover {\n  background-color: #d2d2d2\n}\n.center {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  font-family: 'Open Sans', sans-serif;\n  color: white;\n}\n.landing {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/main_background.jpg") + ");\n  /* Full height */\n  /*height: 100%; !important\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  height: 100vh;\n  opacity: 0.7;\n}\n.banner>a {\n  color: white;\n  border-bottom: none;\n}\n#name {\n  font-size: 48px;\n  background-color: black;\n  padding: 16px;\n  padding-bottom: 12px;\n  padding-top: 12px;\n  margin: 0px;\n}\n\n#text {\n  font-size: 26px;\n  background-color: black;\n  margin-left: 15%;\n  margin-right: 15%;\n  font-weight: 100;\n}\n\n\n@media (max-width: 812px) {\n    #name {\n      font-size: 42px;\n\n    }\n    #text {\n      font-size: 22px;\n    }\n}\n@media (max-width: 480px) {\n    #name {\n      font-size: 42px;\n    }\n    #text {\n      padding-left: 12px;\n      padding-right: 12px;\n    }\n}\n\n@media (max-width: 358px) {\n    #name {\n      font-size: 42px;\n    }\n    #text {\n      visibility: hidden;\n    }\n}\n", ""]);

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


var LandingComponent = (function () {
    function LandingComponent(constants) {
        this.constants = constants;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.resume = this.constants.getResume();
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__constanst_service__["a" /* ConstantsService */]) === "function" && _a || Object])
], LandingComponent);

var _a;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n    margin: 0px;\n    margin-right: 0px;\n    margin-right: auto;\n    padding: 0px;\n    overflow: hidden;\n    background-color: #333;\n}\n\nli {\n    font-family: sans-serif;\n    float: left;\n}\n\nli a {\n    display: block;\n    color: white;\n    float: left;\n   text-align: center;\n   padding: 14px 16px;\n   text-decoration: none;\n}\n\n/* Change the link color to #111 (black) on hover */\nli a:hover {\n    background-color: #111;\n}\n.navbar {\n  overflow: hidden;\n    background-color: #333;\n    position: fixed ; /* Set the navbar to fixed position */\n    top: 0; /* Position the navbar at the top of the page */\n    width: 100%; /* Full width */\n    z-index: 10;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top shadow\">\n    <div class=\"container\">\n          <ul>\n              <li class=\"nav-item\"><a href=\"#education\">Education</a></li>\n              <li class=\"nav-item\"><a href=\"#experience\">Experience</a></li>\n              <li class=\"nav-item\"><a href=\"#skills\">Skills</a></li>\n              <li class=\"nav-item\"><a href=\"#contact\">Contact</a></li>\n          </ul>\n    </div>\n</nav>\n<div class=\"main\">\n  <landing></landing>\n  <education id=\"education\"></education>\n  <experience id=\"experience\"></experience>\n  <skills id=\"skills\"></skills>\n  <contact id=\"contact\"></contact>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__experience_experience_component__ = __webpack_require__("../../../../../src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constanst_service__ = __webpack_require__("../../../../../src/app/constanst.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__skills_stars_component__ = __webpack_require__("../../../../../src/app/skills/stars.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_5__education_education_component__["a" /* EducationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__experience_experience_component__["a" /* ExperienceComponent */],
            __WEBPACK_IMPORTED_MODULE_7__skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_10__skills_stars_component__["a" /* StarsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdGridListModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__constanst_service__["a" /* ConstantsService */]],
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
exports.push([module.i, ".gridwrapper {\n  width: 100%;\n  padding: 40px 0px 40px 0px;\n  margin: 0px auto 0px auto;\n  text-align: center;\n  background-color: #fffbf4;\n  vertical-align: top;\n}\n.card {\n  position: relative;\n  vertical-align: top;\n  display: inline-block;\n  width: 280px;\n  height: auto;\n  margin: 15px;\n  text-align: center;\n  overflow: hidden;\n}\n.container {\n  width: 60%;\n  margin: 0px auto 0px auto;\n  border-color: #fffbf4\n}\n.col {\n   background-color: #fffbf4;\n}\n.img-wrapper {\n  position: absolute;\n  padding-top: 10%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n}\n.skill {\n  text-align: left;\n  height: 20px;\n  margin: 1px 0px 18px 0px;\n}\n.skillname {\n  margin: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.stars {\n  float: right;\n}\n\nimg {\n  float: left;\n  margin: 0px 10px 0px 10px;\n  height: 30px;\n  width: 30px;\n}\nh1.group {\n  top: 80%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  position: relative;\n  display: inline-block;\n  color: black;\n  font-family: monospace;\n  font-size: 18px;\n  margin-bottom: 0px;\n}\nh2.header {\n  text-align: center;\n  background-color: #fffbf4;\n  font-family: 'Open Sans', sans-serif !important;\n  margin: 0px;\n  padding-top: 42px;\n  color: #696969;\n  font-size: 54px;\n  font-weight: 100;\n}\n@media (max-width: 812px) {\n    h2.header {\n      font-size: 36px;\n    }\n}\n@media (max-width: 545px) {\n  .container {\n    width: 75%;\n    margin: 0px auto 0px auto;\n  }\n}\n@media (max-width: 480px) {\n    .experience {\n      width: 75vw;\n      font-size: 16px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <h2 class=\"header\">Skills</h2>\n  <hr class=\"container\">\n</div>\n<div class=\"gridwrapper\">\n  <div *ngFor=\"let skill of skills\" class=\"card\">\n    <h1 class=\"group\">{{skill.name}}</h1>\n    <div *ngFor=\"let group of skill.group\" class=\"skill\">\n      <img src=\"{{group.img}}\">\n      <div class=\"skillname\">{{group.skill}}\n         <div class=\"stars\">\n           <stars star={{group.stars}}></stars>\n         </div>\n       </div>\n    </div>\n  </div>\n</div>\n"

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
        this.skills = this.constants.getSkills();
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

/***/ "../../../../../src/app/skills/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
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

var StarsComponent = (function () {
    function StarsComponent() {
    }
    StarsComponent.prototype.ngOnInit = function () {
        this.s = this.getStars();
    };
    StarsComponent.prototype.getStars = function () {
        var s = "";
        for (var i = 0; i < this.star; i++) {
            s = s + "★";
        }
        return s;
    };
    return StarsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], StarsComponent.prototype, "star", void 0);
StarsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'stars',
        template: '<p> {{s}} </p>',
        styles: ["\n    p {\n      margin: 0px;\n      padding: 0px;\n   }"
        ],
    })
], StarsComponent);

//# sourceMappingURL=stars.component.js.map

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
