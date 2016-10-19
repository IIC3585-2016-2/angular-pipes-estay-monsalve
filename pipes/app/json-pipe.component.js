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
var JsonPipeComponent = (function () {
    function JsonPipeComponent() {
        this.object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
    }
    JsonPipeComponent = __decorate([
        core_1.Component({
            selector: 'json-pipe',
            template: "\n  <h1>JsonPipe</h1>\n  <div><label>Use:</label> expression | json</div>\n  <br>\n  <a href=\"https://angular.io/docs/ts/latest/api/common/index/JsonPipe-pipe.html\">Docs</a>\n  <br>\n  <div>\n    <p>Without JSON pipe:</p>\n    <pre>{{object}}</pre>\n    <p>With JSON pipe:</p>\n    <pre>{{object | json}}</pre>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], JsonPipeComponent);
    return JsonPipeComponent;
}());
exports.JsonPipeComponent = JsonPipeComponent;
//# sourceMappingURL=json-pipe.component.js.map