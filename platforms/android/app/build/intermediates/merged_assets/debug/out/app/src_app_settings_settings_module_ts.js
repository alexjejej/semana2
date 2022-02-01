"use strict";
exports.id = "src_app_settings_settings_module_ts";
exports.ids = ["src_app_settings_settings_module_ts"];
exports.modules = {

/***/ "./src/app/settings/settings-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent }];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); };
SettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");



class SettingsComponent {
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
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["Settings"]], decls: 13, vars: 0, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Settings", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [1, "page__content"], ["text", "\uF013", 1, "page__content-icon", "fas"], ["textWrap", "true", "marginTop", "300", "horizontalAlignment", "center"], ["text", "No tienes los permisos "], ["text", "suficientes para "], ["text", "realizar cambios en "], ["text", "el sistema"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function SettingsComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "GridLayout", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "Label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "FormattedString");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NavigationButtonDirective], encapsulation: 2 });


/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9zZXR0aW5nc19zZXR0aW5nc19tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ1I7QUFDckI7QUFDUTtBQUM1QyxrQkFBa0IscUJBQXFCLGtFQUFpQixFQUFFO0FBQ25EO0FBQ1A7QUFDQSx5RUFBeUU7QUFDekUsMkNBQTJDLDhEQUFtQixHQUFHLDZCQUE2QjtBQUM5RiwyQ0FBMkMsOERBQW1CLEdBQUcsV0FBVyxvRkFBaUMsV0FBVywyRUFBd0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDVGxHO0FBQ2I7QUFDUTtBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVFQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakUsdUNBQXVDLCtEQUFvQixHQUFHLHNrQkFBc2tCO0FBQ3BvQixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx3REFBYSxxRUFBcUUsaUNBQWlDO0FBQzNILFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsNERBQWlCO0FBQ3pCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSw0REFBaUI7QUFDekIsUUFBUSx1REFBWTtBQUNwQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx1REFBWTtBQUNwQixRQUFRLDBEQUFlO0FBQ3ZCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixPQUFPLGVBQWUscUVBQXFCLEVBQUUsNEVBQTRCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDckM3QjtBQUNDO0FBQzlCO0FBQzdCO0FBQ1A7QUFDQSwyREFBMkQ7QUFDM0Qsb0NBQW9DLDhEQUFtQixHQUFHLHNCQUFzQjtBQUNoRixvQ0FBb0MsOERBQW1CLEdBQUcsV0FBVywyRUFBd0IsRUFBRSwyRUFBcUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3Mtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcclxuY29uc3Qgcm91dGVzID0gW3sgcGF0aDogJycsIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQgfV07XHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1JvdXRpbmdNb2R1bGUge1xyXG59XHJcblNldHRpbmdzUm91dGluZ01vZHVsZS7JtWZhYyA9IGZ1bmN0aW9uIFNldHRpbmdzUm91dGluZ01vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBTZXR0aW5nc1JvdXRpbmdNb2R1bGUpKCk7IH07XHJcblNldHRpbmdzUm91dGluZ01vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogU2V0dGluZ3NSb3V0aW5nTW9kdWxlIH0pO1xyXG5TZXR0aW5nc1JvdXRpbmdNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdIH0pO1xyXG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCkge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSBBcHBsaWNhdGlvbi5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG59XHJcblNldHRpbmdzQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gU2V0dGluZ3NDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgU2V0dGluZ3NDb21wb25lbnQpKCk7IH07XHJcblNldHRpbmdzQ29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogU2V0dGluZ3NDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIlNldHRpbmdzXCJdXSwgZGVjbHM6IDEzLCB2YXJzOiAwLCBjb25zdHM6IFtbMSwgXCJhY3Rpb24tYmFyXCJdLCBbXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCJdLCBbXCJjb2x1bW5zXCIsIFwiNTAsICpcIl0sIFtcInRleHRcIiwgXCJTZXR0aW5nc1wiLCBcImNvbFNwYW5cIiwgXCIyXCIsIDEsIFwiYWN0aW9uLWJhci10aXRsZVwiXSwgW1widGV4dFwiLCBcIlxcdUYwQzlcIiwgMSwgXCJmYXNcIiwgMywgXCJ0YXBcIl0sIFsxLCBcInBhZ2VfX2NvbnRlbnRcIl0sIFtcInRleHRcIiwgXCJcXHVGMDEzXCIsIDEsIFwicGFnZV9fY29udGVudC1pY29uXCIsIFwiZmFzXCJdLCBbXCJ0ZXh0V3JhcFwiLCBcInRydWVcIiwgXCJtYXJnaW5Ub3BcIiwgXCIzMDBcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwiY2VudGVyXCJdLCBbXCJ0ZXh0XCIsIFwiTm8gdGllbmVzIGxvcyBwZXJtaXNvcyBcIl0sIFtcInRleHRcIiwgXCJzdWZpY2llbnRlcyBwYXJhIFwiXSwgW1widGV4dFwiLCBcInJlYWxpemFyIGNhbWJpb3MgZW4gXCJdLCBbXCJ0ZXh0XCIsIFwiZWwgc2lzdGVtYVwiXV0sIHRlbXBsYXRlOiBmdW5jdGlvbiBTZXR0aW5nc0NvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQWN0aW9uQmFyXCIsIDApO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEsIFwiTmF2aWdhdGlvbkJ1dHRvblwiLCAxKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIsIFwiR3JpZExheW91dFwiLCAyKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzLCBcIkxhYmVsXCIsIDMpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNCwgXCJMYWJlbFwiLCA0KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gU2V0dGluZ3NDb21wb25lbnRfVGVtcGxhdGVfTGFiZWxfdGFwXzRfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25EcmF3ZXJCdXR0b25UYXAoKTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg1LCBcIkdyaWRMYXlvdXRcIiwgNSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoNiwgXCJMYWJlbFwiLCA2KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDcsIFwiTGFiZWxcIiwgNyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg4LCBcIkZvcm1hdHRlZFN0cmluZ1wiKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg5LCBcInNwYW5cIiwgOCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTAsIFwic3BhblwiLCA5KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxMSwgXCJzcGFuXCIsIDEwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxMiwgXCJzcGFuXCIsIDExKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgIH0gfSwgZGlyZWN0aXZlczogW2kxLkFjdGlvbkJhckNvbXBvbmVudCwgaTEuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZV0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XHJcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IFNldHRpbmdzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2V0dGluZ3Mtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NNb2R1bGUge1xyXG59XHJcblNldHRpbmdzTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gU2V0dGluZ3NNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgU2V0dGluZ3NNb2R1bGUpKCk7IH07XHJcblNldHRpbmdzTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBTZXR0aW5nc01vZHVsZSB9KTtcclxuU2V0dGluZ3NNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBTZXR0aW5nc1JvdXRpbmdNb2R1bGVdXSB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9