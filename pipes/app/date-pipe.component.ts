import { Component } from '@angular/core';

@Component({
  selector: 'date-pipe',
  template: `
  <h1>DatePipe</h1>
  <div><label>Use:</label> date_expression | date[:format]</div>
  <br>
  <a href="https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html">Docs</a>
  <br>
  <p>Hoy es {{ birthday | date:format }}</p>
  Los formatos admitidos por DatePipe son:
  <ul>
  <li>'medium'</li>
  <li>'short'</li>
  <li>'fullDate'</li>
  <li>'longDate'</li>
  <li>'mediumDate'</li>
  <li>'shortDate'</li>
  <li>'mediumTime'</li>
  <li>'shortTime'</li>
  </ul>
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
export class DatePipeComponent {
  birthday = Date.now();
  format = 'medium'
}
