import { Component } from '@angular/core';

@Component({
  selector: 'concatenate',
  template: `
  <h1>Concatenate</h1>
  <div><label>Use:</label> date_expression | date[:format] | uppercase</div>
  <br>
  <a href="https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html">Docs</a>
  <br>
  <p>Hoy es {{ birthday | date:format | uppercase }}</p>
  <div>Formato:
  <select [(ngModel)]="format">
    <option value="medium">'medium'</option>
    <option value="short">'short'</option>
    <option value="fullDate">'fullDate'</option>
    <option value="longDate">'longDate'</option>
    <option value="mediumDate">'mediumDate'</option>
    <option value="shortDate">'shortDate'</option>
    <option value="mediumTime">'mediumTime'</option>
    <option value="shortTime">'shortTime'</option>
  </select></div>
  `
})
export class ConcatenateComponent {
  birthday = Date.now();
  format = 'medium'
}
