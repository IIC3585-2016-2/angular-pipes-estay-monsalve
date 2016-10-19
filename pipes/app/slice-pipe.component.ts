import { Component } from '@angular/core';

@Component({
  selector: 'slice-pipe',
  template: `
  <h1>SlicePipe</h1>
  <div><label>Use:</label> array_or_string_expression | slice:start[:end]</div>
  <br>
  <a href="https://angular.io/docs/ts/latest/api/common/index/SlicePipe-pipe.html">Docs</a>
  <br>
  <div>
    <label>Array start: </label>
    <input [(ngModel)]="a_start" />
  </div>
  <div>
    <label>Array end: </label>
    <input [(ngModel)]="a_end" />
  </div>
  <div>
    <label>String a cortar: </label>
    <input [(ngModel)]="b" />
  </div>
  <div>
    <label>String start: </label>
    <input [(ngModel)]="b_start" />
  </div>
  <div>
  <div>
    <label>String end: </label>
    <input [(ngModel)]="b_end" />
  </div>
  <div>
    <p>Arreglo: {{ a.toString() }}</p>
    <p>Arreglo cortado: {{ a | slice:a_start:a_end }}</p>
    <p>String: {{ b }}</p>
    <p>String cortado: {{ b | slice:b_start:b_end }}</p>
  </div>`
})
export class SlicePipeComponent {
  a: number[] = [1,2,3,4,5,6,7,8,9,10,11];
  a_start: number = 0;
  a_end: number = 11;
  b: string = 'Los archivos del proyecto están desordenados';
  b_start: number = 0;
  b_end: number = 28;
}
