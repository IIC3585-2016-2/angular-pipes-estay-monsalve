"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var I18nPluralPipeComponent = (function () {
    function I18nPluralPipeComponent() {
        this.birthday = Date.now();
        this.public = 1;
        this.publicMapping = { '=0': '...', '=1': 'estimado/a.', 'other': 'estimados/as.' };
    }
    I18nPluralPipeComponent = __decorate([
        core_1.Component({
            selector: 'i18n-plural-pipe',
            template: "\n  <h1>I18nPluralPipe</h1>\n  <div><label>Use:</label> expression | i18nPlural:mapping</div>\n  <br>\n  <a href=\"https://angular.io/docs/ts/latest/api/common/index/I18nPluralPipe-pipe.html\">Docs</a>\n  <br>\n  <div>\n    <label>Cantidad de personas en el p\u00FAblico: </label>\n    <input [(ngModel)]=\"public\" />\n  </div>\n  <p>Saludos {{ public | i18nPlural: publicMapping }}</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], I18nPluralPipeComponent);
    return I18nPluralPipeComponent;
}());
exports.I18nPluralPipeComponent = I18nPluralPipeComponent;
//# sourceMappingURL=i18n-plural-pipe.component.js.map