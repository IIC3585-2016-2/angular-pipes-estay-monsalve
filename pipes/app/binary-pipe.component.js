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
var BinaryPipeComponent = (function () {
    function BinaryPipeComponent() {
        this.number = 0;
    }
    BinaryPipeComponent = __decorate([
        core_1.Component({
            selector: 'binary-pipe',
            template: "\n  <h1>BinaryPipe</h1>\n  <div><label>Use:</label> number_expression | binary</div>\n  <br>\n  <div>\n    <label>Ingrese n\u00FAmero: </label>\n    <input [(ngModel)]=\"number\" />\n  </div>\n  <div>\n    <p>En binario: {{ number | binary }}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BinaryPipeComponent);
    return BinaryPipeComponent;
}());
exports.BinaryPipeComponent = BinaryPipeComponent;
//# sourceMappingURL=binary-pipe.component.js.map