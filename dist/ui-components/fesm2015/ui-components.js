import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiComponentsService {
    constructor() { }
}
UiComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UiComponentsService.ctorParameters = () => [];
/** @nocollapse */ UiComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UiComponentsService_Factory() { return new UiComponentsService(); }, token: UiComponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiComponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ui-components',
                template: `
    <p>
      ui-components works!
    </p>
  `
            }] }
];
/** @nocollapse */
UiComponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button',
                template: "<button>\n  <ng-content></ng-content>\n</button>\n",
                styles: ["button{padding:8px;background-color:#06c;color:#fff;border:none;border-radius:2px}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiComponentsModule {
}
UiComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UiComponentsComponent, ButtonComponent],
                imports: [],
                exports: [UiComponentsComponent, ButtonComponent]
            },] }
];

export { UiComponentsComponent, UiComponentsModule, UiComponentsService, ButtonComponent as ɵa };
//# sourceMappingURL=ui-components.js.map
