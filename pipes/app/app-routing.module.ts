import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrencyPipeComponent } from './currency-pipe.component';
import { I18nPluralPipeComponent } from './i18n-plural-pipe.component';
import { JsonPipeComponent } from './json-pipe.component';
import { PureJsonPipeComponent } from './pure-json-pipe.component';
import { SlicePipeComponent } from './slice-pipe.component';
import { UppercasePipeComponent } from './uppercase-pipe.component';
import { PercentPipeComponent } from './percent-pipe.component';
import { DatePipeComponent } from './date-pipe.component';
import { BinaryPipeComponent } from './binary-pipe.component';
import { ConcatenateComponent } from './concatenate.component';
import { EvenPipeComponent } from './even-pipe.component';
import { ImpureEvenPipeComponent } from './impure-even-pipe.component';
import { AsyncPipeComponent } from './async-pipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/currency', pathMatch: 'full' },
  { path: 'currency',  component: CurrencyPipeComponent },
  { path: 'i18nplural', component: I18nPluralPipeComponent },
  { path: 'json',     component: JsonPipeComponent },
  { path: 'purejson',     component: PureJsonPipeComponent },
  { path: 'slice',     component: SlicePipeComponent },
  { path: 'uppercase',     component: UppercasePipeComponent },
  { path: 'percent', component: PercentPipeComponent },
  { path: 'date', component: DatePipeComponent },
  { path: 'binary', component: BinaryPipeComponent },
  { path: 'concatenate', component: ConcatenateComponent },
  { path: 'even', component: EvenPipeComponent },
  { path: 'impureeven', component: ImpureEvenPipeComponent },
  { path: 'async', component: AsyncPipeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
