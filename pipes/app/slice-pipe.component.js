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
var SlicePipeComponent = (function () {
    function SlicePipeComponent() {
        this.a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.a_start = 0;
        this.a_end = 11;
        this.b = 'Los archivos del proyecto están desordenados';
        this.b_start = 0;
        this.b_end = 28;
    }
    SlicePipeComponent = __decorate([
        core_1.Component({
            selector: 'slice-pipe',
            template: "\n  <h1>SlicePipe</h1>\n  <div><label>Use:</label> array_or_string_expression | slice:start[:end]</div>\n  <br>\n  <a href=\"https://angular.io/docs/ts/latest/api/common/index/SlicePipe-pipe.html\">Docs</a>\n  <br>\n  <div>\n    <label>Array start: </label>\n    <input [(ngModel)]=\"a_start\" />\n  </div>\n  <div>\n    <label>Array end: </label>\n    <input [(ngModel)]=\"a_end\" />\n  </div>\n  <div>\n    <label>String a cortar: </label>\n    <input [(ngModel)]=\"b\" />\n  </div>\n  <div>\n    <label>String start: </label>\n    <input [(ngModel)]=\"b_start\" />\n  </div>\n  <div>\n  <div>\n    <label>String end: </label>\n    <input [(ngModel)]=\"b_end\" />\n  </div>\n  <div>\n    <p>Arreglo: {{ a.toString() }}</p>\n    <p>Arreglo cortado: {{ a | slice:a_start:a_end }}</p>\n    <p>String: {{ b }}</p>\n    <p>String cortado: {{ b | slice:b_start:b_end }}</p>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SlicePipeComponent);
    return SlicePipeComponent;
}());
exports.SlicePipeComponent = SlicePipeComponent;
//# sourceMappingURL=slice-pipe.component.js.map