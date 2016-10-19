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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var currency_pipe_component_1 = require('./currency-pipe.component');
var i18n_plural_pipe_component_1 = require('./i18n-plural-pipe.component');
var json_pipe_component_1 = require('./json-pipe.component');
var pure_json_pipe_component_1 = require('./pure-json-pipe.component');
var slice_pipe_component_1 = require('./slice-pipe.component');
var uppercase_pipe_component_1 = require('./uppercase-pipe.component');
var percent_pipe_component_1 = require('./percent-pipe.component');
var date_pipe_component_1 = require('./date-pipe.component');
var binary_pipe_1 = require('./binary.pipe');
var binary_pipe_component_1 = require('./binary-pipe.component');
var concatenate_component_1 = require('./concatenate.component');
var even_pipe_1 = require('./even.pipe');
var even_pipe_component_1 = require('./even-pipe.component');
var impure_even_pipe_1 = require('./impure-even.pipe');
var impure_even_pipe_component_1 = require('./impure-even-pipe.component');
var async_pipe_component_1 = require('./async-pipe.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                currency_pipe_component_1.CurrencyPipeComponent,
                i18n_plural_pipe_component_1.I18nPluralPipeComponent,
                json_pipe_component_1.JsonPipeComponent,
                pure_json_pipe_component_1.PureJsonPipeComponent,
                slice_pipe_component_1.SlicePipeComponent,
                uppercase_pipe_component_1.UppercasePipeComponent,
                percent_pipe_component_1.PercentPipeComponent,
                date_pipe_component_1.DatePipeComponent,
                binary_pipe_1.BinaryPipe,
                binary_pipe_component_1.BinaryPipeComponent,
                concatenate_component_1.ConcatenateComponent,
                even_pipe_1.EvenPipe,
                even_pipe_component_1.EvenPipeComponent,
                impure_even_pipe_1.ImpureEvenPipe,
                impure_even_pipe_component_1.ImpureEvenPipeComponent,
                async_pipe_component_1.AsyncPipeComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map