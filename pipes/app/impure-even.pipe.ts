import { Pipe, PipeTransform } from '@angular/core';

import { WhatNumber } from './number';

@Pipe({ name: 'impureEven', pure: false })
export class ImpureEvenPipe implements PipeTransform {
  transform(numbers: WhatNumber[]) {
    return numbers.filter(n => ((n.value)%2 == 0));
  }
}
