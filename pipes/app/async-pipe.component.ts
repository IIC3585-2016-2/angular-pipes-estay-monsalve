import { Component } from '@angular/core';

@Component({
  selector: 'async-pipe',
  template: `
      <h2>Async Pipe Example</h2>
      <p>wait... {{promise | async}}</p>
      <button (click)="clickMe()">Click me to initiate promise</button>
      `
})

export class AsyncPipeComponent {
	promise : Promise <string> = null;
	clickMe() {
		this.promise = new Promise<string>((resolve, reject) => {
			setTimeout(function () {
				resolve("resolved");
			},2000);
		});
	}
}
