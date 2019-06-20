import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiComponentsService = /** @class */ (function () {
    function UiComponentsService() {
    }
    UiComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UiComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ UiComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UiComponentsService_Factory() { return new UiComponentsService(); }, token: UiComponentsService, providedIn: "root" });
    return UiComponentsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiComponentsComponent = /** @class */ (function () {
    function UiComponentsComponent() {
    }
    /**
     * @return {?}
     */
    UiComponentsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiComponentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ui-components',
                    template: "\n    <p>\n      ui-components works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    UiComponentsComponent.ctorParameters = function () { return []; };
    return UiComponentsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-button',
                    template: "<button>\n  <ng-content></ng-content>\n</button>\n",
                    styles: ["button{padding:8px;background-color:#06c;color:#fff;border:none;border-radius:2px}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiComponentsModule = /** @class */ (function () {
    function UiComponentsModule() {
    }
    UiComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UiComponentsComponent, ButtonComponent],
                    imports: [],
                    exports: [UiComponentsComponent, ButtonComponent]
                },] }
    ];
    return UiComponentsModule;
}());

export { UiComponentsComponent, UiComponentsModule, UiComponentsService, ButtonComponent as ɵa };
//# sourceMappingURL=ui-components.js.map
