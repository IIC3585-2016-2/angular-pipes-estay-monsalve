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
var PercentPipeComponent = (function () {
    function PercentPipeComponent() {
        this.a = 0.259;
        this.b = 1.3495;
        this.digitInfo = '4.3-5';
    }
    PercentPipeComponent = __decorate([
        core_1.Component({
            selector: 'percent-pipe',
            template: "\n  <h1>PercentPipe</h1>\n  <div><label>Use:</label> number_expression | percent[:digitInfo]</div>\n  <br>\n  <a href=\"https://angular.io/docs/ts/latest/api/common/index/PercentPipe-pipe.html\">Docs</a>\n  <br>\n  <div>\n    <label>A: </label>\n    <input [(ngModel)]=\"a\" />\n  </div>\n  <div>\n    <label>B: </label>\n    <input [(ngModel)]=\"b\" />\n  </div>\n  <div>\n    <label>digitInfo: </label>\n    <input [(ngModel)]=\"digitInfo\" />\n  </div>\n  <div>\n    <p>A: {{a | percent}}</p>\n    <p>B: {{b | percent:digitInfo}}</p>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], PercentPipeComponent);
    return PercentPipeComponent;
}());
exports.PercentPipeComponent = PercentPipeComponent;
//# sourceMappingURL=percent-pipe.component.js.map