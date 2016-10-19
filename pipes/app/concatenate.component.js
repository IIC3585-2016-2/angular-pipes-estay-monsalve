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
var ConcatenateComponent = (function () {
    function ConcatenateComponent() {
        this.birthday = Date.now();
        this.format = 'medium';
    }
    ConcatenateComponent = __decorate([
        core_1.Component({
            selector: 'concatenate',
            template: "\n  <h1>Concatenate</h1>\n  <div><label>Use:</label> date_expression | date[:format] | uppercase</div>\n  <br>\n  <a href=\"https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html\">Docs</a>\n  <br>\n  <p>Hoy es {{ birthday | date:format | uppercase }}</p>\n  <div>Formato:\n  <select [(ngModel)]=\"format\">\n    <option value=\"medium\">'medium'</option>\n    <option value=\"short\">'short'</option>\n    <option value=\"fullDate\">'fullDate'</option>\n    <option value=\"longDate\">'longDate'</option>\n    <option value=\"mediumDate\">'mediumDate'</option>\n    <option value=\"shortDate\">'shortDate'</option>\n    <option value=\"mediumTime\">'mediumTime'</option>\n    <option value=\"shortTime\">'shortTime'</option>\n  </select></div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ConcatenateComponent);
    return ConcatenateComponent;
}());
exports.ConcatenateComponent = ConcatenateComponent;
//# sourceMappingURL=concatenate.component.js.map