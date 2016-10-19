import { Component } from '@angular/core';

@Component({
  selector: 'impure-even-pipe',
  template: `
  <h1>EvenPipe</h1>
  <div *ngFor="let n of (numbers | impureEven)">
    {{n.name}}
  </div>
  <button (click)="addNumber()">Agregar Propiedad</button>
  `
})
export class ImpureEvenPipeComponent {
  numbers: any[] = [{name: 'dos', value: 2},{name: 'cuatro', value: 4},{name: 'seis', value: 6}];
  addNumber = () => {
    this.numbers.push({name: 'dos', value: 2});
  }
}
