"use strict";
exports.id = "src_app_featured_featured_module_ts";
exports.ids = ["src_app_featured_featured_module_ts"];
exports.modules = {

/***/ "./src/app/featured/featured-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedRoutingModule": () => (/* binding */ FeaturedRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _featured_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/featured/featured.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _featured_component__WEBPACK_IMPORTED_MODULE_0__.FeaturedComponent }];
class FeaturedRoutingModule {
}
FeaturedRoutingModule.ɵfac = function FeaturedRoutingModule_Factory(t) { return new (t || FeaturedRoutingModule)(); };
FeaturedRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturedRoutingModule });
FeaturedRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/featured/featured.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedComponent": () => (/* binding */ FeaturedComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



class FeaturedComponent {
    constructor() {
        // Use the component constructor to inject providers.
    }
    ngOnInit() {
        // Init your component properties here.
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Application.getRootView();
        sideDrawer.showDrawer();
    }
}
FeaturedComponent.ɵfac = function FeaturedComponent_Factory(t) { return new (t || FeaturedComponent)(); };
FeaturedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeaturedComponent, selectors: [["Featured"]], decls: 8, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Featured", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF0E2", 1, "page__content-icon", "fas"], ["text", "Nada nuevo", 1, "page__content-placeholder"]], template: function FeaturedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function FeaturedComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "GridLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "Label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/featured/featured.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedModule": () => (/* binding */ FeaturedModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _featured_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/featured/featured-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class FeaturedModule {
}
FeaturedModule.ɵfac = function FeaturedModule_Factory(t) { return new (t || FeaturedModule)(); };
FeaturedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturedModule });
FeaturedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _featured_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeaturedRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9mZWF0dXJlZF9mZWF0dXJlZF9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ1I7QUFDckI7QUFDUTtBQUM1QyxrQkFBa0IscUJBQXFCLGtFQUFpQixFQUFFO0FBQ25EO0FBQ1A7QUFDQSx5RUFBeUU7QUFDekUsMkNBQTJDLDhEQUFtQixHQUFHLDZCQUE2QjtBQUM5RiwyQ0FBMkMsOERBQW1CLEdBQUcsV0FBVyxvRkFBaUMsV0FBVywyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDVGxHO0FBQ2I7QUFDUTtBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVFQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakUsdUNBQXVDLCtEQUFvQixHQUFHLG9iQUFvYjtBQUNsZixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxxRUFBcUUsaUNBQWlDO0FBQzNILFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDBEQUFlO0FBQ3ZCLE9BQU8sZUFBZSxxRUFBcUIsRUFBRSw0RUFBNEIscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUM5QjdCO0FBQ0M7QUFDOUI7QUFDN0I7QUFDUDtBQUNBLDJEQUEyRDtBQUMzRCxvQ0FBb0MsOERBQW1CLEdBQUcsc0JBQXNCO0FBQ2hGLG9DQUFvQyw4REFBbUIsR0FBRyxXQUFXLDJFQUF3QixFQUFFLDJFQUFxQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9mZWF0dXJlZC9mZWF0dXJlZC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2ZlYXR1cmVkL2ZlYXR1cmVkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL2ZlYXR1cmVkL2ZlYXR1cmVkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBGZWF0dXJlZENvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZWQuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5jb25zdCByb3V0ZXMgPSBbeyBwYXRoOiAnJywgY29tcG9uZW50OiBGZWF0dXJlZENvbXBvbmVudCB9XTtcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkUm91dGluZ01vZHVsZSB7XHJcbn1cclxuRmVhdHVyZWRSb3V0aW5nTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gRmVhdHVyZWRSb3V0aW5nTW9kdWxlX0ZhY3RvcnkodCkgeyByZXR1cm4gbmV3ICh0IHx8IEZlYXR1cmVkUm91dGluZ01vZHVsZSkoKTsgfTtcclxuRmVhdHVyZWRSb3V0aW5nTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBGZWF0dXJlZFJvdXRpbmdNb2R1bGUgfSk7XHJcbkZlYXR1cmVkUm91dGluZ01vZHVsZS7JtWluaiA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUluamVjdG9yKHsgaW1wb3J0czogW1tOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0gfSk7XHJcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuRmVhdHVyZWRDb21wb25lbnQuybVmYWMgPSBmdW5jdGlvbiBGZWF0dXJlZENvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBGZWF0dXJlZENvbXBvbmVudCkoKTsgfTtcclxuRmVhdHVyZWRDb21wb25lbnQuybVjbXAgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVDb21wb25lbnQoeyB0eXBlOiBGZWF0dXJlZENvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiRmVhdHVyZWRcIl1dLCBkZWNsczogOCwgdmFyczogMCwgY29uc3RzOiBbWzEsIFwiYWN0aW9uLWJhclwiXSwgW1widmlzaWJpbGl0eVwiLCBcImhpZGRlblwiXSwgW1wiY29sdW1uc1wiLCBcIjUwLCAqXCJdLCBbXCJ0ZXh0XCIsIFwiRmVhdHVyZWRcIiwgXCJjb2xTcGFuXCIsIFwiMlwiLCAxLCBcImFjdGlvbi1iYXItdGl0bGVcIl0sIFtcInRleHRcIiwgXCJcXHVGMEM5XCIsIDEsIFwiZmFzXCIsIDMsIFwidGFwXCJdLCBbMSwgXCJwYWdlX19jb250ZW50XCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjBFMlwiLCAxLCBcInBhZ2VfX2NvbnRlbnQtaWNvblwiLCBcImZhc1wiXSwgW1widGV4dFwiLCBcIk5hZGEgbnVldm9cIiwgMSwgXCJwYWdlX19jb250ZW50LXBsYWNlaG9sZGVyXCJdXSwgdGVtcGxhdGU6IGZ1bmN0aW9uIEZlYXR1cmVkQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJBY3Rpb25CYXJcIiwgMCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMSwgXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIDEpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMiwgXCJHcmlkTGF5b3V0XCIsIDIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDMsIFwiTGFiZWxcIiwgMyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg0LCBcIkxhYmVsXCIsIDQpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBGZWF0dXJlZENvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF90YXBfNF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkRyYXdlckJ1dHRvblRhcCgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDUsIFwiR3JpZExheW91dFwiLCA1KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg2LCBcIkxhYmVsXCIsIDYpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDcsIFwiTGFiZWxcIiwgNyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gfSwgZGlyZWN0aXZlczogW2kxLkFjdGlvbkJhckNvbXBvbmVudCwgaTEuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZV0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XHJcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IEZlYXR1cmVkUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZmVhdHVyZWQtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRNb2R1bGUge1xyXG59XHJcbkZlYXR1cmVkTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gRmVhdHVyZWRNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgRmVhdHVyZWRNb2R1bGUpKCk7IH07XHJcbkZlYXR1cmVkTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBGZWF0dXJlZE1vZHVsZSB9KTtcclxuRmVhdHVyZWRNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBGZWF0dXJlZFJvdXRpbmdNb2R1bGVdXSB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9