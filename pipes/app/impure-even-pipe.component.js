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
var ImpureEvenPipeComponent = (function () {
    function ImpureEvenPipeComponent() {
        var _this = this;
        this.numbers = [{ name: 'dos', value: 2 }, { name: 'cuatro', value: 4 }, { name: 'seis', value: 6 }];
        this.addNumber = function () {
            _this.numbers.push({ name: 'dos', value: 2 });
        };
    }
    ImpureEvenPipeComponent = __decorate([
        core_1.Component({
            selector: 'impure-even-pipe',
            template: "\n  <h1>EvenPipe</h1>\n  <div *ngFor=\"let n of (numbers | impureEven)\">\n    {{n.name}}\n  </div>\n  <button (click)=\"addNumber()\">Agregar Propiedad</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ImpureEvenPipeComponent);
    return ImpureEvenPipeComponent;
}());
exports.ImpureEvenPipeComponent = ImpureEvenPipeComponent;
//# sourceMappingURL=impure-even-pipe.component.js.map