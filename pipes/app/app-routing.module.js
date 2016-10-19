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
var router_1 = require("@angular/router");
var currency_pipe_component_1 = require("./currency-pipe.component");
var i18n_plural_pipe_component_1 = require("./i18n-plural-pipe.component");
var json_pipe_component_1 = require("./json-pipe.component");
var pure_json_pipe_component_1 = require("./pure-json-pipe.component");
var slice_pipe_component_1 = require("./slice-pipe.component");
var uppercase_pipe_component_1 = require("./uppercase-pipe.component");
var percent_pipe_component_1 = require("./percent-pipe.component");
var date_pipe_component_1 = require("./date-pipe.component");
var binary_pipe_component_1 = require("./binary-pipe.component");
var concatenate_component_1 = require("./concatenate.component");
var even_pipe_component_1 = require("./even-pipe.component");
var impure_even_pipe_component_1 = require("./impure-even-pipe.component");
var async_pipe_component_1 = require("./async-pipe.component");
var routes = [
    { path: '', redirectTo: '/currency', pathMatch: 'full' },
    { path: 'currency', component: currency_pipe_component_1.CurrencyPipeComponent },
    { path: 'i18nplural', component: i18n_plural_pipe_component_1.I18nPluralPipeComponent },
    { path: 'json', component: json_pipe_component_1.JsonPipeComponent },
    { path: 'purejson', component: pure_json_pipe_component_1.PureJsonPipeComponent },
    { path: 'slice', component: slice_pipe_component_1.SlicePipeComponent },
    { path: 'uppercase', component: uppercase_pipe_component_1.UppercasePipeComponent },
    { path: 'percent', component: percent_pipe_component_1.PercentPipeComponent },
    { path: 'date', component: date_pipe_component_1.DatePipeComponent },
    { path: 'binary', component: binary_pipe_component_1.BinaryPipeComponent },
    { path: 'concatenate', component: concatenate_component_1.ConcatenateComponent },
    { path: 'even', component: even_pipe_component_1.EvenPipeComponent },
    { path: 'impureeven', component: impure_even_pipe_component_1.ImpureEvenPipeComponent },
    { path: 'async', component: async_pipe_component_1.AsyncPipeComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map