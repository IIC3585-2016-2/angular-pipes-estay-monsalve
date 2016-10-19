import { Pipe, PipeTransform } from '@angular/core';

import { WhatNumber } from './number';

@Pipe({ name: 'even' })
export class EvenPipe implements PipeTransform {
  transform(numbers: WhatNumber[]) {
    return numbers.filter(n => ((n.value)%2 == 0));
  }
}
