import { Component } from '@angular/core';

@Component({
  selector: 'json-pipe',
  template: `
  <h1>JsonPipe</h1>
  <div><label>Use:</label> expression | json</div>
  <br>
  <a href="https://angular.io/docs/ts/latest/api/common/index/JsonPipe-pipe.html">Docs</a>
  <br>
  <div>
    <p>Without JSON pipe:</p>
    <pre>{{object}}</pre>
    <p>With JSON pipe:</p>
    <pre>{{object | json}}</pre>
  </div>`
})
export class JsonPipeComponent {
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
