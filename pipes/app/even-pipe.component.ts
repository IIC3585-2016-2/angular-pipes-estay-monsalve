import { Component } from '@angular/core';

@Component({
  selector: 'even-pipe',
  template: `
  <h1>EvenPipe</h1>
  <div *ngFor="let n of (numbers | even)">
    {{n.name}}
  </div>
  <button (click)="addNumber()">Agregar Propiedad</button>
  `
})
export class EvenPipeComponent {
  numbers: any[] = [{name: 'dos', value: 2},{name: 'cuatro', value: 4},{name: 'seis', value: 6}];
  addNumber = () => {
    this.numbers.push({name: 'dos', value: 2});
  }
}
