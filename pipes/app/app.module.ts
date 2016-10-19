import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CurrencyPipeComponent } from './currency-pipe.component';
import { I18nPluralPipeComponent } from './i18n-plural-pipe.component';
import { JsonPipeComponent } from './json-pipe.component';
import { PureJsonPipeComponent } from './pure-json-pipe.component';
import { SlicePipeComponent } from './slice-pipe.component';
import { UppercasePipeComponent } from './uppercase-pipe.component';
import { PercentPipeComponent } from './percent-pipe.component';
import { DatePipeComponent } from './date-pipe.component';
import { BinaryPipe } from './binary.pipe';
import { BinaryPipeComponent } from './binary-pipe.component';
import { ConcatenateComponent } from './concatenate.component';
import { EvenPipe } from './even.pipe';
import { EvenPipeComponent } from './even-pipe.component';
import { ImpureEvenPipe } from './impure-even.pipe';
import { ImpureEvenPipeComponent } from './impure-even-pipe.component';
import { AsyncPipeComponent } from './async-pipe.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CurrencyPipeComponent,
    I18nPluralPipeComponent,
    JsonPipeComponent,
    PureJsonPipeComponent,
    SlicePipeComponent,
    UppercasePipeComponent,
    PercentPipeComponent,
    DatePipeComponent,
    BinaryPipe,
    BinaryPipeComponent,
    ConcatenateComponent,
    EvenPipe,
    EvenPipeComponent,
    ImpureEvenPipe,
    ImpureEvenPipeComponent,
    AsyncPipeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
