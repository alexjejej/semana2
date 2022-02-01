"use strict";
exports.id = "src_app_personal_personal_module_ts";
exports.ids = ["src_app_personal_personal_module_ts"];
exports.modules = {

/***/ "./src/app/personal/minlen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinLenDirective": () => (/* binding */ MinLenDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");


class MinLenDirective {
    constructor() {
        //
    }
    validate(control) {
        return !control.value || control.value.length >= (this.minlen
            || 2) ? null : { minlen: true };
    }
}
MinLenDirective.ɵfac = function MinLenDirective_Factory(t) { return new (t || MinLenDirective)(); };
MinLenDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MinLenDirective, selectors: [["", "minlen", ""]], inputs: { minlen: "minlen" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS, useExisting: MinLenDirective,
                multi: true }])] });


/***/ }),

/***/ "./src/app/personal/personal-routing.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalRoutingModule": () => (/* binding */ PersonalRoutingModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/personal/personal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");




const routes = [{ path: '', component: _personal_component__WEBPACK_IMPORTED_MODULE_0__.PersonalComponent }];
class PersonalRoutingModule {
}
PersonalRoutingModule.ɵfac = function PersonalRoutingModule_Factory(t) { return new (t || PersonalRoutingModule)(); };
PersonalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PersonalRoutingModule });
PersonalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule.forChild(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptRouterModule] });


/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalComponent": () => (/* binding */ PersonalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/ui/label/index.android.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/core/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/core/color/index.android.js");
/* harmony import */ var _domain_listas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/domain/listas.service.ts");
/* harmony import */ var _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@triniwiz/nativescript-toasty/index.android.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.mjs");
/* harmony import */ var _minlen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/personal/minlen.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@angular/common/fesm2015/common.mjs");











const _c0 = ["layout"];
function PersonalComponent_Label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "Label", 21);
} }
function PersonalComponent_Label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "Label", 22);
} }
function PersonalComponent_Button_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "Button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function PersonalComponent_Button_17_Template_Button_tap_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.onButtonTap($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PersonalComponent_Button_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "Button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function PersonalComponent_Button_18_Template_Button_tap_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.mensajeinvalid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PersonalComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "Flexboxlayout", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "Image", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r11.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", item_r11.name);
} }
let count = 0;
lbl: _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Label;
class PersonalComponent {
    constructor(people, routerExtensions) {
        this.people = people;
        this.routerExtensions = routerExtensions;
        this.textFieldValue = "";
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    onButtonTap(args) {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue);
            this.buscarAhora(args);
        }
    }
    onDrawerButtonTap() {
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Application.getRootView();
        sideDrawer.showDrawer();
    }
    OnItemTap(args) {
        this.routerExtensions.navigate(['/usuarios'], {
            transition: {
                name: 'slideTop',
            },
        });
        const sideDrawer = _nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Application.getRootView();
        sideDrawer.closeDrawer();
        return this.people.OnItemTap(args);
    }
    buscarAhora(s) {
        this.resultados = this.people.buscar().filter((x) => x.cargo.indexOf(this.textFieldValue) >= 0);
        const id = this.textFieldValue;
        if (id == "Director") {
            this.animacion();
        }
        else if (id == "Aseo") {
            this.animacion();
        }
        else if (id == "Profesor") {
            this.animacion();
        }
        else if (id == "Estudiante") {
            this.animacion();
        }
        else {
            this.cargonoencontrado();
        }
    }
    cargonoencontrado() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Cargo no encontrado' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color('white'))
            .setBackgroundColor('#ff9999')
            .show();
        const layout = this.layout.nativeElement;
        layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("red"),
            duration: 300,
            delay: 50
        }).then(() => layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("white"),
            duration: 300,
            delay: 50
        }));
    }
    animacion() {
        const layout = this.layout.nativeElement;
        layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("green"),
            duration: 270,
            delay: 50
        }).then(() => layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("white"),
            duration: 270,
            delay: 50
        }));
    }
    mostrarTodos() {
        this.animacion();
        this.resultados = this.people.buscar();
    }
    mensajeinvalid() {
        new _triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.Toasty({ text: 'Ingresa un cargo antes de buscar' })
            .setToastDuration(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastDuration.SHORT)
            .setToastPosition(_triniwiz_nativescript_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastPosition.BOTTOM)
            .setTextColor(new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color('white'))
            .setBackgroundColor('#ff9999')
            .show();
        const layout = this.layout.nativeElement;
        layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("red"),
            duration: 300,
            delay: 50
        }).then(() => layout.animate({
            backgroundColor: new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Color("white"),
            duration: 300,
            delay: 50
        }));
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_domain_listas_service__WEBPACK_IMPORTED_MODULE_0__.ListasService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.RouterExtensions)); };
PersonalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["Personal"]], viewQuery: function PersonalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.layout = _t.first);
    } }, outputs: { search: "search" }, decls: 25, vars: 6, consts: [[1, "action-bar"], ["visibility", "hidden"], ["columns", "50, *"], ["text", "Personal", "colSpan", "2", 1, "action-bar-title"], ["text", "\uF0C9", 1, "fas", 3, "tap"], ["xmlns", "http://schemas.nativescript.org/tns.xsd", 0, "xmlns", "PullRefresh", "@nativescript-community/ui-pulltorefresh", "loaded", "pageLoaded"], [1, "page__content"], ["layout", ""], ["text", "\uF007", 1, "page__content-icon", "fas"], ["horizontalAlignment", "center", "text", "____________________"], ["flexDirection", "row"], ["horizontalAlignment", "center", "hint", "Cargo a buscar", "width", "70%", "required", "", "minlen", "4", 3, "ngModel", "ngModelChange"], ["texto", "ngModel"], ["width", "25%", "text", "*", 4, "ngIf"], ["width", "25%", "text", "M\u00EDnimo 4 car\u00E1cteres", 4, "ngIf"], ["marginTop", "50", "text", "Buscar", "width", "40%", "horizontalAlignment", "left", 3, "tap", 4, "ngIf"], ["marginTop", "50", "text", "Buscar", "width", "40%", "background", "red", "horizontalAlignment", "left", 3, "tap", 4, "ngIf"], ["marginTop", "50", "text", "Mostrar todos", "width", "40%", "horizontalAlignment", "right", 3, "tap"], ["id", "lbl", "horizontalAlignment", "center", "text", "Clic en la persona para m\u00E1s detalles"], [3, "search"], ["marginTop", "50", 1, "list-group", 2, "height", "1250px", 3, "items", "itemTap"], ["width", "25%", "text", "*"], ["width", "25%", "text", "M\u00EDnimo 4 car\u00E1cteres"], ["marginTop", "50", "text", "Buscar", "width", "40%", "horizontalAlignment", "left", 3, "tap"], ["marginTop", "50", "text", "Buscar", "width", "40%", "background", "red", "horizontalAlignment", "left", 3, "tap"], ["flexDirection", "row", 1, "list-group-item"], [1, "thumb", "img-circle", 3, "src"], ["verticalAlignment", "center", 1, "list-group-item-heading", 2, "width", "60%", 3, "text"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "GridLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function PersonalComponent_Template_Label_tap_4_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "page", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "StackLayout", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "Label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "FlexboxLayout", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "TextField", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_TextField_ngModelChange_12_listener($event) { return ctx.textFieldValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PersonalComponent_Label_14_Template, 1, 0, "Label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PersonalComponent_Label_15_Template, 1, 0, "Label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "WrapLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PersonalComponent_Button_17_Template, 1, 0, "Button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PersonalComponent_Button_18_Template, 1, 0, "Button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "Button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tap", function PersonalComponent_Template_Button_tap_19_listener() { return ctx.mostrarTodos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "Label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "SearchForm", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("search", function PersonalComponent_Template_SearchForm_search_21_listener($event) { return ctx.buscarAhora($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ListView", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemTap", function PersonalComponent_Template_ListView_itemTap_23_listener($event) { return ctx.OnItemTap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PersonalComponent_ng_template_24_Template, 3, 2, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.textFieldValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r1.hasError("required") && _r1.hasError("minlen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.resultados);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.ActionBarComponent, _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.NavigationButtonDirective, _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _minlen__WEBPACK_IMPORTED_MODULE_2__.MinLenDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _nativescript_angular__WEBPACK_IMPORTED_MODULE_7__.ListViewComponent], encapsulation: 2 });
class Select {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}
class Arrayresultados {
    constructor(cargo, name, image) {
        this.cargo = cargo;
        this.name = name;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/personal/personal.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalModule": () => (/* binding */ PersonalModule)
/* harmony export */ });
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");
/* harmony import */ var _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/personal/personal-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");



class PersonalModule {
}
PersonalModule.ɵfac = function PersonalModule_Factory(t) { return new (t || PersonalModule)(); };
PersonalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PersonalModule });
PersonalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptCommonModule, _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalRoutingModule, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.NativeScriptFormsModule]] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsdUZBQXVGLCtCQUErQjtBQUMzSSxRQUFRLHdEQUFhO0FBQ3JCLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwwREFBZTtBQUN2QixRQUFRLDBEQUFlO0FBQ3ZCLE1BQU07QUFDTixvQkFBb0IseURBQWM7QUFDbEMsUUFBUSx1REFBWTtBQUNwQixRQUFRLHdEQUFhO0FBQ3JCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx3REFBYTtBQUNyQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsd0RBQWE7QUFDckIsUUFBUSx1REFBWTtBQUNwQixRQUFRLHdEQUFhO0FBQ3JCLFFBQVEsdURBQVk7QUFDcEIsUUFBUSx3REFBYTtBQUNyQixRQUFRLHVEQUFZO0FBQ3BCLFFBQVEsd0RBQWE7QUFDckIsT0FBTyxlQUFlLHFFQUFxQixFQUFFLDRFQUE0QixFQUFFLG9FQUFvQixFQUFFLDZEQUFvQixFQUFFLG9EQUFrQixFQUFFLDJEQUFrQixFQUFFLG1EQUFVLEVBQUUsaURBQU8sRUFBRSxvRUFBb0IscUJBQXFCO0FBQzdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVOMEY7QUFDeEI7QUFDOUI7QUFDN0I7QUFDUDtBQUNBLDJEQUEyRDtBQUMzRCxvQ0FBb0MsOERBQW1CLEdBQUcsc0JBQXNCO0FBQ2hGLG9DQUFvQyw4REFBbUIsR0FBRyxXQUFXLDJFQUF3QixFQUFFLDJFQUFxQixFQUFFLDBFQUF1QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9wZXJzb25hbC9taW5sZW4udHMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhLy4vc3JjL2FwcC9wZXJzb25hbC9wZXJzb25hbC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9zcmMvYXBwL3BlcnNvbmFsL3BlcnNvbmFsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGNsYXNzIE1pbkxlbkRpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUoY29udHJvbCkge1xyXG4gICAgICAgIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCBjb250cm9sLnZhbHVlLmxlbmd0aCA+PSAodGhpcy5taW5sZW5cclxuICAgICAgICAgICAgfHwgMikgPyBudWxsIDogeyBtaW5sZW46IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5NaW5MZW5EaXJlY3RpdmUuybVmYWMgPSBmdW5jdGlvbiBNaW5MZW5EaXJlY3RpdmVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgTWluTGVuRGlyZWN0aXZlKSgpOyB9O1xyXG5NaW5MZW5EaXJlY3RpdmUuybVkaXIgPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVEaXJlY3RpdmUoeyB0eXBlOiBNaW5MZW5EaXJlY3RpdmUsIHNlbGVjdG9yczogW1tcIlwiLCBcIm1pbmxlblwiLCBcIlwiXV0sIGlucHV0czogeyBtaW5sZW46IFwibWlubGVuXCIgfSwgZmVhdHVyZXM6IFtpMC7Jtcm1UHJvdmlkZXJzRmVhdHVyZShbeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTWluTGVuRGlyZWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgbXVsdGk6IHRydWUgfV0pXSB9KTtcclxuIiwiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcclxuaW1wb3J0IHsgUGVyc29uYWxDb21wb25lbnQgfSBmcm9tICcuL3BlcnNvbmFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcclxuY29uc3Qgcm91dGVzID0gW3sgcGF0aDogJycsIGNvbXBvbmVudDogUGVyc29uYWxDb21wb25lbnQgfV07XHJcbmV4cG9ydCBjbGFzcyBQZXJzb25hbFJvdXRpbmdNb2R1bGUge1xyXG59XHJcblBlcnNvbmFsUm91dGluZ01vZHVsZS7JtWZhYyA9IGZ1bmN0aW9uIFBlcnNvbmFsUm91dGluZ01vZHVsZV9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBQZXJzb25hbFJvdXRpbmdNb2R1bGUpKCk7IH07XHJcblBlcnNvbmFsUm91dGluZ01vZHVsZS7JtW1vZCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZU5nTW9kdWxlKHsgdHlwZTogUGVyc29uYWxSb3V0aW5nTW9kdWxlIH0pO1xyXG5QZXJzb25hbFJvdXRpbmdNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdIH0pO1xyXG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb24sIENvbG9yLCBMYWJlbCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XHJcbmltcG9ydCB7IExpc3Rhc1NlcnZpY2UgfSBmcm9tIFwiLi4vZG9tYWluL2xpc3Rhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBUb2FzdER1cmF0aW9uLCBUb2FzdFBvc2l0aW9uLCBUb2FzdHkgfSBmcm9tICdAdHJpbml3aXovbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuLi9kb21haW4vbGlzdGFzLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0ICogYXMgaTQgZnJvbSBcIi4vbWlubGVuXCI7XHJcbmltcG9ydCAqIGFzIGk1IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuY29uc3QgX2MwID0gW1wibGF5b3V0XCJdO1xyXG5mdW5jdGlvbiBQZXJzb25hbENvbXBvbmVudF9MYWJlbF8xNF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgIGkwLsm1ybVlbGVtZW50KDAsIFwiTGFiZWxcIiwgMjEpO1xyXG59IH1cclxuZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfTGFiZWxfMTVfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudCgwLCBcIkxhYmVsXCIsIDIyKTtcclxufSB9XHJcbmZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X0J1dHRvbl8xN19UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgIGNvbnN0IF9yOCA9IGkwLsm1ybVnZXRDdXJyZW50VmlldygpO1xyXG4gICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkJ1dHRvblwiLCAyMyk7XHJcbiAgICBpMC7Jtcm1bGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfQnV0dG9uXzE3X1RlbXBsYXRlX0J1dHRvbl90YXBfMF9saXN0ZW5lcigkZXZlbnQpIHsgaTAuybXJtXJlc3RvcmVWaWV3KF9yOCk7IGNvbnN0IGN0eF9yNyA9IGkwLsm1ybVuZXh0Q29udGV4dCgpOyByZXR1cm4gY3R4X3I3Lm9uQnV0dG9uVGFwKCRldmVudCk7IH0pO1xyXG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxufSB9XHJcbmZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X0J1dHRvbl8xOF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgIGNvbnN0IF9yMTAgPSBpMC7Jtcm1Z2V0Q3VycmVudFZpZXcoKTtcclxuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJCdXR0b25cIiwgMjQpO1xyXG4gICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X0J1dHRvbl8xOF9UZW1wbGF0ZV9CdXR0b25fdGFwXzBfbGlzdGVuZXIoKSB7IGkwLsm1ybVyZXN0b3JlVmlldyhfcjEwKTsgY29uc3QgY3R4X3I5ID0gaTAuybXJtW5leHRDb250ZXh0KCk7IHJldHVybiBjdHhfcjkubWVuc2FqZWludmFsaWQoKTsgfSk7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG59IH1cclxuZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfbmdfdGVtcGxhdGVfMjRfVGVtcGxhdGUocmYsIGN0eCkgeyBpZiAocmYgJiAxKSB7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiRmxleGJveGxheW91dFwiLCAyNSk7XHJcbiAgICBpMC7Jtcm1ZWxlbWVudCgxLCBcIkltYWdlXCIsIDI2KTtcclxuICAgIGkwLsm1ybVlbGVtZW50KDIsIFwibGFiZWxcIiwgMjcpO1xyXG4gICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxufSBpZiAocmYgJiAyKSB7XHJcbiAgICBjb25zdCBpdGVtX3IxMSA9IGN0eC5pdGVtO1xyXG4gICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJzcmNcIiwgaXRlbV9yMTEuaW1hZ2UpO1xyXG4gICAgaTAuybXJtWFkdmFuY2UoMSk7XHJcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJ0ZXh0XCIsIGl0ZW1fcjExLm5hbWUpO1xyXG59IH1cclxubGV0IGNvdW50ID0gMDtcclxubGJsOiBMYWJlbDtcclxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBlb3BsZSwgcm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHRoaXMucGVvcGxlID0gcGVvcGxlO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucyA9IHJvdXRlckV4dGVuc2lvbnM7XHJcbiAgICAgICAgdGhpcy50ZXh0RmllbGRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuICAgIG9uQnV0dG9uVGFwKGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRleHRGaWVsZFZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy50ZXh0RmllbGRWYWx1ZS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmVtaXQodGhpcy50ZXh0RmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVzY2FyQWhvcmEoYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbiAgICBPbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy91c3VhcmlvcyddLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IEFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlb3BsZS5Pbkl0ZW1UYXAoYXJncyk7XHJcbiAgICB9XHJcbiAgICBidXNjYXJBaG9yYShzKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRhZG9zID0gdGhpcy5wZW9wbGUuYnVzY2FyKCkuZmlsdGVyKCh4KSA9PiB4LmNhcmdvLmluZGV4T2YodGhpcy50ZXh0RmllbGRWYWx1ZSkgPj0gMCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnRleHRGaWVsZFZhbHVlO1xyXG4gICAgICAgIGlmIChpZCA9PSBcIkRpcmVjdG9yXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYWNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaWQgPT0gXCJBc2VvXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYWNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaWQgPT0gXCJQcm9mZXNvclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWFjaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkID09IFwiRXN0dWRpYW50ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWFjaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmdvbm9lbmNvbnRyYWRvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FyZ29ub2VuY29udHJhZG8oKSB7XHJcbiAgICAgICAgbmV3IFRvYXN0eSh7IHRleHQ6ICdDYXJnbyBubyBlbmNvbnRyYWRvJyB9KVxyXG4gICAgICAgICAgICAuc2V0VG9hc3REdXJhdGlvbihUb2FzdER1cmF0aW9uLlNIT1JUKVxyXG4gICAgICAgICAgICAuc2V0VG9hc3RQb3NpdGlvbihUb2FzdFBvc2l0aW9uLkJPVFRPTSlcclxuICAgICAgICAgICAgLnNldFRleHRDb2xvcihuZXcgQ29sb3IoJ3doaXRlJykpXHJcbiAgICAgICAgICAgIC5zZXRCYWNrZ3JvdW5kQ29sb3IoJyNmZjk5OTknKVxyXG4gICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMubGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGF5b3V0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcInJlZFwiKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICAgICAgZGVsYXk6IDUwXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiBsYXlvdXQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwid2hpdGVcIiksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiA1MFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGFuaW1hY2lvbigpIHtcclxuICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmxheW91dC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxheW91dC5hbmltYXRlKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCJncmVlblwiKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDI3MCxcclxuICAgICAgICAgICAgZGVsYXk6IDUwXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiBsYXlvdXQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwid2hpdGVcIiksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNzAsXHJcbiAgICAgICAgICAgIGRlbGF5OiA1MFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIG1vc3RyYXJUb2RvcygpIHtcclxuICAgICAgICB0aGlzLmFuaW1hY2lvbigpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0YWRvcyA9IHRoaXMucGVvcGxlLmJ1c2NhcigpO1xyXG4gICAgfVxyXG4gICAgbWVuc2FqZWludmFsaWQoKSB7XHJcbiAgICAgICAgbmV3IFRvYXN0eSh7IHRleHQ6ICdJbmdyZXNhIHVuIGNhcmdvIGFudGVzIGRlIGJ1c2NhcicgfSlcclxuICAgICAgICAgICAgLnNldFRvYXN0RHVyYXRpb24oVG9hc3REdXJhdGlvbi5TSE9SVClcclxuICAgICAgICAgICAgLnNldFRvYXN0UG9zaXRpb24oVG9hc3RQb3NpdGlvbi5CT1RUT00pXHJcbiAgICAgICAgICAgIC5zZXRUZXh0Q29sb3IobmV3IENvbG9yKCd3aGl0ZScpKVxyXG4gICAgICAgICAgICAuc2V0QmFja2dyb3VuZENvbG9yKCcjZmY5OTk5JylcclxuICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmxheW91dC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxheW91dC5hbmltYXRlKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCJyZWRcIiksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiA1MFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gbGF5b3V0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIndoaXRlXCIpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICAgICAgICBkZWxheTogNTBcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuUGVyc29uYWxDb21wb25lbnQuybVmYWMgPSBmdW5jdGlvbiBQZXJzb25hbENvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBQZXJzb25hbENvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMS5MaXN0YXNTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMi5Sb3V0ZXJFeHRlbnNpb25zKSk7IH07XHJcblBlcnNvbmFsQ29tcG9uZW50Lsm1Y21wID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHsgdHlwZTogUGVyc29uYWxDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIlBlcnNvbmFsXCJdXSwgdmlld1F1ZXJ5OiBmdW5jdGlvbiBQZXJzb25hbENvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcclxuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XHJcbiAgICB9IGlmIChyZiAmIDIpIHtcclxuICAgICAgICBsZXQgX3Q7XHJcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5sYXlvdXQgPSBfdC5maXJzdCk7XHJcbiAgICB9IH0sIG91dHB1dHM6IHsgc2VhcmNoOiBcInNlYXJjaFwiIH0sIGRlY2xzOiAyNSwgdmFyczogNiwgY29uc3RzOiBbWzEsIFwiYWN0aW9uLWJhclwiXSwgW1widmlzaWJpbGl0eVwiLCBcImhpZGRlblwiXSwgW1wiY29sdW1uc1wiLCBcIjUwLCAqXCJdLCBbXCJ0ZXh0XCIsIFwiUGVyc29uYWxcIiwgXCJjb2xTcGFuXCIsIFwiMlwiLCAxLCBcImFjdGlvbi1iYXItdGl0bGVcIl0sIFtcInRleHRcIiwgXCJcXHVGMEM5XCIsIDEsIFwiZmFzXCIsIDMsIFwidGFwXCJdLCBbXCJ4bWxuc1wiLCBcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFwiLCAwLCBcInhtbG5zXCIsIFwiUHVsbFJlZnJlc2hcIiwgXCJAbmF0aXZlc2NyaXB0LWNvbW11bml0eS91aS1wdWxsdG9yZWZyZXNoXCIsIFwibG9hZGVkXCIsIFwicGFnZUxvYWRlZFwiXSwgWzEsIFwicGFnZV9fY29udGVudFwiXSwgW1wibGF5b3V0XCIsIFwiXCJdLCBbXCJ0ZXh0XCIsIFwiXFx1RjAwN1wiLCAxLCBcInBhZ2VfX2NvbnRlbnQtaWNvblwiLCBcImZhc1wiXSwgW1wiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcInRleHRcIiwgXCJfX19fX19fX19fX19fX19fX19fX1wiXSwgW1wiZmxleERpcmVjdGlvblwiLCBcInJvd1wiXSwgW1wiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcImhpbnRcIiwgXCJDYXJnbyBhIGJ1c2NhclwiLCBcIndpZHRoXCIsIFwiNzAlXCIsIFwicmVxdWlyZWRcIiwgXCJcIiwgXCJtaW5sZW5cIiwgXCI0XCIsIDMsIFwibmdNb2RlbFwiLCBcIm5nTW9kZWxDaGFuZ2VcIl0sIFtcInRleHRvXCIsIFwibmdNb2RlbFwiXSwgW1wid2lkdGhcIiwgXCIyNSVcIiwgXCJ0ZXh0XCIsIFwiKlwiLCA0LCBcIm5nSWZcIl0sIFtcIndpZHRoXCIsIFwiMjUlXCIsIFwidGV4dFwiLCBcIk1cXHUwMEVEbmltbyA0IGNhclxcdTAwRTFjdGVyZXNcIiwgNCwgXCJuZ0lmXCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcInRleHRcIiwgXCJCdXNjYXJcIiwgXCJ3aWR0aFwiLCBcIjQwJVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJsZWZ0XCIsIDMsIFwidGFwXCIsIDQsIFwibmdJZlwiXSwgW1wibWFyZ2luVG9wXCIsIFwiNTBcIiwgXCJ0ZXh0XCIsIFwiQnVzY2FyXCIsIFwid2lkdGhcIiwgXCI0MCVcIiwgXCJiYWNrZ3JvdW5kXCIsIFwicmVkXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImxlZnRcIiwgMywgXCJ0YXBcIiwgNCwgXCJuZ0lmXCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcInRleHRcIiwgXCJNb3N0cmFyIHRvZG9zXCIsIFwid2lkdGhcIiwgXCI0MCVcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwicmlnaHRcIiwgMywgXCJ0YXBcIl0sIFtcImlkXCIsIFwibGJsXCIsIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCBcInRleHRcIiwgXCJDbGljIGVuIGxhIHBlcnNvbmEgcGFyYSBtXFx1MDBFMXMgZGV0YWxsZXNcIl0sIFszLCBcInNlYXJjaFwiXSwgW1wibWFyZ2luVG9wXCIsIFwiNTBcIiwgMSwgXCJsaXN0LWdyb3VwXCIsIDIsIFwiaGVpZ2h0XCIsIFwiMTI1MHB4XCIsIDMsIFwiaXRlbXNcIiwgXCJpdGVtVGFwXCJdLCBbXCJ3aWR0aFwiLCBcIjI1JVwiLCBcInRleHRcIiwgXCIqXCJdLCBbXCJ3aWR0aFwiLCBcIjI1JVwiLCBcInRleHRcIiwgXCJNXFx1MDBFRG5pbW8gNCBjYXJcXHUwMEUxY3RlcmVzXCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcInRleHRcIiwgXCJCdXNjYXJcIiwgXCJ3aWR0aFwiLCBcIjQwJVwiLCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgXCJsZWZ0XCIsIDMsIFwidGFwXCJdLCBbXCJtYXJnaW5Ub3BcIiwgXCI1MFwiLCBcInRleHRcIiwgXCJCdXNjYXJcIiwgXCJ3aWR0aFwiLCBcIjQwJVwiLCBcImJhY2tncm91bmRcIiwgXCJyZWRcIiwgXCJob3Jpem9udGFsQWxpZ25tZW50XCIsIFwibGVmdFwiLCAzLCBcInRhcFwiXSwgW1wiZmxleERpcmVjdGlvblwiLCBcInJvd1wiLCAxLCBcImxpc3QtZ3JvdXAtaXRlbVwiXSwgWzEsIFwidGh1bWJcIiwgXCJpbWctY2lyY2xlXCIsIDMsIFwic3JjXCJdLCBbXCJ2ZXJ0aWNhbEFsaWdubWVudFwiLCBcImNlbnRlclwiLCAxLCBcImxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nXCIsIDIsIFwid2lkdGhcIiwgXCI2MCVcIiwgMywgXCJ0ZXh0XCJdXSwgdGVtcGxhdGU6IGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHsgaWYgKHJmICYgMSkge1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJBY3Rpb25CYXJcIiwgMCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMSwgXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIDEpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMiwgXCJHcmlkTGF5b3V0XCIsIDIpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDMsIFwiTGFiZWxcIiwgMyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCg0LCBcIkxhYmVsXCIsIDQpO1xyXG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcInRhcFwiLCBmdW5jdGlvbiBQZXJzb25hbENvbXBvbmVudF9UZW1wbGF0ZV9MYWJlbF90YXBfNF9saXN0ZW5lcigpIHsgcmV0dXJuIGN0eC5vbkRyYXdlckJ1dHRvblRhcCgpOyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDUsIFwicGFnZVwiLCA1KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDYsIFwiU3RhY2tMYXlvdXRcIiwgNiwgNyk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoOCwgXCJMYWJlbFwiLCA4KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCg5LCBcIkxhYmVsXCIsIDkpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50KDEwLCBcIkxhYmVsXCIsIDkpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMTEsIFwiRmxleGJveExheW91dFwiLCAxMCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxMiwgXCJUZXh0RmllbGRcIiwgMTEsIDEyKTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJuZ01vZGVsQ2hhbmdlXCIsIGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X1RlbXBsYXRlX1RleHRGaWVsZF9uZ01vZGVsQ2hhbmdlXzEyX2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4LnRleHRGaWVsZFZhbHVlID0gJGV2ZW50OyB9KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgxNCwgUGVyc29uYWxDb21wb25lbnRfTGFiZWxfMTRfVGVtcGxhdGUsIDEsIDAsIFwiTGFiZWxcIiwgMTMpO1xyXG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgxNSwgUGVyc29uYWxDb21wb25lbnRfTGFiZWxfMTVfVGVtcGxhdGUsIDEsIDAsIFwiTGFiZWxcIiwgMTQpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxNiwgXCJXcmFwTGF5b3V0XCIpO1xyXG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgxNywgUGVyc29uYWxDb21wb25lbnRfQnV0dG9uXzE3X1RlbXBsYXRlLCAxLCAwLCBcIkJ1dHRvblwiLCAxNSk7XHJcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDE4LCBQZXJzb25hbENvbXBvbmVudF9CdXR0b25fMThfVGVtcGxhdGUsIDEsIDAsIFwiQnV0dG9uXCIsIDE2KTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDE5LCBcIkJ1dHRvblwiLCAxNyk7XHJcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X1RlbXBsYXRlX0J1dHRvbl90YXBfMTlfbGlzdGVuZXIoKSB7IHJldHVybiBjdHgubW9zdHJhclRvZG9zKCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgyMCwgXCJMYWJlbFwiLCAxOCk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyMSwgXCJTZWFyY2hGb3JtXCIsIDE5KTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJzZWFyY2hcIiwgZnVuY3Rpb24gUGVyc29uYWxDb21wb25lbnRfVGVtcGxhdGVfU2VhcmNoRm9ybV9zZWFyY2hfMjFfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHguYnVzY2FyQWhvcmEoJGV2ZW50KTsgfSk7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1dGV4dCgyMiwgXCI+IFwiKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDIzLCBcIkxpc3RWaWV3XCIsIDIwKTtcclxuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJpdGVtVGFwXCIsIGZ1bmN0aW9uIFBlcnNvbmFsQ29tcG9uZW50X1RlbXBsYXRlX0xpc3RWaWV3X2l0ZW1UYXBfMjNfbGlzdGVuZXIoJGV2ZW50KSB7IHJldHVybiBjdHguT25JdGVtVGFwKCRldmVudCk7IH0pO1xyXG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyNCwgUGVyc29uYWxDb21wb25lbnRfbmdfdGVtcGxhdGVfMjRfVGVtcGxhdGUsIDMsIDIsIFwibmctdGVtcGxhdGVcIik7XHJcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcclxuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xyXG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XHJcbiAgICB9IGlmIChyZiAmIDIpIHtcclxuICAgICAgICBjb25zdCBfcjEgPSBpMC7Jtcm1cmVmZXJlbmNlKDEzKTtcclxuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgxMik7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdNb2RlbFwiLCBjdHgudGV4dEZpZWxkVmFsdWUpO1xyXG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xyXG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nSWZcIiwgX3IxLmhhc0Vycm9yKFwicmVxdWlyZWRcIikpO1xyXG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xyXG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nSWZcIiwgIV9yMS5oYXNFcnJvcihcInJlcXVpcmVkXCIpICYmIF9yMS5oYXNFcnJvcihcIm1pbmxlblwiKSk7XHJcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XHJcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCBfcjEudmFsaWQpO1xyXG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xyXG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nSWZcIiwgX3IxLmludmFsaWQpO1xyXG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDUpO1xyXG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIml0ZW1zXCIsIGN0eC5yZXN1bHRhZG9zKTtcclxuICAgIH0gfSwgZGlyZWN0aXZlczogW2kyLkFjdGlvbkJhckNvbXBvbmVudCwgaTIuTmF2aWdhdGlvbkJ1dHRvbkRpcmVjdGl2ZSwgaTIuVGV4dFZhbHVlQWNjZXNzb3IsIGkzLlJlcXVpcmVkVmFsaWRhdG9yLCBpNC5NaW5MZW5EaXJlY3RpdmUsIGkzLk5nQ29udHJvbFN0YXR1cywgaTMuTmdNb2RlbCwgaTUuTmdJZiwgaTIuTGlzdFZpZXdDb21wb25lbnRdLCBlbmNhcHN1bGF0aW9uOiAyIH0pO1xyXG5jbGFzcyBTZWxlY3Qge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEFycmF5cmVzdWx0YWRvcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYXJnbywgbmFtZSwgaW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmNhcmdvID0gY2FyZ287XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XHJcbmltcG9ydCB7IFBlcnNvbmFsUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcGVyc29uYWwtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgY2xhc3MgUGVyc29uYWxNb2R1bGUge1xyXG59XHJcblBlcnNvbmFsTW9kdWxlLsm1ZmFjID0gZnVuY3Rpb24gUGVyc29uYWxNb2R1bGVfRmFjdG9yeSh0KSB7IHJldHVybiBuZXcgKHQgfHwgUGVyc29uYWxNb2R1bGUpKCk7IH07XHJcblBlcnNvbmFsTW9kdWxlLsm1bW9kID0gLypAX19QVVJFX18qLyBpMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoeyB0eXBlOiBQZXJzb25hbE1vZHVsZSB9KTtcclxuUGVyc29uYWxNb2R1bGUuybVpbmogPSAvKkBfX1BVUkVfXyovIGkwLsm1ybVkZWZpbmVJbmplY3Rvcih7IGltcG9ydHM6IFtbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBQZXJzb25hbFJvdXRpbmdNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXV0gfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==