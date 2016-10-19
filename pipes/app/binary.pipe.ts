import { Pipe, PipeTransform } from '@angular/core';

/*
 * Transforms an integer to binary
*/
@Pipe({name: 'binary'})
export class BinaryPipe implements PipeTransform {
  transform(value: number): string {
    return (value >>> 0).toString(2);
  }
}
