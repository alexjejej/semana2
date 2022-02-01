"use strict";
exports.id = "src_app_home_home_module_ts";
exports.ids = ["src_app_home_home_module_ts"];
exports.modules = {

/***/ "./src/app/home/home-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



let platform;
class HomeComponent {
    constructor() {
    }
    /*doLater(fn) {setTimeout(fn,1000);}*/
    ngOnInit() {
        /*this.doLater(() =>
        dialogs.action("Mensaje", "Cancelar!", ["Opcion1","Opcion2"])
                .then((result) => {
                  console.log("resultado: "+ result);
                  if (result === "Opcion1") {
                    this.doLater(() =>
                      dialogs.alert({
                        title: "Titulo 1",
                        message: "mje 1",
                        okButtonText: "btn 1"
                      }).then(() => console.log("cerrado 1!")));
                  } else if (result === "Opcion2") {
                    this.doLater(() =>
                      dialogs.alert({
                        title: "Titulo 2",
                        message: "mje 2",
                        okButtonText: "btn 2"
                      }).then(() => console.log("cerrado 2!")));
                      }
                }));
                /*const toastOptions: Toast.ToastOptions = {text: "hello word", duration: Toast.DURATION.SHORT};
                this.doLater(() => Toast.show(toastOptions));*/
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Application.getRootView();
        sideDrawer.showDrawer();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["Home"]], decls: 8, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Inicio", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF015", 1, "page__content-icon", "fas"], ["text", "Bienvenido  :)", 1, "page__content-placeholder"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function HomeComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "GridLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "Label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9ob21lX2hvbWVfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNoQjtBQUNiO0FBQ1E7QUFDNUMsa0JBQWtCLHFCQUFxQiwwREFBYSxFQUFFO0FBQy9DO0FBQ1A7QUFDQSxpRUFBaUU7QUFDakUsdUNBQXVDLDhEQUFtQixHQUFHLHlCQUF5QjtBQUN0Rix1Q0FBdUMsOERBQW1CLEdBQUcsV0FBVyxvRkFBaUMsV0FBVywyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDVDlGO0FBQ2I7QUFDUTtBQUM1QztBQUNPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLGlCQUFpQjtBQUNqQiw0REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSwyQkFBMkIsdUVBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxtQ0FBbUMsK0RBQW9CLEdBQUcsMGFBQTBhO0FBQ3BlLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLGlFQUFpRSxpQ0FBaUM7QUFDdkgsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsMERBQWU7QUFDdkIsT0FBTyxlQUFlLHFFQUFxQixFQUFFLDRFQUE0QixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQ3BEN0I7QUFDUDtBQUN0QjtBQUM3QjtBQUNQO0FBQ0EsbURBQW1EO0FBQ25ELGdDQUFnQyw4REFBbUIsR0FBRyxrQkFBa0I7QUFDeEUsZ0NBQWdDLDhEQUFtQixHQUFHLFdBQVcsMkVBQXdCLEVBQUUsbUVBQWlCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5jb25zdCByb3V0ZXMgPSBbeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1dO1xyXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUge1xyXG59XHJcbkhvbWVSb3V0aW5nTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gSG9tZVJvdXRpbmdNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgSG9tZVJvdXRpbmdNb2R1bGUpKCk7IH07XHJcbkhvbWVSb3V0aW5nTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBIb21lUm91dGluZ01vZHVsZSB9KTtcclxuSG9tZVJvdXRpbmdNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdIH0pO1xyXG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcclxubGV0IHBsYXRmb3JtO1xyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIC8qZG9MYXRlcihmbikge3NldFRpbWVvdXQoZm4sMTAwMCk7fSovXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvKnRoaXMuZG9MYXRlcigoKSA9PlxyXG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKFwiTWVuc2FqZVwiLCBcIkNhbmNlbGFyIVwiLCBbXCJPcGNpb24xXCIsXCJPcGNpb24yXCJdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdGFkbzogXCIrIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiT3BjaW9uMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0xhdGVyKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVGl0dWxvIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJtamUgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiYnRuIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcImNlcnJhZG8gMSFcIikpKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiT3BjaW9uMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0xhdGVyKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVGl0dWxvIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJtamUgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiYnRuIDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcImNlcnJhZG8gMiFcIikpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIC8qY29uc3QgdG9hc3RPcHRpb25zOiBUb2FzdC5Ub2FzdE9wdGlvbnMgPSB7dGV4dDogXCJoZWxsbyB3b3JkXCIsIGR1cmF0aW9uOiBUb2FzdC5EVVJBVElPTi5TSE9SVH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvTGF0ZXIoKCkgPT4gVG9hc3Quc2hvdyh0b2FzdE9wdGlvbnMpKTsqL1xyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuSG9tZUNvbXBvbmVudC7JtWZhYyA9IGZ1bmN0aW9uIEhvbWVDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgSG9tZUNvbXBvbmVudCkoKTsgfTtcclxuSG9tZUNvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IEhvbWVDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIkhvbWVcIl1dLCBkZWNsczogOCwgdmFyczogMCwgY29uc3RzOiBbWzEsIFwiYWN0aW9uLWJhclwiXSwgW1widmlzaWJpbGl0eVwiLCBcImhpZGRlblwiXSwgW1wiY29sdW1uc1wiLCBcIjUwLCAqXCJdLCBbXCJ0ZXh0XCIsIFwiSW5pY2lvXCIsIFwiY29sU3BhblwiLCBcIjJcIiwgMSwgXCJhY3Rpb24tYmFyLXRpdGxlXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjBDOVwiLCAxLCBcImZhc1wiLCAzLCBcInRhcFwiXSwgWzEsIFwicGFnZV9fY29udGVudFwiXSwgW1widGV4dFwiLCBcIlxcdUYwMTVcIiwgMSwgXCJwYWdlX19jb250ZW50LWljb25cIiwgXCJmYXNcIl0sIFtcInRleHRcIiwgXCJCaWVudmVuaWRvICA6KVwiLCAxLCBcInBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gSG9tZUNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQWN0aW9uQmFyXCIsIDApO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEsIFwiTmF2aWdhdGlvbkJ1dHRvblwiLCAxKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIsIFwiR3JpZExheW91dFwiLCAyKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzLCBcIkxhYmVsXCIsIDMpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNCwgXCJMYWJlbFwiLCA0KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gSG9tZUNvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF90YXBfNF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkRyYXdlckJ1dHRvblRhcCgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDUsIFwiR3JpZExheW91dFwiLCA1KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg2LCBcIkxhYmVsXCIsIDYpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDcsIFwiTGFiZWxcIiwgNyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gfSwgZGlyZWN0aXZlczogW2kxLkFjdGlvbkJhckNvbXBvbmVudCwgaTEuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZV0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XHJcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ob21lLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge1xyXG59XHJcbkhvbWVNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBIb21lTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEhvbWVNb2R1bGUpKCk7IH07XHJcbkhvbWVNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IEhvbWVNb2R1bGUgfSk7XHJcbkhvbWVNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBIb21lUm91dGluZ01vZHVsZV1dIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=