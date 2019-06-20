(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ui-components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ui-components'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiComponentsService = /** @class */ (function () {
        function UiComponentsService() {
        }
        UiComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UiComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ UiComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UiComponentsService_Factory() { return new UiComponentsService(); }, token: UiComponentsService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [UiComponentsComponent, ButtonComponent],
                        imports: [],
                        exports: [UiComponentsComponent, ButtonComponent]
                    },] }
        ];
        return UiComponentsModule;
    }());

    exports.UiComponentsComponent = UiComponentsComponent;
    exports.UiComponentsModule = UiComponentsModule;
    exports.UiComponentsService = UiComponentsService;
    exports.ɵa = ButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui-components.umd.js.map
