import { Component } from '@angular/core';

@Component({
  selector: 'uppercase-pipe',
  template: `
  <h1>UpperCasePipe</h1>
  <div><label>Use:</label> expression | uppercase</div>
  <br>
  <a href="https://angular.io/docs/ts/latest/api/common/index/UpperCasePipe-pipe.html">Docs</a>
  <br>
  <div>
    <label>Grita: </label>
    <input [(ngModel)]="word" />
  </div>
  <p>¡{{ word | uppercase }}!</p>

  `
})
export class UppercasePipeComponent {
  word = "aaaaaaah";
}
