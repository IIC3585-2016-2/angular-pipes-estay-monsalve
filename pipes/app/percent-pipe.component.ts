import { Component } from '@angular/core';

@Component({
  selector: 'percent-pipe',
  template: `
  <h1>PercentPipe</h1>
  <div><label>Use:</label> number_expression | percent[:digitInfo]</div>
  <br>
  <a href="https://angular.io/docs/ts/latest/api/common/index/PercentPipe-pipe.html">Docs</a>
  <br>
  <div>
    <label>A: </label>
    <input [(ngModel)]="a" />
  </div>
  <div>
    <label>B: </label>
    <input [(ngModel)]="b" />
  </div>
  <div>
    <label>digitInfo: </label>
    <input [(ngModel)]="digitInfo" />
  </div>
  <div>
    <p>A: {{a | percent}}</p>
    <p>B: {{b | percent:digitInfo}}</p>
  </div>`
})
export class PercentPipeComponent {
  a: number = 0.259;
  b: number = 1.3495;
  digitInfo: string = '4.3-5';
}
