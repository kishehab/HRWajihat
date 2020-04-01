(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-grid>\n  \n</app-layout-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/board/board.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/board/board.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list [cols]=\"grid_cols\">\n    <mat-toolbar color=\"primary\">\n        <mat-toolbar-row>\n            <span fxHide.xs>Application Layout Board</span>\n            <span fxHide.gt-xs>Layout</span>\n            <span class=\"example-spacer\"></span>\n\n            <button (click)=\"addDefaultTile()\" mat-button fxHide.xs>Add Tile\n                <mat-icon class=\"example-icon\" aria-hidden=\"true\" aria-label=\"Example heart icon\">add</mat-icon>\n            </button>\n\n            <button (click)=\"clearAllTiles()\" mat-button fxHide.xs> Clear all\n                <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">delete</mat-icon>\n            </button>\n\n            <button mat-icon-button (click)=\"addDefaultTile()\" fxHide.gt-xs>\n              <mat-icon>add</mat-icon>\n            </button>\n\n            <button mat-icon-button (click)=\"clearAllTiles()\" fxHide.gt-xs>\n              <mat-icon>delete</mat-icon>\n            </button>\n           \n            <mat-chip-list aria-label=\"Fish selection\" fxHide.xs>\n                <mat-chip>{{tilesCount}}</mat-chip>\n              </mat-chip-list>\n          </mat-toolbar-row>\n    </mat-toolbar>\n    <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\n        [style.background]=\"tile.color\" class=\"tile\">\n        {{tile.id}}\n        <mat-grid-tile-footer color=\"primary\">\n\n            <button mat-icon-button (click)=\"incrementCols(tile)\">\n                <mat-icon>keyboard_arrow_right</mat-icon>\n              </button>\n\n              <button mat-icon-button (click)=\"decrementCols(tile)\">\n                <mat-icon>keyboard_arrow_left</mat-icon>\n              </button>\n\n              <button mat-icon-button (click)=\"incrementRows(tile)\">\n                <mat-icon>keyboard_arrow_down</mat-icon>\n              </button>\n\n              <button mat-icon-button (click)=\"decrementRows(tile)\">\n                <mat-icon>keyboard_arrow_up</mat-icon>\n              </button>\n\n              <button mat-icon-button (click)=\"deleteTile(tile)\">\n                <mat-icon>clear</mat-icon>\n              </button>\n\n        </mat-grid-tile-footer>\n    </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/button-widget/button-widget.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/button-widget/button-widget.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button (click)=\"EmitClickEvent(widgetTemplateRef)\">\n  <mat-icon>crop_7_5</mat-icon>\n</button>\n\n<ng-template #widgetTemplateRef>\n  <div fxLayout=\"row\">\n\n    <h3>{{widgetTitle}}</h3>\n    <span class=\"spacer\"></span>\n    <button mat-icon-button (click)=\"close()\">\n      <mat-icon>close</mat-icon>\n    </button>\n\n  </div>\n\n  <mat-list>\n    <mat-list-item>Button Type</mat-list-item>\n\n    <section class=\"example-section\">\n      <mat-radio-group [(ngModel)]=\"buttonType\">\n        <mat-radio-button class=\"example-margin\" value=\"basic\">\n          Basic\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"raised\">\n          Raised\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"stroked\">\n          Stroked\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"flat\">\n          Flat\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"icon\">\n          Icon\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"fab\">\n          Fab\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"mini-fab\">\n          Mini Fab\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <mat-divider></mat-divider>\n    <mat-list-item>Color</mat-list-item>\n    <section class=\"example-section\">\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <mat-divider></mat-divider>\n    <mat-list-item>Disable</mat-list-item>\n\n    \n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n    <mat-divider></mat-divider>\n    <mat-list-item>Result</mat-list-item>\n\n    <mat-card class=\"result\">\n      <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n      <mat-card-content [ngSwitch]=\"buttonType\">\n        <button *ngSwitchCase=\"'basic'\" mat-button [color]=\"color\" [disabled]=\"disabled\" cdkDrag>Basic</button>\n        <button *ngSwitchCase=\"'raised'\" mat-raised-button [color]=\"color\" [disabled]=\"disabled\" cdkDrag>Raised</button>\n        <button *ngSwitchCase=\"'stroked'\" mat-stroked-button [color]=\"color\" [disabled]=\"disabled\" cdkDrag>Stroked</button>\n        <button *ngSwitchCase=\"'flat'\" mat-flat-button [color]=\"color\" [disabled]=\"disabled\" cdkDrag>Flat</button>\n        <button *ngSwitchCase=\"'icon'\" mat-icon-button [color]=\"color\" [disabled]=\"disabled\" cdkDrag>\n          <mat-icon>favorite</mat-icon>\n        </button>\n        <button *ngSwitchCase=\"'fab'\" mat-fab [color]=\"color\" [disabled]=\"disabled\" cdkDrag>Fab</button>\n        <button *ngSwitchCase=\"'mini-fab'\" mat-mini-fab [color]=\"color\" [disabled]=\"disabled\" cdkDrag>MF</button>\n      </mat-card-content>\n    </div>\n    </mat-card>\n  </mat-list>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clear-all-dialog/clear-all-dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clear-all-dialog/clear-all-dialog.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Clear All Tiles</h1>\n<div mat-dialog-content>\n  <p>Are you sure you want to clear all tiles?</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close mat-dialog-close=\"true\">YES</button>\n  <button mat-button mat-dialog-close mat-dialog-close=\"false\">NO</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"myFooter\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <h2 class=\"logo\"><a href=\"#\"> LOGO </a></h2>\n                </div>\n                <div class=\"col-sm-2\">\n                    <h5>Get started</h5>\n                    <ul>\n                        <li><a href=\"#\">Home</a></li>\n                        <li><a href=\"#\">Sign up</a></li>\n                        <li><a href=\"#\">Downloads</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-2\">\n                    <h5>About us</h5>\n                    <ul>\n                        <li><a href=\"#\">Company Information</a></li>\n                        <li><a href=\"#\">Contact us</a></li>\n                        <li><a href=\"#\">Reviews</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-2\">\n                    <h5>Support</h5>\n                    <ul>\n                        <li><a href=\"#\">FAQ</a></li>\n                        <li><a href=\"#\">Help desk</a></li>\n                        <li><a href=\"#\">Forums</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"social-networks\">\n                        <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n                        <a href=\"#\" class=\"google\"><i class=\"fa fa-google-plus\"></i></a>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-default\">Contact us</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer-copyright\">\n            <p>© 2016 Copyright Text </p>\n        </div>\n    </footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/head/head.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/head/head.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n    <mat-toolbar>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon md-48>account_circle</mat-icon>\n            </button>\n\n            <span class=\"username\" fxHide.xs> Khalil Shehab</span>\n            <span class=\"example-spacer\"></span>\n        <img class=\"logo\" src=\"./assets/images/wajihat_logo_only.svg\" routerLink=\"/\">\n        \n        <button mat-icon-button fxHide.gt-xs (click)=\"onToggleSidenav()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item routerLink=\"/profile\">\n                <mat-icon>person</mat-icon>\n                <span>Profile</span>\n            </button>\n            <button mat-menu-item routerLink=\"/settings\">\n                <mat-icon>settings</mat-icon>\n                <span>Settings</span>\n            </button>\n            <button mat-menu-item>\n                <mat-icon>notifications</mat-icon>\n                <span>Notifications</span>\n            </button>\n            <button mat-menu-item>\n                <mat-icon>exit_to_app</mat-icon>\n                <span>Logout</span>\n            </button>\n        </mat-menu>\n\n    </mat-toolbar>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar fxLayout=\"row\">\n    <button fxFlex.xs=\"10%\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>account_circle</mat-icon>\n      </button>\n\n \n  <div class=\"linerMenu\" fxFlex=\"80%\" fxHide.xs >\n      <section class=\"color-4\">\n          <nav class=\"cl-effect-4\">\n            <a href=\"#\" data-hover=\"Languor\">Languor</a>\n            <a href=\"#\" data-hover=\"Murmurous\">Murmurous</a>\n            <a href=\"#\" data-hover=\"Lassitude\">Lassitude</a>\n            <a href=\"#\" data-hover=\"Chatoyant\">Chatoyant</a>\n            <a href=\"#\" data-hover=\"Palimpsest\">Palimpsest</a>\n          </nav>\n        </section>\n    </div>\n  <!-- <span class=\"applicatoin-title\" routerLink=\"/\">wajihat</span> -->\n  <button fxFlex.xs=\"10%\" mat-icon-button fxHide.gt-xs (click)=\"onToggleSidenav()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <img class=\"logo\" src=\"./assets/images/wajihat_logo_with_Ar_H.svg\" routerLink=\"/\" fxFlex=\"10%\" fxFlex.xs=\"80%\">\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/profile\">\n      <mat-icon>person</mat-icon>\n      <span>Profile</span>\n    </button>\n    <button mat-menu-item routerLink=\"/settings\">\n      <mat-icon>settings</mat-icon>\n      <span>Settings</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications</mat-icon>\n      <span>Notifications</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon>\n      <span>Logout</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card>\n        <button mat-button routerLink=\"/register\">registeration</button>\n    </mat-card>\n</div>\n\n<!-- <mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n               (closed)=\"events.push('close!')\">\n    Sidenav content\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\n    <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\n    <p>Events:</p>\n    <div class=\"example-events\">\n      <div *ngFor=\"let e of events\">{{e}}</div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout-grid/layout-grid.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout-grid/layout-grid.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <!-- Header row -->\n    <app-head></app-head>\n    \n    <!-- sidebar and board row -->\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly none\" style=\" height: 100vh;\">\n        \n        <!-- toolbar -->\n        <div fxFlex=\"5\" fxFlex.xs=\"15\">\n           <app-toolbar> </app-toolbar>\n        </div>\n\n        <!-- sidebar tool -->\n        <app-side-navigation></app-side-navigation>\n        \n        <!-- board  -->\n        <div fxFlex=\"95\" fxLayoutGap=\"10px\" fxFlex.xs=\"85\">\n            <app-board (addTileEvent)=\"numberOfTiles=$event\" [prntMsg]=\"fatherMsg\" [isRequested]=\"isRequested\"></app-board>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-4 col-lg-12 dd\">\n            One of three columns\n          </div>\n          <div class=\"col-xs-4 col-lg-6\">\n            One of three columns\n          </div>\n          <div class=\"col-xs-4 col-lg-6\">\n            One of three columns\n          </div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <!-- PERSONAL -->\n            <!-- header -->\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <!-- <span class=\"dot\"><mat-icon class=\"large\">perm_identity</mat-icon></span> -->\n                <h1 mat-h1 fxFlex=\"95\"> Prsonal information</h1>\n                <button mat-button (click)=\"editModde()\">\n                    <mat-icon>edit</mat-icon>\n                </button>\n            </div>\n            <mat-divider></mat-divider>\n            \n            <!-- content -->\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" style=\"padding-top: 20px;\" fxLayoutWrap>\n                <div fxFlex=\"50\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"First name\" value=\"Khalil\" [disabled]=\"isDisabled\">\n                    </mat-form-field>\n                </div>\n                <div fxFlex=\"50\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Last name\" value=\"Shehab\" [disabled]=\"isDisabled\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div fxFlex=\"50\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Mobile\" value=\"0567999190\" [disabled]=\"isDisabled\">\n                    </mat-form-field>\n                </div>\n                <div fxFlex=\"50\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Telephone\" value=\"013855804\" [disabled]=\"isDisabled\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutWrap fxLayoutGap=\"0.5%\">\n                <button mat-raised-button color=\"primary\" (click)=\"cancelEditForm()\" [disabled]= \"btnHandleEdit\">Cancel</button>\n                <button mat-raised-button color=\"primary\" (click)=\"saveEditedForm()\" [disabled]= \"btnHandleEdit\"> Save</button>\n            </div>\n\n\n            <!-- BUSINESS -->\n            <!-- header -->\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <!-- <mat-icon class=\"large\">business_center</mat-icon> -->\n                <h1 mat-h1 fxFlex=\"95\"> Business information</h1>\n                <button mat-button>\n                    <mat-icon>add</mat-icon>\n                </button>\n            </div>\n            <mat-divider></mat-divider>\n            <!-- content -->\n            <div fxLayout=\"row\" fxLayout.xs=\"column wrap\" fxLayoutAlign=\"space-evenly center\" fxLayoutGap=\"30px\" style=\"padding-top: 20px;\">\n                    <mat-card fxFlex=\"30\"class=\"example-card\">\n                            <mat-card-header>\n                                <div mat-card-avatar class=\"example-header-image\"></div>\n                                <mat-card-title>Shiba Inu</mat-card-title>\n                                <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                            </mat-card-header>\n                            <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                                alt=\"Photo of a Shiba Inu\">\n                            <mat-card-content>\n                                <p>\n                                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                                    bred for hunting.\n                                </p>\n                            </mat-card-content>\n                            <mat-card-actions>\n                                <button mat-button>LIKE</button>\n                                <button mat-button>SHARE</button>\n                            </mat-card-actions>\n                        </mat-card>\n                        <mat-card fxFlex=\"30\"class=\"example-card\">\n                                <mat-card-header>\n                                    <div mat-card-avatar class=\"example-header-image\"></div>\n                                    <mat-card-title>Shiba Inu</mat-card-title>\n                                    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                                </mat-card-header>\n                                <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                                    alt=\"Photo of a Shiba Inu\">\n                                <mat-card-content>\n                                    <p>\n                                        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                                        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                                        bred for hunting.\n                                    </p>\n                                </mat-card-content>\n                                <mat-card-actions>\n                                    <button mat-button>LIKE</button>\n                                    <button mat-button>SHARE</button>\n                                </mat-card-actions>\n                            </mat-card>\n                            <mat-card fxFlex=\"30\"class=\"example-card\">\n                            <mat-card-header>\n                                <div mat-card-avatar class=\"example-header-image\"></div>\n                                <mat-card-title>Shiba Inu</mat-card-title>\n                                <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                            </mat-card-header>\n                            <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                                alt=\"Photo of a Shiba Inu\">\n                            <mat-card-content>\n                                <p>\n                                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                                    bred for hunting.\n                                </p>\n                            </mat-card-content>\n                            <mat-card-actions>\n                                <button mat-button>LIKE</button>\n                                <button mat-button>SHARE</button>\n                            </mat-card-actions>\n                        </mat-card>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registeration/registeration.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registeration/registeration.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1>Registeration</h1>\n            <mat-divider></mat-divider>\n            <form #lr_ngForm=\"ngForm\" [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n                <div formGroupName=\"login\">\n                    <h3>Login</h3>\n                    <mat-form-field>\n                        <input matInput placeholder=\"User name\" id=\"username\" formControlName=\"username\" required>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Password\" type=\"password\" id=\"password\" formControlName=\"password\"\n                            required>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Retype password\" type=\"password\" id=\"rtpassword\"\n                            formControlName=\"rtpassword\" required>\n                    </mat-form-field>\n\n                </div>\n                <h3>Personal</h3>\n                <mat-form-field>\n                    <input matInput placeholder=\"First name\" id=\"firstName\" formControlName=\"firstName\" required>\n                    <!-- <div *ngIf=\"profileForm.firstName.errors.minlength\">\n                        Name must be at least 4 characters long.\n                    </div>  -->\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"First name\" formControlName=\"lastName\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Mobile\" type=\"tel\" formControlName=\"mobile\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Date of birth\" formControlName=\"DOB\" required>\n                </mat-form-field>\n                <div formGroupName=\"address\">\n                    <h3>Address</h3>\n                    <mat-form-field>\n                        <input matInput placeholder=\"First name\" formControlName=\"street\" required>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"First name\" formControlName=\"city\" required>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"First name\" formControlName=\"state\" required>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"First name\" formControlName=\"zip\" required>\n                    </mat-form-field>\n                </div>\n                <button mat-button color=\"primary\" type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n            </form>\n            <p>\n                {{lr_ngForm.value | json}}\n                Form Status: {{ profileForm.status }}\n                {{profileForm.controls}}\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <!-- PERSONAL -->\n            <!-- header -->\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"large\">settings</mat-icon>\n                <h1 mat-h1 fxFlex=\"90\"> Settings</h1>\n            </div>\n            <mat-divider></mat-divider>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-navigation/side-navigation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-navigation/side-navigation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav mode=\"side\" #panel>\n        <ng-container #content></ng-container>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        \n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/slide-menu/slide-menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slide-menu/slide-menu.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <a mat-list-item routerLink=\"#\" (click)=\"onSidenavClose()\">\n        <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\n    </a>\n    <a mat-list-item routerLink=\"#\" (click)=\"onSidenavClose()\">\n        <mat-icon>assignment_ind</mat-icon> <span class=\"nav-caption\">Owner Actions</span>\n    </a>\n    <a mat-list-item routerLink=\"#\" (click)=\"onSidenavClose()\">\n        <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">Account Actions</span>\n    </a>\n</mat-nav-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-ground/test-ground.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-ground/test-ground.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n<mat-toolbar fxLayout=\"row\" color=\"primary\">\n<span class=\"applicatoin-title\">eWajihat</span>\n</mat-toolbar>\n<div class=\"container\" fxLayout.gm=\"row\" fxFill fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutGap.xs=\"1.5%\" fxLayoutAlign=\"center\" fxLayoutAlign.xs=\"center\">\n    <mat-card>\n        <mat-card-title>\n          card title\n        </mat-card-title>\n        <mat-card-content>\n          basic card\n        </mat-card-content>\n      </mat-card>\n      <mat-card >\n          <mat-card-title>\n            card title\n          </mat-card-title>\n          <mat-card-content>\n            basic card\n          </mat-card-content>\n        </mat-card>\n        <mat-card>\n            <mat-card-title>\n              card title\n            </mat-card-title>\n            <mat-card-content>\n              basic card\n            </mat-card-content>\n          </mat-card>\n</div>\n<!-- experimental code-->\n<mat-toolbar fxLayout=\"row\" color=\"accent\">\n  <span fxFlex=\"50%\"class=\"applicatoin-title\">Application Title</span>\n  <button fxFlex=\"30%\" fxLayoutAlign=\"space-around stretch\" mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item>Item 1</button>\n    <button mat-menu-item>Item 2</button>\n  </mat-menu>\n  <span class=\"rat\" fxFlex=\"20%\">Right Aligned Text</span>\n</mat-toolbar>\n<h3>I'm in app compoenet!</h3>\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile><mat-card>\n    <mat-card-title>\n      card title\n    </mat-card-title>\n    <mat-card-content>\n      basic card\n    </mat-card-content>\n  </mat-card>\n</mat-grid-tile>\n  <mat-grid-tile>\n    <div class=\"progress\">\n      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n        <span class=\"sr-only\">60% Complete</span>\n      </div>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile fxLayout =\"column\" fxLayoutWrap fxLayoutAlign=\"center\">\n      <mat-selection-list fxFlex=\"80%\" #shoes>\n          <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n            {{shoe}}\n          </mat-list-option>\n        </mat-selection-list>\n        <div fxFlex=\"20%\">\n          Options selected: {{shoes.selectedOptions.selected.length}}\n        </div>\n  </mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n<button mat-raised-button>Hello World</button>\n\n\n\n<mat-form-field class=\"search-form\">\n  <input matInput placeholder=\"Search Picture\" type=\"text\">\n</mat-form-field>\n<button button=\"submit\" mat-raised-button color=\"primary\">Search</button>\n<br>\n.con\n<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <mat-card class=\"card-picture\" *ngFor=\"let picture of pictures\">\n    <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n      <span fxFlex=\"80%\">{{picture.title}}</span>\n      <mat-icon fxFlex=\"10%\">mode_edit</mat-icon>\n      <mat-icon fxFlex=\"10%\">delete</mat-icon>\n    </mat-card-title>\n    <img mat-card-image [src]=\"picture.img\">\n  </mat-card>\n</div>\n<div>\n\n  <div layout=\"row\">\n\n    <div flex=\"\">First item in row</div>\n    <div flex=\"20\">Second item in row</div>\n\n  </div>\n  <div layout=\"column\">\n\n    <div flex=\"66\">First item in column</div>\n    <div flex=\"33\">Second item in column</div>\n\n  </div>\n\n</div>\n\n<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"row\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg\">\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"accent\" fxLayout=\"column\" class=\"verticalToolbar\" fxFill fxLayoutGap fxLayoutGap=\"15px\">\n     <app-button-widget (widgetClick)=\"openWidget($event)\"> </app-button-widget>\n</mat-toolbar>"

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _registeration_registeration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registeration/registeration.component */ "./src/app/registeration/registeration.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");








const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'register', component: _registeration_registeration_component__WEBPACK_IMPORTED_MODULE_6__["RegisterationComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] } // must be last object in the list
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], _registeration_registeration_component__WEBPACK_IMPORTED_MODULE_6__["RegisterationComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.img {\r\n    width: 100%;\r\n    margin-bottom: 18%;\r\n  }\r\n  .card-picture {\r\n    width: 23%;\r\n    margin-bottom: 2%;\r\n  }\r\n  .container {\r\n    min-height: 100%;\r\n    width: 100%;\r\n  }\r\n  .search-form {\r\n    width: 90%;\r\n  }\r\n  .mat-card {\r\nwidth: 90%;\r\nheight: 90%;\r\n}\r\n  .mat-grid-list {\r\n    margin: 10px;\r\n\r\n}\r\n  .rat{\r\n    text-align: right;\r\n}\r\n  .wrapper {\r\n  min-height: 400px;\r\n}\r\n  mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n  height: 100%;\r\n}\r\n  mat-sidenav {\r\n  width: 250px;\r\n}\r\n  main {\r\n  padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0Y7QUFDQSxVQUFVO0FBQ1YsV0FBVztBQUNYO0VBRUE7SUFDSSxZQUFZOztBQUVoQjtFQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0VBRUE7RUFDRSxpQkFBaUI7QUFDbkI7RUFFQTtFQUNFLFlBQVk7QUFDZDtFQUVBO0VBQ0UsWUFBWTtBQUNkO0VBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTglO1xyXG4gIH1cclxuICAuY2FyZC1waWN0dXJlIHtcclxuICAgIHdpZHRoOiAyMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtZm9ybSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuLm1hdC1jYXJkIHtcclxud2lkdGg6IDkwJTtcclxuaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5tYXQtZ3JpZC1saXN0IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbn1cclxuXHJcbi5yYXR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.title = 'Buzzifier';
        this.pictures = [
            {
                id: 1,
                title: 'A natural view',
                img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
            },
            {
                id: 2,
                title: 'Newspaper',
                img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
            },
            {
                id: 3,
                title: 'Favourite pizza',
                img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
            },
            {
                id: 4,
                title: 'Abstract design',
                img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
            },
            {
                id: 5,
                title: 'Tech',
                img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
            },
            {
                id: 6,
                title: 'Nightlife',
                img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
            },
        ];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _test_ground_test_ground_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test-ground/test-ground.component */ "./src/app/test-ground/test-ground.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slide-menu/slide-menu.component */ "./src/app/slide-menu/slide-menu.component.ts");
/* harmony import */ var _layout_grid_layout_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout-grid/layout-grid.component */ "./src/app/layout-grid/layout-grid.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./head/head.component */ "./src/app/head/head.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _clear_all_dialog_clear_all_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clear-all-dialog/clear-all-dialog.component */ "./src/app/clear-all-dialog/clear-all-dialog.component.ts");
/* harmony import */ var _tile_service_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tile-service.service */ "./src/app/tile-service.service.ts");
/* harmony import */ var _button_widget_button_widget_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./button-widget/button-widget.component */ "./src/app/button-widget/button-widget.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./side-navigation/side-navigation.component */ "./src/app/side-navigation/side-navigation.component.ts");
/* harmony import */ var _toolbar_service_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./toolbar-service.service */ "./src/app/toolbar-service.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _test_ground_test_ground_component__WEBPACK_IMPORTED_MODULE_9__["TestGroundComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_13__["SlideMenuComponent"],
            _layout_grid_layout_grid_component__WEBPACK_IMPORTED_MODULE_14__["LayoutGridComponent"],
            _head_head_component__WEBPACK_IMPORTED_MODULE_16__["HeadComponent"],
            _board_board_component__WEBPACK_IMPORTED_MODULE_17__["BoardComponent"],
            _clear_all_dialog_clear_all_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ClearAllDialogComponent"],
            _button_widget_button_widget_component__WEBPACK_IMPORTED_MODULE_20__["ButtonWidgetComponent"],
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__["ToolbarComponent"],
            _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_22__["SideNavigationComponent"],
        ],
        entryComponents: [_clear_all_dialog_clear_all_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ClearAllDialogComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModuleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__["DragDropModule"]
        ],
        providers: [_tile_service_service__WEBPACK_IMPORTED_MODULE_19__["TileServiceService"], _toolbar_service_service__WEBPACK_IMPORTED_MODULE_23__["ToolbarServiceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  .tile{\r\n      border-style: dotted;\r\n      border-width: thin;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBYztZQUFkLGNBQWM7RUFDaEI7O0VBRUE7TUFDSSxvQkFBb0I7TUFDcEIsa0JBQWtCO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuICAudGlsZXtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _clear_all_dialog_clear_all_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clear-all-dialog/clear-all-dialog.component */ "./src/app/clear-all-dialog/clear-all-dialog.component.ts");
/* harmony import */ var _tile_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tile-service.service */ "./src/app/tile-service.service.ts");





let BoardComponent = class BoardComponent {
    constructor(dialog, _TileServiceService) {
        this.dialog = dialog;
        this._TileServiceService = _TileServiceService;
        this.tiles = [];
        this.id_generator = 0;
        this.grid_cols = 12;
        this.defualt_cols_size = 6;
        this.defualt_rows_size = 2;
        this.defualt_color = "white";
        this.tilesCount = 0;
        // event sent to parent component
        this.addTileEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        // inistanite tile manager 
        //this.INITIATE_TILES_MANAGER();
        var nums = this._TileServiceService.getNumber();
        console.log(nums);
    }
    INITIATE_TILES_MANAGER() {
        // check if if the tiles array has not element
    }
    incrementCols(element) {
        // identify the ID
        var index = this.findTileIndexByID(element.id);
        var currentCols;
        // check if the index is found
        if (index >= 0) {
            // get the current value of cols
            currentCols = this.tiles[index].cols;
            // check if the current value is not larger than grid columns
            if (currentCols < this.grid_cols) {
                // incrment by 1
                this.tiles[index].cols = currentCols + 1;
                // if no indext is found 
            }
            else {
                console.log("incrementCols() function: ", +currentCols + " is the maximum of cols");
            }
        }
        else {
            console.log("incrementCols() function: ", " index for selected tile does not exsit" + index);
        }
    }
    decrementCols(element) {
        // identify the ID
        var index = this.findTileIndexByID(element.id);
        var currentCols;
        // check if the index is found
        if (index >= 0) {
            // get the current value of cols
            currentCols = this.tiles[index].cols;
            // check if the current value does not equal to zero
            if (currentCols > 1) {
                // incrment by 1
                this.tiles[index].cols = currentCols - 1;
                // if no indext is found 
            }
            else {
                console.log("decrementCols function: ", " index for selected tile does not exsit");
            }
        }
    }
    incrementRows(element) {
        // identify the ID
        var index = this.findTileIndexByID(element.id);
        var currentRows;
        // check if the index is found
        if (index >= 0) {
            // get the current value of cols
            currentRows = this.tiles[index].rows;
            // check if the current value is not larger than grid columns
            if (true) {
                // incrment by 1
                this.tiles[index].rows = currentRows + 1;
                // if no indext is found 
            }
            else {}
        }
    }
    decrementRows(element) {
        // identify the ID
        var index = this.findTileIndexByID(element.id);
        var currentRows;
        // check if the index is found
        if (index >= 0) {
            // get the current value of cols
            currentRows = this.tiles[index].rows;
            // check if the current value does not equal to zero
            if (currentRows > 1) {
                // incrment by 1
                this.tiles[index].rows = currentRows - 1;
                // if no indext is found 
            }
            else {
                console.log("decrementRows() function: ", +currentRows + " is the minimum of rows");
            }
        }
        else {
            console.log("decrementRows function: ", " index for selected tile does not exsit");
        }
    }
    addDefaultTile() {
        this.tiles.push({
            id: this.id_generator++,
            cols: this.defualt_cols_size,
            rows: this.defualt_rows_size,
            text: 'Drag you component here!',
            color: this.defualt_color
        });
        // increment the tileCount
        this.tilesCount += 1;
        // emit count to parent
        this.addTileEvent.emit(this.tiles.length);
    }
    addTile(cols, rows, text, color) {
        this.tiles.push({
            id: this.id_generator++,
            cols: cols,
            rows: rows,
            text: text,
            color: color
        });
        // increment the tileCount
        this.tilesCount = +1;
    }
    deleteTile(element) {
        // identify the ID
        var index = this.findTileIndexByID(element.id);
        if (index >= 0) {
            this.tiles.splice(index, 1);
            // decrement the tileCount
            this.tilesCount -= 1;
        }
        else {
            console.log("deleteTile function: ", " index for selected tile does not exsit");
        }
    }
    findTileIndexByID(id) {
        var index = -1;
        this.tiles.forEach(function (item, i) {
            if (item.id === id) {
                index = i;
                console.log("found it. It has an index of " + index);
            }
        }, this);
        return index;
    }
    clearAllTiles() {
        // open dialog to make sure user want to clear all tile
        let userInput = this.dialog.open(_clear_all_dialog_clear_all_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ClearAllDialogComponent"]);
        userInput.afterClosed().subscribe(result => {
            // check if the array is not empty.
            console.log(this.tiles.length > 0 && result);
            if (this.tiles.length > 0 && result === "true") {
                console.log("get in!");
                this.tiles = [];
                // reset the tileCount
                this.tilesCount = 0;
            }
            else {
                console.log("No tiles exsit to be cleared!");
            }
        });
    }
};
BoardComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _tile_service_service__WEBPACK_IMPORTED_MODULE_4__["TileServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('prntMsg'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BoardComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isRequested'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BoardComponent.prototype, "addTileRequest", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BoardComponent.prototype, "addTileEvent", void 0);
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: __webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/index.js!./src/app/board/board.component.html"),
        styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _tile_service_service__WEBPACK_IMPORTED_MODULE_4__["TileServiceService"]])
], BoardComponent);



/***/ }),

/***/ "./src/app/button-widget/button-widget.component.css":
/*!***********************************************************!*\
  !*** ./src/app/button-widget/button-widget.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n\r\n  .iconSize{\r\n    font-size: 30px;\r\n  }\r\n\r\n  .example-h2 {\r\n    margin: 10px;\r\n  }\r\n\r\n  .example-section {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    align-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .example-margin {\r\n    margin: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uLXdpZGdldC9idXR0b24td2lkZ2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uLXdpZGdldC9idXR0b24td2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC5pY29uU2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWgyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/button-widget/button-widget.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/button-widget/button-widget.component.ts ***!
  \**********************************************************/
/*! exports provided: ButtonWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWidgetComponent", function() { return ButtonWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolbar-service.service */ "./src/app/toolbar-service.service.ts");



let ButtonWidgetComponent = class ButtonWidgetComponent {
    constructor(_ToolbarServiceService) {
        this._ToolbarServiceService = _ToolbarServiceService;
        this.widgetClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.widgetTitle = "Button Widget";
        this.color = 'primary';
        this.checked = false;
        this.disabled = false;
        this.buttonType = "basic";
    }
    ngOnInit() {
    }
    EmitClickEvent(widgetTemplateRef) {
        this.widgetClick.emit(widgetTemplateRef);
    }
    close() {
        this._ToolbarServiceService.close();
    }
    drop(event) {
        alert("dropped!");
        console.log("dropped!");
    }
};
ButtonWidgetComponent.ctorParameters = () => [
    { type: _toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ButtonWidgetComponent.prototype, "widgetClick", void 0);
ButtonWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-widget',
        template: __webpack_require__(/*! raw-loader!./button-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/button-widget/button-widget.component.html"),
        styles: [__webpack_require__(/*! ./button-widget.component.css */ "./src/app/button-widget/button-widget.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarServiceService"]])
], ButtonWidgetComponent);



/***/ }),

/***/ "./src/app/clear-all-dialog/clear-all-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/clear-all-dialog/clear-all-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsZWFyLWFsbC1kaWFsb2cvY2xlYXItYWxsLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clear-all-dialog/clear-all-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/clear-all-dialog/clear-all-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: ClearAllDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearAllDialogComponent", function() { return ClearAllDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClearAllDialogComponent = class ClearAllDialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClearAllDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clear-all-dialog',
        template: __webpack_require__(/*! raw-loader!./clear-all-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/clear-all-dialog/clear-all-dialog.component.html"),
        styles: [__webpack_require__(/*! ./clear-all-dialog.component.css */ "./src/app/clear-all-dialog/clear-all-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ClearAllDialogComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFooter {\r\n    background-color: #120f38;\r\n    color: white;\r\n    padding-top: 30px;\r\n    margin-top: 20px;\r\n}\r\n\r\n#myFooter .footer-copyright {\r\n    background-color: #d3196f;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    text-align: center;\r\n}\r\n\r\n#myFooter .row {\r\n    margin-bottom: 60px;\r\n}\r\n\r\n#myFooter .navbar-brand {\r\n    margin-top: 45px;\r\n    height: 65px;\r\n}\r\n\r\n#myFooter .footer-copyright p {\r\n    margin: 10px;\r\n    color: #ccc;\r\n}\r\n\r\n#myFooter ul {\r\n    list-style-type: none;\r\n    padding-left: 0;\r\n    line-height: 1.7;\r\n}\r\n\r\n#myFooter h5 {\r\n    font-size: 18px;\r\n    color: white;\r\n    font-weight: bold;\r\n    margin-top: 30px;\r\n}\r\n\r\n#myFooter h2 a{\r\n    font-size: 50px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n#myFooter a {\r\n    color: #d2d1d1;\r\n    text-decoration: none;\r\n}\r\n\r\n#myFooter a:hover,\r\n#myFooter a:focus {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n#myFooter .social-networks {\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n#myFooter .social-networks a {\r\n    font-size: 32px;\r\n    color: #f9f9f9;\r\n    padding: 10px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n\r\n#myFooter .social-networks a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n#myFooter .facebook:hover {\r\n    color: #0077e2;\r\n}\r\n\r\n#myFooter .google:hover {\r\n    color: #ef1a1a;\r\n}\r\n\r\n#myFooter .twitter:hover {\r\n    color: #00aced;\r\n}\r\n\r\n#myFooter .btn {\r\n    color: 120f38;\r\n    background-color: #afcd36;\r\n    border-radius: 20px;\r\n    border: none;\r\n    width: 150px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n    line-height: 25px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    #myFooter {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n/* CSS used for positioning the footers at the bottom of the page. */\r\n\r\n/* You can remove this. */\r\n\r\n/* html{\r\n    height: 100%;\r\n}\r\n\r\nbody{\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    flex-direction: column;\r\n    -webkit-flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.content{\r\n   flex: 1 0 auto;\r\n   -webkit-flex: 1 0 auto;\r\n   min-height: 200px;\r\n}\r\n\r\n#myFooter{\r\n   flex: 0 0 auto;\r\n   -webkit-flex: 0 0 auto;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBR0Esb0VBQW9FOztBQUNwRSx5QkFBeUI7O0FBRXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkciLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlGb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMGYzODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5mb290ZXItY29weXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzE5NmY7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI215Rm9vdGVyIC5yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5mb290ZXItY29weXJpZ2h0IHAge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbiNteUZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4jbXlGb290ZXIgaDUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4jbXlGb290ZXIgaDIgYXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbXlGb290ZXIgYSB7XHJcbiAgICBjb2xvcjogI2QyZDFkMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI215Rm9vdGVyIGE6aG92ZXIsXHJcbiNteUZvb3RlciBhOmZvY3VzIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI215Rm9vdGVyIC5zb2NpYWwtbmV0d29ya3Mge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5zb2NpYWwtbmV0d29ya3MgYSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4jbXlGb290ZXIgLnNvY2lhbC1uZXR3b3JrcyBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI215Rm9vdGVyIC5mYWNlYm9vazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwNzdlMjtcclxufVxyXG5cclxuI215Rm9vdGVyIC5nb29nbGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICNlZjFhMWE7XHJcbn1cclxuXHJcbiNteUZvb3RlciAudHdpdHRlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwYWNlZDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5idG4ge1xyXG4gICAgY29sb3I6IDEyMGYzODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmNkMzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICNteUZvb3RlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogQ1NTIHVzZWQgZm9yIHBvc2l0aW9uaW5nIHRoZSBmb290ZXJzIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UuICovXHJcbi8qIFlvdSBjYW4gcmVtb3ZlIHRoaXMuICovXHJcblxyXG4vKiBodG1se1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICBmbGV4OiAxIDAgYXV0bztcclxuICAgLXdlYmtpdC1mbGV4OiAxIDAgYXV0bztcclxuICAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbiNteUZvb3RlcntcclxuICAgZmxleDogMCAwIGF1dG87XHJcbiAgIC13ZWJraXQtZmxleDogMCAwIGF1dG87XHJcbn0gKi8iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/head/head.component.css":
/*!*****************************************!*\
  !*** ./src/app/head/head.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image{\r\n    height: 100%;\r\n}\r\n\r\n.example-spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n\r\n.username{\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.mat-icon {\r\n    padding-left: 0px;\r\n    margin-left: 0px;\r\n}\r\n\r\n.account-btn {\r\n    margin-left: auto;\r\n}\r\n\r\n.logo {\r\nheight: 50%;\r\noutline: none;\r\n}\r\n\r\n.logo:hover{\r\n    opacity: 0.5;\r\n}\r\n\r\n.linerMenu {\r\n    text-align: center;\r\n}\r\n\r\n/* Effect 4: bottom border enlarge */\r\n\r\n.cl-effect-4 a {\r\n\tpadding: 0 0 10px;\r\n}\r\n\r\n.cl-effect-4 a::after {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 1px;\r\n\tbackground: #d3196f;\r\n\tcontent: '';\r\n\topacity: 0;\r\n\t-webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateY(-10px);\r\n\ttransform: translateY(-10px);\r\n}\r\n\r\n.cl-effect-4 a:hover::after,\r\n.cl-effect-4 a:focus::after {\r\n\theight: 5px;\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n}\r\n\r\nnav a {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tmargin: 15px 25px;\r\n\toutline: none;\r\n\tcolor: #120f38;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tfont-weight: 400;\r\n\ttext-shadow: 0 0 1px rgba(211,25,11,0.3);\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\nnav a:hover,\r\nnav a:focus {\r\n\toutline: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZC9oZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0VBQ2hCOztBQUNGO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBLG9DQUFvQzs7QUFDcEM7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULE9BQU87Q0FDUCxXQUFXO0NBQ1gsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsVUFBVTtDQUNWLHFFQUFxRTtDQUVyRSw2REFBcUQ7Q0FBckQscURBQXFEO0NBQXJELDZFQUFxRDtDQUNyRCxvQ0FBb0M7Q0FFcEMsNEJBQTRCO0FBQzdCOztBQUVBOztDQUVDLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0NBQWtDO0NBRWxDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHdDQUF3QztDQUN4QyxpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZC9oZWFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuLnVzZXJuYW1le1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmFjY291bnQtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbmhlaWdodDogNTAlO1xyXG5vdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubG9nbzpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmxpbmVyTWVudSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBFZmZlY3QgNDogYm90dG9tIGJvcmRlciBlbmxhcmdlICovXHJcbi5jbC1lZmZlY3QtNCBhIHtcclxuXHRwYWRkaW5nOiAwIDAgMTBweDtcclxufVxyXG5cclxuLmNsLWVmZmVjdC00IGE6OmFmdGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMDAlO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxcHg7XHJcblx0YmFja2dyb3VuZDogI2QzMTk2ZjtcclxuXHRjb250ZW50OiAnJztcclxuXHRvcGFjaXR5OiAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MsIG9wYWNpdHkgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuXHQtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjNzLCBvcGFjaXR5IDAuM3MsIC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcblx0dHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MsIG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuM3M7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG59XHJcblxyXG4uY2wtZWZmZWN0LTQgYTpob3Zlcjo6YWZ0ZXIsXHJcbi5jbC1lZmZlY3QtNCBhOmZvY3VzOjphZnRlciB7XHJcblx0aGVpZ2h0OiA1cHg7XHJcblx0b3BhY2l0eTogMTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbjogMTVweCAyNXB4O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y29sb3I6ICMxMjBmMzg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHRleHQtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjExLDI1LDExLDAuMyk7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyLFxyXG5uYXYgYTpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/head/head.component.ts":
/*!****************************************!*\
  !*** ./src/app/head/head.component.ts ***!
  \****************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeadComponent = class HeadComponent {
    constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeadComponent.prototype, "sidenavToggle", void 0);
HeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-head',
        template: __webpack_require__(/*! raw-loader!./head.component.html */ "./node_modules/raw-loader/index.js!./src/app/head/head.component.html"),
        styles: [__webpack_require__(/*! ./head.component.css */ "./src/app/head/head.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeadComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image{\r\n    /* height: 100%; */\r\n}\r\n.mat-icon {\r\n    padding-left: 0px;\r\n    margin-left: 0px;\r\n}\r\n.account-btn {\r\n    margin-left: auto;\r\n}\r\n.logo {\r\nheight: 100%;\r\noutline: none;\r\n}\r\n.logo:hover{\r\n    opacity: 0.5;\r\n}\r\n.linerMenu {\r\n    text-align: center;\r\n}\r\n/* Effect 4: bottom border enlarge */\r\n.cl-effect-4 a {\r\n\tpadding: 0 0 10px;\r\n}\r\n.cl-effect-4 a::after {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 1px;\r\n\tbackground: #d3196f;\r\n\tcontent: '';\r\n\topacity: 0;\r\n\t-webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateY(-10px);\r\n\ttransform: translateY(-10px);\r\n}\r\n.cl-effect-4 a:hover::after,\r\n.cl-effect-4 a:focus::after {\r\n\theight: 5px;\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n}\r\nnav a {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tmargin: 15px 25px;\r\n\toutline: none;\r\n\tcolor: #120f38;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tfont-weight: 400;\r\n\ttext-shadow: 0 0 1px rgba(211,25,11,0.3);\r\n\tfont-size: 1.5rem;\r\n}\r\nnav a:hover,\r\nnav a:focus {\r\n\toutline: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2I7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUdBLG9DQUFvQztBQUNwQztDQUNDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsV0FBVztDQUNYLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFVBQVU7Q0FDVixxRUFBcUU7Q0FFckUsNkRBQXFEO0NBQXJELHFEQUFxRDtDQUFyRCw2RUFBcUQ7Q0FDckQsb0NBQW9DO0NBRXBDLDRCQUE0QjtBQUM3QjtBQUVBOztDQUVDLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0NBQWtDO0NBRWxDLDBCQUEwQjtBQUMzQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsd0NBQXdDO0NBQ3hDLGlCQUFpQjtBQUNsQjtBQUVBOztDQUVDLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdle1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcbi5tYXQtaWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5hY2NvdW50LWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmxvZ28ge1xyXG5oZWlnaHQ6IDEwMCU7XHJcbm91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4ubGluZXJNZW51IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIEVmZmVjdCA0OiBib3R0b20gYm9yZGVyIGVubGFyZ2UgKi9cclxuLmNsLWVmZmVjdC00IGEge1xyXG5cdHBhZGRpbmc6IDAgMCAxMHB4O1xyXG59XHJcblxyXG4uY2wtZWZmZWN0LTQgYTo6YWZ0ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDEwMCU7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDFweDtcclxuXHRiYWNrZ3JvdW5kOiAjZDMxOTZmO1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MsIG9wYWNpdHkgMC4zcywgLW1vei10cmFuc2Zvcm0gMC4zcztcclxuXHR0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4zcztcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbn1cclxuXHJcbi5jbC1lZmZlY3QtNCBhOmhvdmVyOjphZnRlcixcclxuLmNsLWVmZmVjdC00IGE6Zm9jdXM6OmFmdGVyIHtcclxuXHRoZWlnaHQ6IDVweDtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxufVxyXG5cclxubmF2IGEge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOiAxNXB4IDI1cHg7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRjb2xvcjogIzEyMGYzODtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0dGV4dC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyMTEsMjUsMTEsMC4zKTtcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxubmF2IGE6aG92ZXIsXHJcbm5hdiBhOmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "sidenavToggle", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-events {\r\n    width: 300px;\r\n    height: 200px;\r\n    overflow: auto;\r\n    border: 1px solid #555;\r\n  }\r\n  \r\n  .container{\r\n    min-height: 90vh;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ldmVudHMge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() {
        this.events = [];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html"),
        styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LandingComponent);



/***/ }),

/***/ "./src/app/layout-grid/layout-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/layout-grid/layout-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-grid-tile {\r\n    background: lightblue;\r\n  }\r\n\r\n.verticalToolbar {\r\n padding-top: 70px;\r\n}\r\n\r\n.mat-icon {\r\n    padding-left: 0px;\r\n    margin-left: 0px;\r\n}\r\n\r\n.account-btn {\r\n    margin-left: auto;\r\n}\r\n\r\n.logo {\r\nheight: 100%;\r\noutline: none;\r\n}\r\n\r\n.logo:hover{\r\n    opacity: 0.5;\r\n}\r\n\r\n.linerMenu {\r\n    text-align: center;\r\n}\r\n\r\n/* Effect 4: bottom border enlarge */\r\n\r\n.cl-effect-4 a {\r\n\tpadding: 0 0 10px;\r\n}\r\n\r\n.cl-effect-4 a::after {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 1px;\r\n\tbackground: #d3196f;\r\n\tcontent: '';\r\n\topacity: 0;\r\n\t-webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateY(-10px);\r\n\ttransform: translateY(-10px);\r\n}\r\n\r\n.cl-effect-4 a:hover::after,\r\n.cl-effect-4 a:focus::after {\r\n\theight: 5px;\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n}\r\n\r\nnav a {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tmargin: 15px 25px;\r\n\toutline: none;\r\n\tcolor: #120f38;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tfont-weight: 400;\r\n\ttext-shadow: 0 0 1px rgba(211,25,11,0.3);\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\nnav a:hover,\r\nnav a:focus {\r\n\toutline: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0LWdyaWQvbGF5b3V0LWdyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7RUFDdkI7O0FBRUY7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWE7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0Esb0NBQW9DOztBQUNwQztDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsT0FBTztDQUNQLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxVQUFVO0NBQ1YscUVBQXFFO0NBRXJFLDZEQUFxRDtDQUFyRCxxREFBcUQ7Q0FBckQsNkVBQXFEO0NBQ3JELG9DQUFvQztDQUVwQyw0QkFBNEI7QUFDN0I7O0FBRUE7O0NBRUMsV0FBVztDQUNYLFVBQVU7Q0FDVixrQ0FBa0M7Q0FFbEMsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsd0NBQXdDO0NBQ3hDLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyxhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQtZ3JpZC9sYXlvdXQtZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIH1cclxuXHJcbi52ZXJ0aWNhbFRvb2xiYXIge1xyXG4gcGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuLm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmFjY291bnQtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbmhlaWdodDogMTAwJTtcclxub3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmxvZ286aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5saW5lck1lbnUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogRWZmZWN0IDQ6IGJvdHRvbSBib3JkZXIgZW5sYXJnZSAqL1xyXG4uY2wtZWZmZWN0LTQgYSB7XHJcblx0cGFkZGluZzogMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5jbC1lZmZlY3QtNCBhOjphZnRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTAwJTtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdGJhY2tncm91bmQ6ICNkMzE5NmY7XHJcblx0Y29udGVudDogJyc7XHJcblx0b3BhY2l0eTogMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzLCBvcGFjaXR5IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcblx0LW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcywgb3BhY2l0eSAwLjNzLCAtbW96LXRyYW5zZm9ybSAwLjNzO1xyXG5cdHRyYW5zaXRpb246IGhlaWdodCAwLjNzLCBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjNzO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxufVxyXG5cclxuLmNsLWVmZmVjdC00IGE6aG92ZXI6OmFmdGVyLFxyXG4uY2wtZWZmZWN0LTQgYTpmb2N1czo6YWZ0ZXIge1xyXG5cdGhlaWdodDogNXB4O1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW46IDE1cHggMjVweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGNvbG9yOiAjMTIwZjM4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHR0ZXh0LXNoYWRvdzogMCAwIDFweCByZ2JhKDIxMSwyNSwxMSwwLjMpO1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5uYXYgYTpob3ZlcixcclxubmF2IGE6Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout-grid/layout-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layout-grid/layout-grid.component.ts ***!
  \******************************************************/
/*! exports provided: LayoutGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGridComponent", function() { return LayoutGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tile-service.service */ "./src/app/tile-service.service.ts");



let LayoutGridComponent = class LayoutGridComponent {
    constructor(_TileServiceService) {
        this._TileServiceService = _TileServiceService;
        this.fatherMsg = "messages binded";
        this.opened = false;
        this.sideNavTitle = "";
        this.numberOfTiles = "";
        this.isRequested = false;
    }
    ngOnInit() {
    }
    requestBoardToAddTile() {
        console.log("rbtt");
        this.isRequested = true;
    }
    openSidenav(msg) {
        this.opened = !this.opened;
        this.sideNavTitle = msg.toUpperCase();
    }
};
LayoutGridComponent.ctorParameters = () => [
    { type: _tile_service_service__WEBPACK_IMPORTED_MODULE_2__["TileServiceService"] }
];
LayoutGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout-grid',
        template: __webpack_require__(/*! raw-loader!./layout-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout-grid/layout-grid.component.html"),
        styles: [__webpack_require__(/*! ./layout-grid.component.css */ "./src/app/layout-grid/layout-grid.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tile_service_service__WEBPACK_IMPORTED_MODULE_2__["TileServiceService"]])
], LayoutGridComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dd {\r\n    background-color: rgb(250, 215, 215);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIxNSwgMjE1KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/material-module/material-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-module/material-module.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModuleModule", function() { return MaterialModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");




const materialComponebtModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
];
let MaterialModuleModule = class MaterialModuleModule {
};
MaterialModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            materialComponebtModules
        ],
        exports: [
            materialComponebtModules
        ]
    })
], MaterialModuleModule);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: `
    <h1>
      page-not-found works!
    </h1>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .mat-form-field {\r\n      font-size: 2rem;\r\n  }\r\n\r\n  .example-card {\r\n    max-width: 300px;\r\n  }\r\n\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n  ._divider {\r\npadding: 20px;\r\n  }\r\n\r\n  .dot {\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n\r\n  .example-container {\r\n    width: 500px;\r\n    height: 300px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  .example-sidenav-content {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n  .example-sidenav {\r\n    padding: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO01BQ0ksZUFBZTtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEI7O0VBQ0E7QUFDRixhQUFhO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5fZGl2aWRlciB7XHJcbnBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZG90IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let ProfileComponent = class ProfileComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.isDisabled = true;
        this.btnHandleEdit = true;
    }
    ngOnInit() {
    }
    editModde() {
        this.isDisabled = false;
        this.btnHandleEdit = false;
    }
    saveEditedForm() {
        this._snackBar.open('saved', 'dismise');
        this.isDisabled = true;
        this.btnHandleEdit = true;
    }
    cancelEditForm() {
        this.isDisabled = true;
        this.btnHandleEdit = true;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/registeration/registeration.component.css":
/*!***********************************************************!*\
  !*** ./src/app/registeration/registeration.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyYXRpb24vcmVnaXN0ZXJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/registeration/registeration.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/registeration/registeration.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationComponent", function() { return RegisterationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RegisterationComponent = class RegisterationComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.profileForm = this.formBuilder.group({
            login: this.formBuilder.group({
                username: [''],
                password: [''],
                rtpassword: ['']
            }),
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            lastName: [''],
            address: this.formBuilder.group({
                street: [''],
                city: [''],
                state: [''],
                zip: ['']
            }),
        });
    }
    ngOnInit() {
        console.log(this.profileForm);
    }
    onSubmit() {
        console.warn(this.profileForm.value);
    }
};
RegisterationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RegisterationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registeration',
        template: __webpack_require__(/*! raw-loader!./registeration.component.html */ "./node_modules/raw-loader/index.js!./src/app/registeration/registeration.component.html"),
        styles: [__webpack_require__(/*! ./registeration.component.css */ "./src/app/registeration/registeration.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], RegisterationComponent);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    min-height: calc(100vh - 150px);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsComponent);



/***/ }),

/***/ "./src/app/side-navigation/side-navigation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/side-navigation/side-navigation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container {\r\n\theight: 100%;\r\n\r\n}\r\n\r\nmat-sidenav{\r\n\twidth: 400px;\r\n\tpadding: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXZpZ2F0aW9uL3NpZGUtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTs7QUFFYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaWRlLW5hdmlnYXRpb24vc2lkZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2e1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRwYWRkaW5nOiAxNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/side-navigation/side-navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/side-navigation/side-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: SideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function() { return SideNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolbar-service.service */ "./src/app/toolbar-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let SideNavigationComponent = class SideNavigationComponent {
    constructor(_ToolbarServiceService) {
        this._ToolbarServiceService = _ToolbarServiceService;
    }
    ngOnInit() {
        // register sidenav to the service.
        this._ToolbarServiceService.setPanel(this.sidePanel);
        this._ToolbarServiceService.setContentVcf(this.vcf);
    }
};
SideNavigationComponent.ctorParameters = () => [
    { type: _toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panel', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
], SideNavigationComponent.prototype, "sidePanel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], SideNavigationComponent.prototype, "vcf", void 0);
SideNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-navigation',
        template: __webpack_require__(/*! raw-loader!./side-navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-navigation/side-navigation.component.html"),
        styles: [__webpack_require__(/*! ./side-navigation.component.css */ "./src/app/side-navigation/side-navigation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarServiceService"]])
], SideNavigationComponent);



/***/ }),

/***/ "./src/app/slide-menu/slide-menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/slide-menu/slide-menu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    color: green;\r\n}\r\n \r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n \r\n.nav-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGUtbWVudS9zbGlkZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zbGlkZS1tZW51L3NsaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbiBcclxuYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbiBcclxuLm5hdi1jYXB0aW9ue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/slide-menu/slide-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/slide-menu/slide-menu.component.ts ***!
  \****************************************************/
/*! exports provided: SlideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenuComponent", function() { return SlideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlideMenuComponent = class SlideMenuComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSidenavClose = () => {
            this.sidenavClose.emit();
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SlideMenuComponent.prototype, "sidenavClose", void 0);
SlideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-menu',
        template: __webpack_require__(/*! raw-loader!./slide-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/slide-menu/slide-menu.component.html"),
        styles: [__webpack_require__(/*! ./slide-menu.component.css */ "./src/app/slide-menu/slide-menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlideMenuComponent);



/***/ }),

/***/ "./src/app/test-ground/test-ground.component.css":
/*!*******************************************************!*\
  !*** ./src/app/test-ground/test-ground.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtZ3JvdW5kL3Rlc3QtZ3JvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test-ground/test-ground.component.ts":
/*!******************************************************!*\
  !*** ./src/app/test-ground/test-ground.component.ts ***!
  \******************************************************/
/*! exports provided: TestGroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGroundComponent", function() { return TestGroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestGroundComponent = class TestGroundComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestGroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-ground',
        template: __webpack_require__(/*! raw-loader!./test-ground.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-ground/test-ground.component.html"),
        styles: [__webpack_require__(/*! ./test-ground.component.css */ "./src/app/test-ground/test-ground.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestGroundComponent);



/***/ }),

/***/ "./src/app/tile-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/tile-service.service.ts ***!
  \*****************************************/
/*! exports provided: TileServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileServiceService", function() { return TileServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TileServiceService = class TileServiceService {
    constructor() {
        this.number = ['1', '2', '3'];
    }
    getNumber() {
        return this.number;
    }
};
TileServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TileServiceService);



/***/ }),

/***/ "./src/app/toolbar-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/toolbar-service.service.ts ***!
  \********************************************/
/*! exports provided: ToolbarServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarServiceService", function() { return ToolbarServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarServiceService = class ToolbarServiceService {
    constructor() {
    }
    // assign passing navside to this panel
    setPanel(sidenav) {
        this.panel = sidenav;
    }
    // assign the refrence to ng-template
    setContentVcf(viewContainerRef) {
        this.vcf = viewContainerRef;
    }
    // create view from the refrence of ng-template
    createView(template) {
        this.vcf.clear();
        this.vcf.createEmbeddedView(template);
    }
    // create a view and then assign it to naveside and then open 
    open(template) {
        this.createView(template);
        return this.panel.open();
    }
    // close the panel 
    close() {
        this.panel.close();
    }
    // toggle the panel
    toggle() {
        return this.panel.toggle();
    }
};
ToolbarServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ToolbarServiceService);



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verticalToolbar {\r\n    padding-top: 70px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbFRvb2xiYXIge1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolbar-service.service */ "./src/app/toolbar-service.service.ts");



let ToolbarComponent = class ToolbarComponent {
    constructor(_ToolbarServiceService) {
        this._ToolbarServiceService = _ToolbarServiceService;
    }
    ngOnInit() {
    }
    openWidget($event) {
        this._ToolbarServiceService.open($event);
    }
    closeWidget() {
        this._ToolbarServiceService.close();
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarServiceService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html"),
        styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_toolbar_service_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarServiceService"]])
], ToolbarComponent);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wajihat\Documents\GitHub\Buzzifier\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map