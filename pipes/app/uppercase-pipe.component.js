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
var UppercasePipeComponent = (function () {
    function UppercasePipeComponent() {
        this.word = "aaaaaaah";
    }
    UppercasePipeComponent = __decorate([
        core_1.Component({
            selector: 'uppercase-pipe',
            template: "\n  <h1>UpperCasePipe</h1>\n  <div><label>Use:</label> expression | uppercase</div>\n  <br>\n  <a href=\"https://angular.io/docs/ts/latest/api/common/index/UpperCasePipe-pipe.html\">Docs</a>\n  <br>\n  <div>\n    <label>Grita: </label>\n    <input [(ngModel)]=\"word\" />\n  </div>\n  <p>\u00A1{{ word | uppercase }}!</p>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], UppercasePipeComponent);
    return UppercasePipeComponent;
}());
exports.UppercasePipeComponent = UppercasePipeComponent;
//# sourceMappingURL=uppercase-pipe.component.js.map