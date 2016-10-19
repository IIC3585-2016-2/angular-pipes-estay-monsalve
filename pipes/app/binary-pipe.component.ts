import { Component } from '@angular/core';

@Component({
  selector: 'binary-pipe',
  template: `
  <h1>BinaryPipe</h1>
  <div><label>Use:</label> number_expression | binary</div>
  <br>
  <div>
    <label>Ingrese número: </label>
    <input [(ngModel)]="number" />
  </div>
  <div>
    <p>En binario: {{ number | binary }}</p>
  </div>
  `
})
export class BinaryPipeComponent {
  number: number = 0;
}
