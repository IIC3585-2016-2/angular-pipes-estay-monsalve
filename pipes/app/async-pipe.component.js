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
var core_1 = require("@angular/core");
var AsyncPipeComponent = (function () {
    function AsyncPipeComponent() {
        this.promise = null;
    }
    AsyncPipeComponent.prototype.clickMe = function () {
        this.promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("resolved");
            }, 2000);
        });
    };
    return AsyncPipeComponent;
}());
AsyncPipeComponent = __decorate([
    core_1.Component({
        selector: 'async-pipe',
        template: "\n      <h2>Async Pipe Example</h2>\n      <p>wait... {{promise | async}}</p>\n      <button (click)=\"clickMe()\">Click me to initiate promise</button>\n      "
    }),
    __metadata("design:paramtypes", [])
], AsyncPipeComponent);
exports.AsyncPipeComponent = AsyncPipeComponent;
//# sourceMappingURL=async-pipe.component.js.map