(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\React native\AngularDemos\CitiBridge-master\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'YahooFinance';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Yfdg":
/*!****************************************!*\
  !*** ./src/app/http-client.service.ts ***!
  \****************************************/
/*! exports provided: User, MarketCapService, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketCapService", function() { return MarketCapService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class User {
    constructor(userID, username, password) {
        this.userID = userID;
        this.username = username;
        this.password = password;
    }
}
class MarketCapService {
    constructor() {
        perc_ChangeIn_Price: Number;
        stockPrice: Number;
        stock_Symbol: String;
    }
}
class HttpClientService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.baseURL = "http://localhost:8085/";
    }
    getUsers() {
        console.log("test call");
        return this.httpClient.get('http://localhost:8085/users');
    }
    /*getUserDetails(username,password)
     {
       return this.httpClient.post('http://localhost:8086/login',{
         username,
         password
        }).subscribe(data=>{
          console.log(data, "is what we got from the server")
        })
     }*/
    login(data) {
        console.log("I am a server");
        return this.httpClient.post('http://localhost:8085/login', data, { responseType: 'text' });
    }
    /*login(data)
    {
     return this.httpClient.post('http://localhost:8085/login',data)
    }*/
    getMarketCap(start, end) {
        // console.log("test call");
        // console.log(start)
        // console.log(end)
        if (start == 45000 && end == 100000)
            return this.httpClient.get('http://localhost:8085/stocks/45000/100000');
        if (start == 100000 && end == 300000)
            return this.httpClient.get('http://localhost:8085/stocks/100000/300000');
        if (start == 300000 && end == 600000)
            return this.httpClient.get('http://localhost:8085/stocks/300000/600000');
        else
            return this.httpClient.get('http://localhost:8085/stocks/600000/1500000');
    }
    saveSelectedStock(userStock) {
        const headers = { 'content-type': 'application/json' };
        // var requestHeader = { headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'No-Auth': 'False' })};
        //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        //const httpOptions = {headers: new HttpHeaders({'auth': 'false'})};
        const body = JSON.stringify(userStock);
        return this.httpClient.post(this.baseURL + 'save-stocks', body, { 'headers': headers, responseType: 'text' });
        // return this.httpClient.post<string>(this.baseURL + 'save-stocks', body , { responseType:'text' as 'json'});
    }
    getEmployees() {
        //console.log("test call");
        return this.httpClient.get('http://localhost:8085/fetch-stocks/' + _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"].user_id);
    }
}
HttpClientService.ɵfac = function HttpClientService_Factory(t) { return new (t || HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HttpClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpClientService, factory: HttpClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "oYre");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _userstock_userstock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userstock/userstock.component */ "guYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _userstock_userstock_component__WEBPACK_IMPORTED_MODULE_7__["UserstockComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "guYt":
/*!**************************************************!*\
  !*** ./src/app/userstock/userstock.component.ts ***!
  \**************************************************/
/*! exports provided: UserstockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserstockComponent", function() { return UserstockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-client.service */ "Yfdg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UserstockComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.perc_ChangeIn_Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.stockPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.stock_Symbol);
} }
class UserstockComponent {
    constructor(httpClientService) {
        this.httpClientService = httpClientService;
    }
    ngOnInit() {
        this.httpClientService.getEmployees().subscribe(response => this.handleSuccessfulResponse(response));
    }
    handleSuccessfulResponse(resp) {
        this.employees = resp;
    }
}
UserstockComponent.ɵfac = function UserstockComponent_Factory(t) { return new (t || UserstockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_client_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"])); };
UserstockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserstockComponent, selectors: [["app-userstock"]], decls: 25, vars: 1, consts: [["id", "img1", "src", "assets/images/table.png", "alt", "HomePage"], ["id", "welcome"], ["border", "1"], [4, "ngFor", "ngForOf"]], template: function UserstockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MARKET CAP BASED TRADE RECOMMENDATION SYSTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Stock Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Stock Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Stock Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserstockComponent_tr_24_Template, 7, 3, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".stockbtn[_ngcontent-%COMP%] {\r\n    background: #0096F9 0% 0% no-repeat padding-box;\r\n    border-color: #f1f1f1;\r\n    border-width: 1px;\r\n    box-shadow: 0px 3px 6px #f1f1f1;\r\n    border-radius: 10px;\r\n    opacity: 1;\r\n    color: #FFF;\r\n    padding: 7px 20px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    font-size: 16px;\r\n    font-family: \"Roboto\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n#viewbtn[_ngcontent-%COMP%] {\r\n    padding: 7px 20px;\r\n    color: #ffffff;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n}\r\n#img1[_ngcontent-%COMP%]{\r\n    top: 116px;\r\n    left: 44px;\r\n    width: 120px;\r\n    height: 150px;\r\n    opacity: 1;\r\n    float: left;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n}\r\n#welcome[_ngcontent-%COMP%] {\r\n    top: 139px;\r\n    text-align: left;\r\n    letter-spacing: 0px;\r\n    color: #000000;\r\n    opacity: 1;\r\n    margin-left: 10px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    background-color: #0096f9;\r\n    color: #FFF;\r\n    padding: 5px 5px ;\r\n    display: block;\r\n    font-size: 2em;\r\n    font-family: \"Roboto\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    margin-top: 0%;\r\n    text-align: center;\r\n  }\r\nh4[_ngcontent-%COMP%]{\r\n      font-family: \"Roboto\";\r\n      font-size: 16px;\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      padding-left: 10px;\r\n  }\r\ntable[_ngcontent-%COMP%] {\r\n      background-color: #f1f1f1;\r\n      border-color: #fff;\r\n      border-width: 0.5px;\r\n      padding-left: 10px;\r\n      font-family: \"Roboto\";\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 16px;\r\n      border-radius: 10px;\r\n  }\r\n.tableinput[_ngcontent-%COMP%] {\r\n      background-color: #f1f1f1;\r\n      border-width: 0px;\r\n      padding: 5px 10px;\r\n      font-family: \"Roboto\";\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      font-style: normal;\r\n  }\r\nth[_ngcontent-%COMP%] {\r\n      background-color: #0096f9;\r\n      color: #fff;\r\n      padding: 10px 20px;\r\n      font-weight:500;\r\n      \r\n  }\r\n#thead1[_ngcontent-%COMP%] {\r\n      border-top-left-radius: 10px;\r\n  }\r\n#thead2[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 10px;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    padding: 5px 10px;\r\n}\r\n#emptythead[_ngcontent-%COMP%] {\r\n    background-color: #FFF;\r\n    border-width: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzdG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0NBQStDO0lBQy9DLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBRUE7TUFDSSxxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsa0JBQWtCO0VBQ3RCO0FBQ0E7TUFDSSx5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLG1CQUFtQjtFQUN2QjtBQUVBO01BQ0kseUJBQXlCO01BQ3pCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO0VBQ3RCO0FBQ0E7TUFDSSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixlQUFlOztFQUVuQjtBQUNBO01BQ0ksNEJBQTRCO0VBQ2hDO0FBRUE7SUFDRSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJ1c2Vyc3RvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9ja2J0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5NkY5IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI2YxZjFmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbiN2aWV3YnRuIHtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuI2ltZzF7XHJcbiAgICB0b3A6IDExNnB4O1xyXG4gICAgbGVmdDogNDRweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuI3dlbGNvbWUge1xyXG4gICAgdG9wOiAxMzlweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuaDEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZmOTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBoNHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC50YWJsZWlucHV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG4gIHRoIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZmOTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICBcclxuICB9XHJcbiAgI3RoZWFkMSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAjdGhlYWQyIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG50ZHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG4jZW1wdHl0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "oYre":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "vtpD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-client.service */ "Yfdg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UsersComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersComponent_tr_32_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const user_r1 = ctx.$implicit; const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.saveStock(user_r1.stock_Symbol, user_r1.stockPrice, user_r1.perc_ChangeIn_Price, _r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r1.stock_Symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r1.stockPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r1.perc_ChangeIn_Price);
} }
class UsersComponent {
    constructor(httpClientService, login, router) {
        this.httpClientService = httpClientService;
        this.login = login;
        this.router = router;
        this.saved = " ";
        this.msgTrue = false;
    }
    ngOnChanges() {
        this.userID = this.id;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    /*let resp = this.httpClientService.saveSelectedStock(this.saveStock);
resp.subscribe(data => {
  this.saved = data;
});*/
    random1(start, end) {
        this.httpClientService.getMarketCap(start, end).subscribe(response => this.handleSuccessfulResponse(response));
    }
    handleSuccessfulResponse(resp) {
        this.marketcaps = resp;
    }
    rabdom3() {
        if (this.formGroup.valid) {
            UsersComponent.quantity = this.formGroup.value;
        }
    }
    /*lgbtnclick(stock_Symbol:string,stockPrice:number,perc_ChangeIn_Price:number) {
      //this.msgTrue=true;
      //alert(UsersComponent.quantity);
      this.stockQuantity = this.rabdom3();
      console.log(this.stockQuantity);
      this.saveStock(stock_Symbol,stockPrice,perc_ChangeIn_Price,this.stockQuantity);
    }*/
    saveStock(stock_Symbol, stockPrice, perc_ChangeIn_Price, stock_quantity) {
        //const user_id=this.login.formGroup.controls['user_id'].value
        //const user_id=this.login.formGroup.getRawValue()['user_id'];
        //const user_id=this.login.id;
        //const user_id=LoginComponent.user_id;
        // const user_id =this.login.formGroup.get("user_id").value;
        //this.msgTrue=true;
        //var stockQuantity:number;
        if (this.formGroup.valid) {
            UsersComponent.quantity = this.formGroup.value.quantity;
        }
        const saveStock = {
            "user_id": _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"].user_id,
            "Symbol": stock_Symbol,
            "stockprice": stockPrice,
            "quantity": stock_quantity
        };
        console.log(saveStock);
        //var person = prompt("Please enter your name: ", "Username");
        let resp = this.httpClientService.saveSelectedStock(saveStock);
        resp.subscribe(data => {
            console.log(data);
            //this.saved = data;
            //console.log(this.saved);
        });
        console.log(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"].user_id);
    }
    random2() {
        this.router.navigate(["userstock"]);
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], inputs: { id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 38, vars: 1, consts: [["id", "img1", "src", "assets/images/saved.png", "alt", "HomePage"], ["id", "welcome"], ["id", "button1", 1, "stockbtn", 3, "click"], ["id", "button2", 1, "stockbtn", 3, "click"], ["id", "button3", 1, "stockbtn", 3, "click"], ["id", "button4", 1, "stockbtn", 3, "click"], ["border", "1"], ["id", "row1"], ["id", "thead1"], ["id", "thead2"], ["id", "emptythead"], [4, "ngFor", "ngForOf"], ["id", "viewbtn", "btn", "", 1, "stockbtn", 3, "click"], ["type", "number", "name", "quantity", "id", "stockQuantity", 1, "tableinput"], ["stockQuantity", ""], [2, "background-color", "#fff", "border-width", "0px"], [1, "stockbtn", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "MARKET CAP BASED TRADE RECOMMENDATION SYSTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Choose the amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_9_listener() { return ctx.random1(45000, 100000); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Rs. 45,000 to Rs. 1 lac");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_11_listener() { return ctx.random1(100000, 300000); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Rs. 1 lac to Rs. 3 lacs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_13_listener() { return ctx.random1(300000, 600000); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Rs. 3 lacs to Rs. 6 lacs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_15_listener() { return ctx.random1(600000, 1500000); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Rs. 6 lacs to Rs. 15 lacs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "STOCK SYMBOL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "STOCK PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "% CHANGE IN PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "QUANTITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, UsersComponent_tr_32_Template, 13, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_36_listener() { return ctx.random2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "VIEW STOCKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.marketcaps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".stockbtn[_ngcontent-%COMP%] {\r\n    background: #0096F9 0% 0% no-repeat padding-box;\r\n    border-color: #f1f1f1;\r\n    border-width: 1px;\r\n    box-shadow: 0px 3px 6px #f1f1f1;\r\n    border-radius: 10px;\r\n    opacity: 1;\r\n    color: #FFF;\r\n    padding: 7px 20px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    font-size: 16px;\r\n    font-family: \"Roboto\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n#viewbtn[_ngcontent-%COMP%] {\r\n    padding: 7px 20px;\r\n    color: #ffffff;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n}\r\n#img1[_ngcontent-%COMP%]{\r\n    top: 116px;\r\n    left: 44px;\r\n    width: 100px;\r\n    height: 84px;\r\n    opacity: 1;\r\n    float: left;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n}\r\n#welcome[_ngcontent-%COMP%] {\r\n    top: 139px;\r\n    text-align: left;\r\n    letter-spacing: 0px;\r\n    color: #000000;\r\n    opacity: 1;\r\n    margin-left: 10px;\r\n    font-family: \"Roboto\";\r\n    font-size: 24px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    background-color: #0096f9;\r\n    color: #FFF;\r\n    padding: 5px 5px ;\r\n    display: block;\r\n    font-family: \"Roboto\";\r\n    font-size: 24px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    text-align: center;\r\n  }\r\nh4[_ngcontent-%COMP%]{\r\n      font-family: \"Roboto\";\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      padding-left: 10px;\r\n  }\r\ntable[_ngcontent-%COMP%] {\r\n      background-color: #f1f1f1;\r\n      border-color: #fff;\r\n      border-width: 0.5px;\r\n      padding-left: 10px;\r\n      font-family: \"Roboto\";\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-size: 16px;\r\n      border-radius: 10px;\r\n  }\r\n.tableinput[_ngcontent-%COMP%] {\r\n      background-color: #f1f1f1;\r\n      border-width: 0px;\r\n      padding: 5px 10px;\r\n      font-family: \"Roboto\";\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      font-style: normal;\r\n  }\r\nth[_ngcontent-%COMP%] {\r\n      background-color: #0096f9;\r\n      color: #fff;\r\n      padding: 10px 20px;\r\n      font-weight:500;\r\n      \r\n  }\r\n#thead1[_ngcontent-%COMP%] {\r\n      border-top-left-radius: 10px;\r\n  }\r\n#thead2[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 10px;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    padding: 5px 10px;\r\n}\r\n#emptythead[_ngcontent-%COMP%] {\r\n    background-color: #FFF;\r\n    border-width: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQ0FBK0M7SUFDL0MscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFFQTtNQUNJLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGtCQUFrQjtFQUN0QjtBQUNBO01BQ0kseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixtQkFBbUI7RUFDdkI7QUFFQTtNQUNJLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGtCQUFrQjtFQUN0QjtBQUNBO01BQ0kseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsZUFBZTs7RUFFbkI7QUFDQTtNQUNJLDRCQUE0QjtFQUNoQztBQUVBO0lBQ0UsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckIiLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9ja2J0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5NkY5IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI2YxZjFmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbiN2aWV3YnRuIHtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuI2ltZzF7XHJcbiAgICB0b3A6IDExNnB4O1xyXG4gICAgbGVmdDogNDRweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogODRweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jd2VsY29tZSB7XHJcbiAgICB0b3A6IDEzOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5oMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmY5O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaDR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlaW5wdXQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbiAgdGgge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmY5O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICAgIFxyXG4gIH1cclxuICAjdGhlYWQxIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gICN0aGVhZDIge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbnRke1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbiNlbXB0eXRoZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "oYre");
/* harmony import */ var _userstock_userstock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userstock/userstock.component */ "guYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'userstock', component: _userstock_userstock_component__WEBPACK_IMPORTED_MODULE_3__["UserstockComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-client.service */ "Yfdg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginComponent {
    constructor(httpClientService, router) {
        this.httpClientService = httpClientService;
        this.router = router;
        this.msgTrue = false;
    }
    ngOnInit() {
        this.initForm();
    }
    /*loginUser(event)
    {
      event.preventDefault();
      const target=event.target;
      const username=target.querySelector('#username').value
      const password=target.querySelector('#password').value
      this.httpClientService.getUserDetails(username,password);
  
      console.log(username,password);
    }*/
    initForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
    }
    loginProcess() {
        //var id;
        if (this.formGroup.valid) {
            this.httpClientService.login(this.formGroup.value).subscribe(result => {
                console.log(result);
                if (result == "Login Successful!") {
                    alert(result);
                    LoginComponent.user_id = this.formGroup.value.user_id;
                    //id=this.user_id;
                    console.log("user id is" + LoginComponent.user_id);
                    this.id = this.formGroup.value.user_id;
                    console.log(this.id);
                    this.msgTrue = true;
                    this.router.navigate(["users"]);
                }
                else if (result == "Invalid credentials. Try again") {
                    alert(result);
                    this.msgTrue = false;
                    this.router.navigate(['login']);
                }
            });
        }
    }
    setUserId() {
        return this.id;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 1, consts: [["id", "img1", "src", "assets/images/login.png", "alt", "Market Cap"], [3, "formGroup", "ngSubmit"], ["id", "enter_user", 1, "label_login"], ["type", "text", "placeholder", "User ID", "formControlName", "user_id"], ["id", "enter_password", 1, "label_login"], ["type", "password", "placeholder", "**********", "formControlName", "password"], ["type", "submit", "id", "login_button", "value", "LOGIN", 1, "center"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "MARKET CAP BASED TRADE RECOMMENDATION SYSTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.loginProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Enter User ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enter Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Audiowide);\r\n\r\n[_ngcontent-%COMP%]::selection {\r\n    background: #0096f9;\r\n    text-shadow: none;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  font: inherit;\r\n  font-size: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  vertical-align: baseline;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background: #f1f1f1;\r\n  color: #000;\r\n  font-family: \"Roboto\", \"Open Sans\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\r\n  font-size: 12px;\r\n  line-height: 1;\r\n}\r\n\r\n#img1[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 504px;\r\n    height: 421px;\r\n    left: 150px;\r\n    top: 150px;\r\n    overflow: visible;\r\n}\r\n\r\n.label_login[_ngcontent-%COMP%] {\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 16px;\r\n    padding: 10px 0 0 0;\r\n}\r\n\r\n.background-wrap[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  overflow: hidden;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background: url('https://myrror.co/etc/419062774_1385132057.jpg');\r\n  background-size: cover;\r\n  filter: blur(10px);\r\n  height: 105%;\r\n  position: relative;\r\n  width: 105%;\r\n  right: -2.5%;\r\n  left: -2.5%;\r\n  top: -2.5%;\r\n  bottom: -2.5%;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  cursor: default;\r\n  outline: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    background-color: #0096f9;\r\n    color: #FFF;\r\n    padding: 5px 5px ;\r\n    display: block;\r\n    font-size: 2em;\r\n    font-family: \"Roboto\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    margin-top: 0%;\r\n    text-align: center;\r\n  }\r\n\r\nform[_ngcontent-%COMP%] {\r\n  background: #f1f1f1;\r\n  border: 1px solid #f1f1f1;\r\n  height: 280px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  right: auto;\r\n  width: 300px;\r\n  float: left;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 900px;\r\n  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));\r\n  width: 400px;\r\n  height: 400px;\r\n  padding: 10px 10px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]:after {\r\n  \r\n  content: \"\";\r\n  display: block;\r\n  height: 1px;\r\n  left: 50px;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 150px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]:before {\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 6px 4px #fff;\r\n  content: \"\";\r\n  display: block;\r\n  height: 5px;\r\n  left: 34%;\r\n  position: absolute;\r\n  top: -7px;\r\n  width: 8px;\r\n}\r\n\r\n.inset[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #19191a;\r\n  padding: 20px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: 'Audiowide';\r\n  border-bottom: 1px solid #e9cfcf;\r\n  font-size: 18px;\r\n  padding: 15px 0;\r\n  position: absolute;\r\n  text-align: center;\r\n  text-shadow: 0 1px 0 #e9cfcf;\r\n  float: left;  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #f1f1f1;\r\n  font-family: Audiowide;\r\n  font-weight: normal;\r\n  float: left;  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   h1.poweron[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  transition: all 0.5s;\r\n  animation: flicker 1s ease-in-out 1 alternate, neon 1.5s ease-in-out infinite alternate;\r\n  animation-delay: 0s, 1s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  width: 250px;\r\n  height: 180px;\r\n  content: \"\";\r\n  display: block;\r\n  pointer-events: none;\r\n  top: 0;\r\n  margin-left: 138px;\r\n  transform-style: flat;\r\n  transform: skew(20deg);\r\n  background: -ms-linear-gradient(top, hsla(0,0%,100%,0.1) 0%,hsla(0,0%,100%,0) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#42ffffff', endColorstr='#00ffffff',GradientType=0 );\r\n  background: linear-gradient(to bottom, hsla(0,0%,100%,0.1) 0%,hsla(0,0%,100%,0) 100%);\r\n\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n  background: linear-gradient(#ffffff,#ffffff);\r\n  border: 0px;\r\n  border-radius: .3em;\r\n  box-shadow: 0 1px 0 rgba(255,255,255,0.5);\r\n  color: #000;\r\n  font-size: 13px;\r\n  margin-bottom: 20px;\r\n  padding: 8px 10px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:disabled, input[type=password][_ngcontent-%COMP%]:disabled {\r\ncolor: #ffffff;\r\n}\r\n\r\nlabel[for=remember][_ngcontent-%COMP%] {\r\n  color: #bbb;\r\n  display: inline-block;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  vertical-align: top;\r\n  padding: 0 0 0 5px;\r\n}\r\n\r\n.p-container[_ngcontent-%COMP%] {\r\n  padding: 0 20px 20px;\r\n}\r\n\r\n.p-container[_ngcontent-%COMP%]:after {\r\n  clear: both;\r\n  content: \"\";\r\n  display: table;\r\n}\r\n\r\n.p-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #0d93ff;\r\n  display: block;\r\n  float: left;\r\n  padding-top: 8px;\r\n}\r\n\r\n#login_button[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background: #0096f9;\r\n  border: 0px;\r\n  box-shadow: inset 1px 2px 1px rgba(255,255,255,0.3), inset 0 10px 10px rgba(255,255,255,0.1);\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top:200px;\r\n  right:100px;\r\n  height: 40px;\r\n  padding: 5px 30px 5px 30px;\r\n  width: 50%;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.denied[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n  text-shadow: 0 0 1px black;\r\n  background: #EE0000 !important;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:focus {\r\n  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -10px 10px rgba(255,255,255,0.1);\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:hover:not([disabled]), input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:hover:not([disabled]), input[type=password][_ngcontent-%COMP%]:focus, label[_ngcontent-%COMP%]:hover    ~ input[type=text][_ngcontent-%COMP%], label[_ngcontent-%COMP%]:hover    ~ input[type=password][_ngcontent-%COMP%] {\r\n  background: #f9f9f9;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  background: #0096f9;\r\n  position: right;\r\n  cursor: pointer;\r\n  z-index: 1;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.checkboxouter[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 3px;\r\n  background-color: #f1f1f1;\r\n  position: relative;\r\n  display: inline-block;\r\n  border: 2px solid #555;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  border-bottom: 2px solid #333;\r\n  border-right: 2px solid #333;\r\n  background-color: transparent;\r\n  height: 10px;\r\n  width: 5px;\r\n  margin: auto;\r\n  left: 50%;\r\n  transform: rotate(45deg);\r\n  transform-origin: -35% 30%;\r\n  transition: all 0.2s;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    ~ .checkbox[_ngcontent-%COMP%] {\r\n  transition: all 0.3s;\r\n  border-bottom: 2px solid #0096f9;\r\n  border-right: 2px solid #0096f9;\r\n}\r\n\r\n@keyframes neon {\r\n  from {\r\n    text-shadow:\r\n    0 0 2.5px #fff,\r\n    0 0 5px #fff,\r\n    0 0 7.5px #fff,\r\n    0 0 10px #B6FF00,\r\n    0 0 17.5px #B6FF00,\r\n    0 0 20px #B6FF00,\r\n    0 0 25px #B6FF00,\r\n    0 0 37.5px #B6FF00;\r\n  }\r\n\r\n  to {\r\n      text-shadow:\r\n      0 0 3px #fff,\r\n      0 0 7px  #fff,\r\n      0 0 13px  #fff,\r\n      0 0 17px  #B6FF00,\r\n      0 0 33px  #B6FF00,\r\n      0 0 38px  #B6FF00,\r\n      0 0 48px #B6FF00,\r\n      0 0 63px #B6FF00;\r\n    }\r\n}\r\n\r\n@keyframes flicker {\r\n  0% {\r\n    text-shadow:\r\n    0 0 2.5px #fff,\r\n    0 0 5px #fff,\r\n    0 0 7.5px #fff,\r\n    0 0 10px #B6FF00,\r\n    0 0 17.5px #B6FF00,\r\n    0 0 20px #B6FF00,\r\n    0 0 25px #B6FF00,\r\n    0 0 37.5px #B6FF00;\r\n  }\r\n\r\n  2% {\r\n    text-shadow: none;\r\n  }\r\n\r\n  8% {\r\n    text-shadow:\r\n    0 0 2.5px #fff,\r\n    0 0 5px #fff,\r\n    0 0 7.5px #fff,\r\n    0 0 10px #B6FF00,\r\n    0 0 17.5px #B6FF00,\r\n    0 0 20px #B6FF00,\r\n    0 0 25px #B6FF00,\r\n    0 0 37.5px #B6FF00;\r\n  }\r\n\r\n  10% {\r\n    text-shadow: none;\r\n  }\r\n\r\n  20% {\r\n    text-shadow:\r\n    0 0 2.5px #fff,\r\n    0 0 5px #fff,\r\n    0 0 7.5px #fff,\r\n    0 0 10px #B6FF00,\r\n    0 0 17.5px #B6FF00,\r\n    0 0 20px #B6FF00,\r\n    0 0 25px #B6FF00,\r\n    0 0 37.5px #B6FF00;\r\n  }\r\n\r\n  22% {\r\n    text-shadow: none;\r\n  }\r\n\r\n  24% {\r\n    text-shadow:\r\n    0 0 2.5px #fff,\r\n    0 0 5px #fff,\r\n    0 0 7.5px #fff,\r\n    0 0 10px #B6FF00,\r\n    0 0 17.5px #B6FF00,\r\n    0 0 20px #B6FF00,\r\n    0 0 25px #B6FF00,\r\n    0 0 37.5px #B6FF00;\r\n  }\r\n\r\n  28% {\r\n    text-shadow: none;\r\n  }\r\n\r\n  32% {\r\n    text-shadow:\r\n    0 0 2.5px #fff,\r\n    0 0 5px #fff,\r\n    0 0 7.5px #fff,\r\n    0 0 10px #B6FF00,\r\n    0 0 17.5px #B6FF00,\r\n    0 0 20px #B6FF00,\r\n    0 0 25px #B6FF00,\r\n    0 0 37.5px #B6FF00;\r\n  }\r\n\r\n  34% {\r\n    text-shadow: none;\r\n  }\r\n\r\n  36% {\r\n    text-shadow: none;\r\n  }\r\n\r\n  42% {\r\n    text-shadow: none;\r\n  }\r\n\r\n  100% {\r\n    text-shadow:\r\n    0 0 2.5px #fff,\r\n    0 0 5px #fff,\r\n    0 0 7.5px #fff,\r\n    0 0 10px #B6FF00,\r\n    0 0 17.5px #B6FF00,\r\n    0 0 20px #B6FF00,\r\n    0 0 25px #B6FF00,\r\n    0 0 37.5px #B6FF00;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEOztBQU85RDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlGQUFpRjtFQUNqRixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlFQUFpRTtFQUNqRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztBQUNGO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gscURBQXFEO0VBQ3JELFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0lBQ0ksNkJBQTZCO0VBQy9CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHVGQUF1RjtFQUN2Rix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFNdEIsbUZBQW1GO0VBQ25GLHVIQUF1SDtFQUN2SCxxRkFBcUY7O0FBRXZGOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDRGQUE0RjtFQUM1RixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUZBQXlGO0FBQzNGOztBQUVBOzs7Ozs7RUFNRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0lBQ0U7Ozs7Ozs7O3NCQVFrQjtFQUNwQjs7RUFFQTtNQUNJOzs7Ozs7OztzQkFRZ0I7SUFDbEI7QUFDSjs7QUFFQTtFQUNFO0lBQ0U7Ozs7Ozs7O3NCQVFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFOzs7Ozs7OztzQkFRa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTs7Ozs7Ozs7c0JBUWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0U7Ozs7Ozs7O3NCQVFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFOzs7Ozs7OztzQkFRa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTs7Ozs7Ozs7c0JBUWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BdWRpb3dpZGUpO1xyXG5cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5NmY5O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDk2Zjk7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaHRtbCxib2R5LGRpdixzcGFuLGFwcGxldCxvYmplY3QsaWZyYW1lLGgxLGgyLGgzLGg0LGg1LGg2LHAsYmxvY2txdW90ZSxwcmUsYSxhYmJyLGFjcm9ueW0sYWRkcmVzcyxiaWcsY2l0ZSxjb2RlLGRlbCxkZm4sZW0saW1nLGlucyxrYmQscSxzLHNhbXAsc21hbGwsc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHR0LHZhcixiLHUsaSxjZW50ZXIsZGwsZHQsZGQsb2wsdWwsbGksZmllbGRzZXQsZm9ybSxsYWJlbCxsZWdlbmQsdGFibGUsY2FwdGlvbix0Ym9keSx0Zm9vdCx0aGVhZCx0cix0aCx0ZCxhcnRpY2xlLGFzaWRlLGNhbnZhcyxkZXRhaWxzLGVtYmVkLGZpZ3VyZSxmaWdjYXB0aW9uLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1lbnUsbmF2LG91dHB1dCxydWJ5LHNlY3Rpb24sc3VtbWFyeSx0aW1lLG1hcmssYXVkaW8sdmlkZW8ge1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxufVxyXG5cclxuYXJ0aWNsZSxhc2lkZSxkZXRhaWxzLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1lbnUsbmF2LHNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5odG1sLGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4jaW1nMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTA0cHg7XHJcbiAgICBoZWlnaHQ6IDQyMXB4O1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi5sYWJlbF9sb2dpbiB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9teXJyb3IuY28vZXRjLzQxOTA2Mjc3NF8xMzg1MTMyMDU3LmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGhlaWdodDogMTA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwNSU7XHJcbiAgcmlnaHQ6IC0yLjUlO1xyXG4gIGxlZnQ6IC0yLjUlO1xyXG4gIHRvcDogLTIuNSU7XHJcbiAgYm90dG9tOiAtMi41JTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZmOTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogOTAwcHg7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYxKSk7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG5mb3JtOmFmdGVyIHtcclxuICBcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbmZvcm06YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDZweCA0cHggI2ZmZjtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGxlZnQ6IDM0JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtN3B4O1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi5pbnNldCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzE5MTkxYTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5mb3JtIGgxIHtcclxuICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZSc7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWNmY2Y7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNlOWNmY2Y7XHJcbiAgZmxvYXQ6IGxlZnQ7ICBcclxufVxyXG5cclxuZm9ybSBoMSB7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbiAgZm9udC1mYW1pbHk6IEF1ZGlvd2lkZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZsb2F0OiBsZWZ0OyAgXHJcbn1cclxuXHJcbmZvcm0gaDEucG93ZXJvbiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgYW5pbWF0aW9uOiBmbGlja2VyIDFzIGVhc2UtaW4tb3V0IDEgYWx0ZXJuYXRlLCBuZW9uIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMHMsIDFzO1xyXG59XHJcblxyXG5mb3JtIGgxOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzOHB4O1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcclxuICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIGhzbGEoMCwwJSwxMDAlLDAuMSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsaHNsYSgwLDAlLDEwMCUsMC4yKSksIGNvbG9yLXN0b3AoMTAwJSxoc2xhKDAsMCUsMTAwJSwwKSkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgaHNsYSgwLDAlLDEwMCUsMC4xKSAwJSxoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCBoc2xhKDAsMCUsMTAwJSwwLjEpIDAlLGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCBoc2xhKDAsMCUsMTAwJSwwLjEpIDAlLGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNDJmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MCApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGhzbGEoMCwwJSwxMDAlLDAuMSkgMCUsaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSk7XHJcblxyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpkaXNhYmxlZCwgaW5wdXRbdHlwZT1wYXNzd29yZF06ZGlzYWJsZWQge1xyXG5jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxubGFiZWxbZm9yPXJlbWVtYmVyXSB7XHJcbiAgY29sb3I6ICNiYmI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcclxufVxyXG5cclxuLnAtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMjBweDtcclxufVxyXG5cclxuLnAtY29udGFpbmVyOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4ucC1jb250YWluZXIgc3BhbiB7XHJcbiAgY29sb3I6ICMwZDkzZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG5cclxuI2xvZ2luX2J1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQ6ICMwMDk2Zjk7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDJweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjMpLCBpbnNldCAwIDEwcHggMTBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjIwMHB4O1xyXG4gIHJpZ2h0OjEwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA1cHggMzBweCA1cHggMzBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmRlbmllZCB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxcHggYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogI0VFMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMyksIGluc2V0IDAgLTEwcHggMTBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06aG92ZXI6bm90KFtkaXNhYmxlZF0pLFxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpob3Zlcjpub3QoW2Rpc2FibGVkXSksXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLFxyXG5sYWJlbDpob3ZlciB+IGlucHV0W3R5cGU9dGV4dF0sXHJcbmxhYmVsOmhvdmVyIH4gaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBiYWNrZ3JvdW5kOiAjMDA5NmY5O1xyXG4gIHBvc2l0aW9uOiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5jaGVja2JveG91dGVyIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IC0zNSUgMzAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IC5jaGVja2JveCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDk2Zjk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwOTZmOTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBuZW9uIHtcclxuICBmcm9tIHtcclxuICAgIHRleHQtc2hhZG93OlxyXG4gICAgMCAwIDIuNXB4ICNmZmYsXHJcbiAgICAwIDAgNXB4ICNmZmYsXHJcbiAgICAwIDAgNy41cHggI2ZmZixcclxuICAgIDAgMCAxMHB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMTcuNXB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMjBweCAjQjZGRjAwLFxyXG4gICAgMCAwIDI1cHggI0I2RkYwMCxcclxuICAgIDAgMCAzNy41cHggI0I2RkYwMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgICAgdGV4dC1zaGFkb3c6XHJcbiAgICAgIDAgMCAzcHggI2ZmZixcclxuICAgICAgMCAwIDdweCAgI2ZmZixcclxuICAgICAgMCAwIDEzcHggICNmZmYsXHJcbiAgICAgIDAgMCAxN3B4ICAjQjZGRjAwLFxyXG4gICAgICAwIDAgMzNweCAgI0I2RkYwMCxcclxuICAgICAgMCAwIDM4cHggICNCNkZGMDAsXHJcbiAgICAgIDAgMCA0OHB4ICNCNkZGMDAsXHJcbiAgICAgIDAgMCA2M3B4ICNCNkZGMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxpY2tlciB7XHJcbiAgMCUge1xyXG4gICAgdGV4dC1zaGFkb3c6XHJcbiAgICAwIDAgMi41cHggI2ZmZixcclxuICAgIDAgMCA1cHggI2ZmZixcclxuICAgIDAgMCA3LjVweCAjZmZmLFxyXG4gICAgMCAwIDEwcHggI0I2RkYwMCxcclxuICAgIDAgMCAxNy41cHggI0I2RkYwMCxcclxuICAgIDAgMCAyMHB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMjVweCAjQjZGRjAwLFxyXG4gICAgMCAwIDM3LjVweCAjQjZGRjAwO1xyXG4gIH1cclxuXHJcbiAgMiUge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICA4JSB7XHJcbiAgICB0ZXh0LXNoYWRvdzpcclxuICAgIDAgMCAyLjVweCAjZmZmLFxyXG4gICAgMCAwIDVweCAjZmZmLFxyXG4gICAgMCAwIDcuNXB4ICNmZmYsXHJcbiAgICAwIDAgMTBweCAjQjZGRjAwLFxyXG4gICAgMCAwIDE3LjVweCAjQjZGRjAwLFxyXG4gICAgMCAwIDIwcHggI0I2RkYwMCxcclxuICAgIDAgMCAyNXB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMzcuNXB4ICNCNkZGMDA7XHJcbiAgfVxyXG5cclxuICAxMCUge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgdGV4dC1zaGFkb3c6XHJcbiAgICAwIDAgMi41cHggI2ZmZixcclxuICAgIDAgMCA1cHggI2ZmZixcclxuICAgIDAgMCA3LjVweCAjZmZmLFxyXG4gICAgMCAwIDEwcHggI0I2RkYwMCxcclxuICAgIDAgMCAxNy41cHggI0I2RkYwMCxcclxuICAgIDAgMCAyMHB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMjVweCAjQjZGRjAwLFxyXG4gICAgMCAwIDM3LjVweCAjQjZGRjAwO1xyXG4gIH1cclxuXHJcbiAgMjIlIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgMjQlIHtcclxuICAgIHRleHQtc2hhZG93OlxyXG4gICAgMCAwIDIuNXB4ICNmZmYsXHJcbiAgICAwIDAgNXB4ICNmZmYsXHJcbiAgICAwIDAgNy41cHggI2ZmZixcclxuICAgIDAgMCAxMHB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMTcuNXB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMjBweCAjQjZGRjAwLFxyXG4gICAgMCAwIDI1cHggI0I2RkYwMCxcclxuICAgIDAgMCAzNy41cHggI0I2RkYwMDtcclxuICB9XHJcblxyXG4gIDI4JSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIDMyJSB7XHJcbiAgICB0ZXh0LXNoYWRvdzpcclxuICAgIDAgMCAyLjVweCAjZmZmLFxyXG4gICAgMCAwIDVweCAjZmZmLFxyXG4gICAgMCAwIDcuNXB4ICNmZmYsXHJcbiAgICAwIDAgMTBweCAjQjZGRjAwLFxyXG4gICAgMCAwIDE3LjVweCAjQjZGRjAwLFxyXG4gICAgMCAwIDIwcHggI0I2RkYwMCxcclxuICAgIDAgMCAyNXB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMzcuNXB4ICNCNkZGMDA7XHJcbiAgfVxyXG5cclxuICAzNCUge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAzNiUge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICA0MiUge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRleHQtc2hhZG93OlxyXG4gICAgMCAwIDIuNXB4ICNmZmYsXHJcbiAgICAwIDAgNXB4ICNmZmYsXHJcbiAgICAwIDAgNy41cHggI2ZmZixcclxuICAgIDAgMCAxMHB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMTcuNXB4ICNCNkZGMDAsXHJcbiAgICAwIDAgMjBweCAjQjZGRjAwLFxyXG4gICAgMCAwIDI1cHggI0I2RkYwMCxcclxuICAgIDAgMCAzNy41cHggI0I2RkYwMDtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map