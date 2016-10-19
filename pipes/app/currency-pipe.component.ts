import { Component } from '@angular/core';

@Component({
  selector: 'currency-pipe',
  template: `
  <h1>PercentPipe</h1>
  <div><label>Use:</label> number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]</div>
  <br>
  <a href="https://angular.io/docs/ts/latest/api/common/index/PercentPipe-pipe.html">Docs</a>
  <br>
  <div>
    <label>Ingrese cantidad: </label>
    <input [(ngModel)]="money" />
  </div>
  <div>
    <label>digitInfo: </label>
    <input [(ngModel)]="digitInfo" />
  </div>

  <label>Mostrar CurrencySymbol: <input type="checkbox" ng-model="currencySymbol"></label><br/>
  <div>CurrencyCode:
  <select [(ngModel)]="currencyCode">
    <option value="USD">USD</option>
    <option value="CLP">CLP</option>
    <option value="EUR">EUR</option>
  </select></div>
  <div>
    <p>Tengo: {{money | currency:currencyCode:currencySymbol:digitInfo}}</p>
  </div>
  `
})
export class CurrencyPipeComponent {
  money: number = 0.259;
  digitInfo: string = '4.3-5';
  currencyCode: string = 'USD';
  currencySymbol: boolean = false;
}
