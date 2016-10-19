import { Component } from '@angular/core';

@Component({
  selector: 'i18n-plural-pipe',
  template: `
  <h1>I18nPluralPipe</h1>
  <div><label>Use:</label> expression | i18nPlural:mapping</div>
  <br>
  <a href="https://angular.io/docs/ts/latest/api/common/index/I18nPluralPipe-pipe.html">Docs</a>
  <br>
  <div>
    <label>Cantidad de personas en el público: </label>
    <input [(ngModel)]="public" />
  </div>
  <p>Saludos {{ public | i18nPlural: publicMapping }}</p>
  `
})
export class I18nPluralPipeComponent {
  birthday = Date.now();
  public = 1;
  publicMapping:
    {[k: string]: string} = {'=0': '...', '=1': 'estimado/a.', 'other': 'estimados/as.'};
}
