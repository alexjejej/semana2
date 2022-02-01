"use strict";
exports.id = "src_app_usuarios_usuarios_module_ts";
exports.ids = ["src_app_usuarios_usuarios_module_ts"];
exports.modules = {

/***/ "./src/app/usuarios/usuarios-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosRoutingModule": () => (/* binding */ UsuariosRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/usuarios/usuarios.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _usuarios_component__WEBPACK_IMPORTED_MODULE_0__.UsuariosComponent }];
class UsuariosRoutingModule {
}
UsuariosRoutingModule.ɵfac = function UsuariosRoutingModule_Factory(t) { return new (t || UsuariosRoutingModule)(); };
UsuariosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsuariosRoutingModule });
UsuariosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/usuarios/usuarios.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosComponent": () => (/* binding */ UsuariosComponent)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/color/index.android.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _domain_reviews_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/domain/reviews.service.ts");
/* harmony import */ var _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@triniwiz/nativescript-toasty/index.android.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");







function UsuariosComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "FlexboxLayout", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "Image", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.imageR);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", item_r1.nameR);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", item_r1.review);
} }
class UsuariosComponent {
    constructor(review, routerExtensions) {
        this.review = review;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject providers.
    }
    pageLoaded(args) {
        this.review.newreview();
        var page = args.object;
        this.name = page.getViewById("name");
        this.name.text = global.nombreU + "\n";
        this.cargo = page.getViewById("cargo");
        this.cargo.text = "Cargo: " + global.cargoU;
        this.descripcion = page.getViewById("descripcion");
        this.descripcion.text = "Descripción: " + global.descripcionU + "\n";
        const img = page.getViewById("image");
        img.src = global.imageU;
    }
    ngOnInit() {
        // Init your component properties here.
    }
    like() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Te agrada esta persona' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Color('white'))
            .setBackgroundColor('#8fce00')
            .show();
    }
    dislike() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Te desagrada esta persona' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Color('white'))
            .setBackgroundColor('#ff9999')
            .show();
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Application.getRootView();
        sideDrawer.showDrawer();
    }
    onPull(args) {
        this.review.newreview();
        const pullRefresh = args.object;
        setTimeout(() => {
            pullRefresh.refreshing = false;
        }, 1000);
        console.log("recargado con exito");
    }
}
UsuariosComponent.ɵfac = function UsuariosComponent_Factory(t) { return new (t || UsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_domain_reviews_service__WEBPACK_IMPORTED_MODULE_0__.ReviewsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.RouterExtensions)); };
UsuariosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UsuariosComponent, selectors: [["Usuarios"]], decls: 21, vars: 1, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "auto,*,auto"], ["text", "Usuario", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], [3, "loaded"], [3, "refresh"], ["id", "image", "marginTop", "-10", "width", "50%", "height", "30%", 1, "thumb", "img-circle"], ["id", "name", "horizontalAlignment", "center", "marginTtextWrap", "true", "marginTop", "-20", "fontSize", "30", "text", "xx"], ["id", "cargo", "fontSize", "25", "text", "xx", "textWrap", "true"], ["id", "descripcion", "fontSize", "20"], ["flexDirection", "column"], ["text", "Rese\u00F1as", "textAlignment", "center", "marginTop", "10", "fontSize", "25", "background", "#FF5733", "color", "#ffffff"], ["text", "Recarga la p\u00E1gina para ver mas rese\u00F1as", "fontStyle", "italic", "textAlignment", "center", "marginTop", "10", "fontSize", "15"], ["marginTop", "50", 1, "list-group", 3, "items"], ["horizontalAlignment", "center", "text", "\u00BFConoces a la persona? Calificala"], ["src", "res://like", "marginTop", "50", "width", "50%", "height", "45%", "horizontalAlignment", "left", 3, "tap"], ["src", "res://dislike", "marginTop", "50", "width", "50%", "height", "30%", "horizontalAlignment", "right", 3, "tap"], ["width", "70", "height", "100", 3, "src"], ["textAlignment", "center", "fontSize", "18", 3, "text"], ["fontStyle", "italic", "textWrap", "true", "textAlignment", "center", "fontSize", "15", 3, "text"]], template: function UsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function UsuariosComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "Page", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("loaded", function UsuariosComponent_Template_Page_loaded_5_listener($event) { return ctx.pageLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "PullToRefresh", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("refresh", function UsuariosComponent_Template_PullToRefresh_refresh_6_listener($event) { return ctx.onPull($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "Image", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "Label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "FlexboxLayout", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ListView", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, UsuariosComponent_ng_template_16_Template, 4, 3, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "Label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "WrapLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "image", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function UsuariosComponent_Template_image_tap_19_listener() { return ctx.like(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "image", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tap", function UsuariosComponent_Template_image_tap_20_listener() { return ctx.dislike(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.review.buscar());
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.NavigationButtonDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.PageDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__.ListViewComponent], encapsulation: 2 });


/***/ }),

/***/ "./src/app/usuarios/usuarios.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosModule": () => (/* binding */ UsuariosModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class UsuariosModule {
}
UsuariosModule.ɵfac = function UsuariosModule_Factory(t) { return new (t || UsuariosModule)(); };
UsuariosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsuariosModule });
UsuariosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuariosRoutingModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFFQUFxQixFQUFFLDRFQUE0QixFQUFFLGdFQUFnQixFQUFFLG9FQUFvQixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQ2xIckU7QUFDQztBQUM5QjtBQUM3QjtBQUNQO0FBQ0EsMkRBQTJEO0FBQzNELG9DQUFvQyw4REFBbUIsR0FBRyxzQkFBc0I7QUFDaEYsb0NBQW9DLDhEQUFtQixHQUFHLFdBQVcsMkVBQXdCLEVBQUUsMkVBQXFCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvdXN1YXJpb3MvdXN1YXJpb3MuY29tcG9uZW50LnRzIiwid2VicGFjazovL3BydWViYS8uL3NyYy9hcHAvdXN1YXJpb3MvdXN1YXJpb3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IFVzdWFyaW9zQ29tcG9uZW50IH0gZnJvbSAnLi91c3Vhcmlvcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFVzdWFyaW9zQ29tcG9uZW50IH1dO1xyXG5leHBvcnQgY2xhc3MgVXN1YXJpb3NSb3V0aW5nTW9kdWxlIHtcclxufVxyXG5Vc3Vhcmlvc1JvdXRpbmdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBVc3Vhcmlvc1JvdXRpbmdNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgVXN1YXJpb3NSb3V0aW5nTW9kdWxlKSgpOyB9O1xyXG5Vc3Vhcmlvc1JvdXRpbmdNb2R1bGUuybVtb2QgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7IHR5cGU6IFVzdWFyaW9zUm91dGluZ01vZHVsZSB9KTtcclxuVXN1YXJpb3NSb3V0aW5nTW9kdWxlLsm1aW5qID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3IoeyBpbXBvcnRzOiBbW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSB9KTtcclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24sIENvbG9yIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcclxuaW1wb3J0IHsgUmV2aWV3c1NlcnZpY2UgfSBmcm9tIFwiLi4vZG9tYWluL3Jldmlld3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgVG9hc3REdXJhdGlvbiwgVG9hc3RQb3NpdGlvbiwgVG9hc3R5IH0gZnJvbSBcIkB0cmluaXdpei9uYXRpdmVzY3JpcHQtdG9hc3R5XCI7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuLi9kb21haW4vcmV2aWV3cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcclxuZnVuY3Rpb24gVXN1YXJpb3NDb21wb25lbnRfbmdfdGVtcGxhdGVfMTZfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiRmxleGJveExheW91dFwiLCAxMSk7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIkltYWdlXCIsIDE4KTtcclxuICAgIGkwLsm1ybVlbGVtZW50KDIsIFwibGFiZWxcIiwgMTkpO1xyXG4gICAgaTAuybXJtWVsZW1lbnQoMywgXCJsYWJlbFwiLCAyMCk7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG59IGlmIChyZiAmIDIpIHtcclxuICAgIGNvbnN0IGl0ZW1fcjEgPSBjdHguaXRlbTtcclxuICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xyXG4gICAgaTAuybXJtXByb3BlcnR5KFwic3JjXCIsIGl0ZW1fcjEuaW1hZ2VSKTtcclxuICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xyXG4gICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCBpdGVtX3IxLm5hbWVSKTtcclxuICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xyXG4gICAgaTAuybXJtXByb3BlcnR5KFwidGV4dFwiLCBpdGVtX3IxLnJldmlldyk7XHJcbn0gfVxyXG5leHBvcnQgY2xhc3MgVXN1YXJpb3NDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocmV2aWV3LCByb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgdGhpcy5yZXZpZXcgPSByZXZpZXc7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zID0gcm91dGVyRXh0ZW5zaW9ucztcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG4gICAgcGFnZUxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZXZpZXcubmV3cmV2aWV3KCk7XHJcbiAgICAgICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwYWdlLmdldFZpZXdCeUlkKFwibmFtZVwiKTtcclxuICAgICAgICB0aGlzLm5hbWUudGV4dCA9IGdsb2JhbC5ub21icmVVICsgXCJcXG5cIjtcclxuICAgICAgICB0aGlzLmNhcmdvID0gcGFnZS5nZXRWaWV3QnlJZChcImNhcmdvXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZ28udGV4dCA9IFwiQ2FyZ286IFwiICsgZ2xvYmFsLmNhcmdvVTtcclxuICAgICAgICB0aGlzLmRlc2NyaXBjaW9uID0gcGFnZS5nZXRWaWV3QnlJZChcImRlc2NyaXBjaW9uXCIpO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcGNpb24udGV4dCA9IFwiRGVzY3JpcGNpw7NuOiBcIiArIGdsb2JhbC5kZXNjcmlwY2lvblUgKyBcIlxcblwiO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJpbWFnZVwiKTtcclxuICAgICAgICBpbWcuc3JjID0gZ2xvYmFsLmltYWdlVTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgbGlrZSgpIHtcclxuICAgICAgICBuZXcgVG9hc3R5KHsgdGV4dDogJ1RlIGFncmFkYSBlc3RhIHBlcnNvbmEnIH0pXHJcbiAgICAgICAgICAgIC5zZXRUb2FzdER1cmF0aW9uKFRvYXN0RHVyYXRpb24uU0hPUlQpXHJcbiAgICAgICAgICAgIC5zZXRUb2FzdFBvc2l0aW9uKFRvYXN0UG9zaXRpb24uQk9UVE9NKVxyXG4gICAgICAgICAgICAuc2V0VGV4dENvbG9yKG5ldyBDb2xvcignd2hpdGUnKSlcclxuICAgICAgICAgICAgLnNldEJhY2tncm91bmRDb2xvcignIzhmY2UwMCcpXHJcbiAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBkaXNsaWtlKCkge1xyXG4gICAgICAgIG5ldyBUb2FzdHkoeyB0ZXh0OiAnVGUgZGVzYWdyYWRhIGVzdGEgcGVyc29uYScgfSlcclxuICAgICAgICAgICAgLnNldFRvYXN0RHVyYXRpb24oVG9hc3REdXJhdGlvbi5TSE9SVClcclxuICAgICAgICAgICAgLnNldFRvYXN0UG9zaXRpb24oVG9hc3RQb3NpdGlvbi5CT1RUT00pXHJcbiAgICAgICAgICAgIC5zZXRUZXh0Q29sb3IobmV3IENvbG9yKCd3aGl0ZScpKVxyXG4gICAgICAgICAgICAuc2V0QmFja2dyb3VuZENvbG9yKCcjZmY5OTk5JylcclxuICAgICAgICAgICAgLnNob3coKTtcclxuICAgIH1cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCkge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSBBcHBsaWNhdGlvbi5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG4gICAgb25QdWxsKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnJldmlldy5uZXdyZXZpZXcoKTtcclxuICAgICAgICBjb25zdCBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWNhcmdhZG8gY29uIGV4aXRvXCIpO1xyXG4gICAgfVxyXG59XHJcblVzdWFyaW9zQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gVXN1YXJpb3NDb21wb25lbnRfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgVXN1YXJpb3NDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTEuUmV2aWV3c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkyLlJvdXRlckV4dGVuc2lvbnMpKTsgfTtcclxuVXN1YXJpb3NDb21wb25lbnQuybVjbXAgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVDb21wb25lbnQoeyB0eXBlOiBVc3Vhcmlvc0NvbXBvbmVudCwgc2VsZWN0b3JzOiBbW1wiVXN1YXJpb3NcIl1dLCBkZWNsczogMjEsIHZhcnM6IDEsIGNvbnN0czogW1sxLCBcImFjdGlvbi1iYXJcIl0sIFtcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIl0sIFtcImNvbHVtbnNcIiwgXCJhdXRvLCosYXV0b1wiXSwgW1widGV4dFwiLCBcIlVzdWFyaW9cIiwgXCJjb2xTcGFuXCIsIFwiMlwiLCAxLCBcImFjdGlvbi1iYXItdGl0bGVcIl0sIFtcInRleHRcIiwgXCJcXHVGMEM5XCIsIDEsIFwiZmFzXCIsIDMsIFwidGFwXCJdLCBbMywgXCJsb2FkZWRcIl0sIFszLCBcInJlZnJlc2hcIl0sIFtcImlkXCIsIFwiaW1hZ2VcIiwgXCJtYXJnaW5Ub3BcIiwgXCItMTBcIiwgXCJ3aWR0aFwiLCBcIjUwJVwiLCBcImhlaWdodFwiLCBcIjMwJVwiLCAxLCBcInRodW1iXCIsIFwiaW1nLWNpcmNsZVwiXSwgW1wiaWRcIiwgXCJuYW1lXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcIm1hcmdpblR0ZXh0V3JhcFwiLCBcInRydWVcIiwgXCJtYXJnaW5Ub3BcIiwgXCItMjBcIiwgXCJmb250U2l6ZVwiLCBcIjMwXCIsIFwidGV4dFwiLCBcInh4XCJdLCBbXCJpZFwiLCBcImNhcmdvXCIsIFwiZm9udFNpemVcIiwgXCIyNVwiLCBcInRleHRcIiwgXCJ4eFwiLCBcInRleHRXcmFwXCIsIFwidHJ1ZVwiXSwgW1wiaWRcIiwgXCJkZXNjcmlwY2lvblwiLCBcImZvbnRTaXplXCIsIFwiMjBcIl0sIFtcImZsZXhEaXJlY3Rpb25cIiwgXCJjb2x1bW5cIl0sIFtcInRleHRcIiwgXCJSZXNlXFx1MDBGMWFzXCIsIFwidGV4dEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcIm1hcmdpblRvcFwiLCBcIjEwXCIsIFwiZm9udFNpemVcIiwgXCIyNVwiLCBcImJhY2tncm91bmRcIiwgXCIjRkY1NzMzXCIsIFwiY29sb3JcIiwgXCIjZmZmZmZmXCJdLCBbXCJ0ZXh0XCIsIFwiUmVjYXJnYSBsYSBwXFx1MDBFMWdpbmEgcGFyYSB2ZXIgbWFzIHJlc2VcXHUwMEYxYXNcIiwgXCJmb250U3R5bGVcIiwgXCJpdGFsaWNcIiwgXCJ0ZXh0QWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIFwibWFyZ2luVG9wXCIsIFwiMTBcIiwgXCJmb250U2l6ZVwiLCBcIjE1XCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCAxLCBcImxpc3QtZ3JvdXBcIiwgMywgXCJpdGVtc1wiXSwgW1wiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcInRleHRcIiwgXCJcXHUwMEJGQ29ub2NlcyBhIGxhIHBlcnNvbmE/IENhbGlmaWNhbGFcIl0sIFtcInNyY1wiLCBcInJlczovL2xpa2VcIiwgXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcIndpZHRoXCIsIFwiNTAlXCIsIFwiaGVpZ2h0XCIsIFwiNDUlXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImxlZnRcIiwgMywgXCJ0YXBcIl0sIFtcInNyY1wiLCBcInJlczovL2Rpc2xpa2VcIiwgXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcIndpZHRoXCIsIFwiNTAlXCIsIFwiaGVpZ2h0XCIsIFwiMzAlXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcInJpZ2h0XCIsIDMsIFwidGFwXCJdLCBbXCJ3aWR0aFwiLCBcIjcwXCIsIFwiaGVpZ2h0XCIsIFwiMTAwXCIsIDMsIFwic3JjXCJdLCBbXCJ0ZXh0QWxpZ25tZW50XCIsIFwiY2VudGVyXCIsIFwiZm9udFNpemVcIiwgXCIxOFwiLCAzLCBcInRleHRcIl0sIFtcImZvbnRTdHlsZVwiLCBcIml0YWxpY1wiLCBcInRleHRXcmFwXCIsIFwidHJ1ZVwiLCBcInRleHRBbGlnbm1lbnRcIiwgXCJjZW50ZXJcIiwgXCJmb250U2l6ZVwiLCBcIjE1XCIsIDMsIFwidGV4dFwiXV0sIHRlbXBsYXRlOiBmdW5jdGlvbiBVc3Vhcmlvc0NvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiQWN0aW9uQmFyXCIsIDApO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEsIFwiTmF2aWdhdGlvbkJ1dHRvblwiLCAxKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIsIFwiR3JpZExheW91dFwiLCAyKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgzLCBcIkxhYmVsXCIsIDMpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoNCwgXCJMYWJlbFwiLCA0KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gVXN1YXJpb3NDb21wb25lbnRfVGVtcGxhdGVfTGFiZWxfdGFwXzRfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgub25EcmF3ZXJCdXR0b25UYXAoKTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg1LCBcIlBhZ2VcIiwgNSk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwibG9hZGVkXCIsIGZ1bmN0aW9uIFVzdWFyaW9zQ29tcG9uZW50X1RlbXBsYXRlX1BhZ2VfbG9hZGVkXzVfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHgucGFnZUxvYWRlZCgkZXZlbnQpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDYsIFwiUHVsbFRvUmVmcmVzaFwiLCA2KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJyZWZyZXNoXCIsIGZ1bmN0aW9uIFVzdWFyaW9zQ29tcG9uZW50X1RlbXBsYXRlX1B1bGxUb1JlZnJlc2hfcmVmcmVzaF82X2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4Lm9uUHVsbCgkZXZlbnQpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDcsIFwiU3RhY2tMYXlvdXRcIik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoOCwgXCJJbWFnZVwiLCA3KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg5LCBcIkxhYmVsXCIsIDgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEwLCBcIkxhYmVsXCIsIDkpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDExLCBcImxhYmVsXCIsIDEwKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDEyLCBcIkZsZXhib3hMYXlvdXRcIiwgMTEpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEzLCBcImxhYmVsXCIsIDEyKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgxNCwgXCJsYWJlbFwiLCAxMyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDE1LCBcIkxpc3RWaWV3XCIsIDE0KTtcclxuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMTYsIFVzdWFyaW9zQ29tcG9uZW50X25nX3RlbXBsYXRlXzE2X1RlbXBsYXRlLCA0LCAzLCBcIm5nLXRlbXBsYXRlXCIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMTcsIFwiTGFiZWxcIiwgMTUpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTgsIFwiV3JhcExheW91dFwiKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDE5LCBcImltYWdlXCIsIDE2KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gVXN1YXJpb3NDb21wb25lbnRfVGVtcGxhdGVfaW1hZ2VfdGFwXzE5X2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lmxpa2UoKTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIwLCBcImltYWdlXCIsIDE3KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gVXN1YXJpb3NDb21wb25lbnRfVGVtcGxhdGVfaW1hZ2VfdGFwXzIwX2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4LmRpc2xpa2UoKTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgfSBpZiAocmYgJiAyKSB7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMTUpO1xyXG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIml0ZW1zXCIsIGN0eC5yZXZpZXcuYnVzY2FyKCkpO1xyXG4gICAgfSB9LCBkaXJlY3RpdmVzOiBbaTIuQWN0aW9uQmFyQ29tcG9uZW50LCBpMi5OYXZpZ2F0aW9uQnV0dG9uRGlyZWN0aXZlLCBpMi5QYWdlRGlyZWN0aXZlLCBpMi5MaXN0Vmlld0NvbXBvbmVudF0sIGVuY2Fwc3VsYXRpb246IDIgfSk7XHJcbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IFVzdWFyaW9zUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdXN1YXJpb3Mtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgY2xhc3MgVXN1YXJpb3NNb2R1bGUge1xyXG59XHJcblVzdWFyaW9zTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gVXN1YXJpb3NNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgVXN1YXJpb3NNb2R1bGUpKCk7IH07XHJcblVzdWFyaW9zTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBVc3Vhcmlvc01vZHVsZSB9KTtcclxuVXN1YXJpb3NNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBVc3Vhcmlvc1JvdXRpbmdNb2R1bGVdXSB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9