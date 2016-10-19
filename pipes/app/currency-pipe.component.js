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
var CurrencyPipeComponent = (function () {
    function CurrencyPipeComponent() {
        this.money = 0.259;
        this.digitInfo = '4.3-5';
        this.currencyCode = 'USD';
        this.currencySymbol = false;
    }
    CurrencyPipeComponent = __decorate([
        core_1.Component({
            selector: 'currency-pipe',
            template: "\n  <h1>PercentPipe</h1>\n  <div><label>Use:</label> number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]</div>\n  <br>\n  <a href=\"https://angular.io/docs/ts/latest/api/common/index/PercentPipe-pipe.html\">Docs</a>\n  <br>\n  <div>\n    <label>Ingrese cantidad: </label>\n    <input [(ngModel)]=\"money\" />\n  </div>\n  <div>\n    <label>digitInfo: </label>\n    <input [(ngModel)]=\"digitInfo\" />\n  </div>\n\n  <label>Mostrar CurrencySymbol: <input type=\"checkbox\" ng-model=\"currencySymbol\"></label><br/>\n  <div>CurrencyCode:\n  <select [(ngModel)]=\"currencyCode\">\n    <option value=\"USD\">USD</option>\n    <option value=\"CLP\">CLP</option>\n    <option value=\"EUR\">EUR</option>\n  </select></div>\n  <div>\n    <p>Tengo: {{money | currency:currencyCode:currencySymbol:digitInfo}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CurrencyPipeComponent);
    return CurrencyPipeComponent;
}());
exports.CurrencyPipeComponent = CurrencyPipeComponent;
//# sourceMappingURL=currency-pipe.component.js.map